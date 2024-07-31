import { Modal } from "antd";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
import { useState } from "react";
import { Card, Image } from "react-bootstrap";
import ReactTimeAgo from "react-time-ago";
import Thumbnail from '../../assets/images/Image_not_available.png';
import { KEY_FACEBOOK_ACCESS_TOKEN, KEY_FACEBOOK_ACTIONS } from "../../utils/AppConstants";

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const FacebookTiles = (props) => {
    const { item, index } = props

    const [openModal, setOpenModal] = useState(false);
    const [confirmLoading, setConfirmLoading] = useState(false);

    var colors = ['#00ffff14', '#ff4d4f1f', '#1987541c', '#87197b2b', '#55871924', '#ffffff7a',
        '#adb5bd69', '#ffc10736', '#1677ff29', '#9fff1629', '#2d16ff29', '#16f3ff33', '#ca16ff33',
        'silver', 'teal', 'white', 'yellow'];

    const handleOpenOnFacebookBtn = () => {
        setConfirmLoading(true)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${KEY_FACEBOOK_ACCESS_TOKEN}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(KEY_FACEBOOK_ACTIONS, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                // eslint-disable-next-line array-callback-return
                JSON.parse(result)?.data?.map(i => {
                    if (i.id === item?.id) {
                        setConfirmLoading(false)
                        setOpenModal(false)
                        window.open(i?.actions[0]?.link, "_blank")
                    }

                })
            })
            .catch((error) => console.error(error));
    }


    const handleOnClick = () => {
        console.log("ITEM CLICKED", item)
        setOpenModal(true)
    }

    return (
        <>
            <Card className="h-100 cp" onClick={handleOnClick} style={{ backgroundColor: colors[index] }}>
                <Card.Body>
                    <div className="d-flex mb-2">
                        <div className="me-2">
                            {item?.full_picture ? <Image width={90} height={90} rounded src={item?.full_picture} /> : <Image width={60} rounded src={Thumbnail} />}
                        </div>
                        <div className="max-lines">
                            {item?.message && <p style={{ fontSize: "12px", textAlign: "justify", textTransform: "capitalize" }}
                                dangerouslySetInnerHTML={{ __html: "" + item?.message?.substring(0, 160).toLowerCase().replace(/\n/g, "<br />") }}
                            />}
                        </div>

                        <span style={{ fontSize: "12px" }} className="fw-bold position-absolute bottom-0 pb-1">
                            <ReactTimeAgo className="fst-italic" date={item?.created_time} locale="en-US" />
                        </span>
                    </div>
                    <div style={{ fontSize: "12px" }} className="fw-bold fst-italic cp text-primary position-absolute bottom-0 end-0 pe-3 pb-1">...Click to see more</div>
                </Card.Body>
            </Card>

            <Modal
                title={<ReactTimeAgo className="fst-italic" date={item?.created_time} locale="en-US" />}
                okText="Open this post on Facebook"
                confirmLoading={confirmLoading}
                open={openModal}
                onOk={handleOpenOnFacebookBtn}
                onCancel={() => setOpenModal(false)}>
                <Image src={item?.full_picture} fluid />
                <br />
                <br />

                <p style={{ lineHeight: 1.5, textAlign: "justify", textTransform: "capitalize" }}
                    dangerouslySetInnerHTML={{ __html: "" + item?.message?.toLowerCase().replace(/\n/g, "<br />") }}
                />
            </Modal>
        </>
    );
}

export default FacebookTiles;