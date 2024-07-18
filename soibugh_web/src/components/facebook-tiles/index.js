import { } from "antd";
import TimeAgo from 'javascript-time-ago';
import en from 'javascript-time-ago/locale/en';
import ru from 'javascript-time-ago/locale/ru';
import { Card, Image } from "react-bootstrap";
import ReactTimeAgo from "react-time-ago";
import { KEY_FACEBOOK_ACCESS_TOKEN, KEY_FACEBOOK_ACTIONS } from "../../utils/AppConstants";

TimeAgo.addDefaultLocale(en)
TimeAgo.addLocale(ru)

const FacebookTiles = (props) => {
    const { item } = props


    const handleOnClick = () => {
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
                    if (i.id === item?.id)
                        window.open(i?.actions[0]?.link, "_blank")
                })
            })
            .catch((error) => console.error(error));
    }
    return (
        <Card className="h-100">
            <Card.Body>
                <Image rounded src={item?.full_picture} fluid />
                <p style={{ textAlign: "justify" }} className="fs-6 mt-3"> {item?.message?.substring(0, 250)}
                    <span onClick={handleOnClick} className="cp text-primary">  ...See More</span>
                </p>
                <span className="text-warning position-absolute bottom-0"> Posted:
                    <ReactTimeAgo className="fw-bolder" date={item?.created_time} locale="en-US" />
                </span>
            </Card.Body>
        </Card>
    );
}

export default FacebookTiles;