import { Carousel, Spin } from "antd";
import { useEffect, useState } from "react";
import { Col, Image, Row } from "react-bootstrap";
import { KEY_FACEBOOK_ACCESS_TOKEN, KEY_FACEBOOK_URL } from "../../utils/AppConstants";
import FacebookTiles from "../facebook-tiles";

const LandingComponent = (props) => {
    const { data } = props
    const [facebookData, setFacebookData] = useState(null);
    const [spinner, setSpinner] = useState(true);

    const fetchFacebookData = () => {
        setSpinner(true)
        const myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${KEY_FACEBOOK_ACCESS_TOKEN}`);

        const requestOptions = {
            method: "GET",
            headers: myHeaders,
            redirect: "follow"
        };

        fetch(KEY_FACEBOOK_URL, requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setFacebookData(JSON.parse(result)?.data)
                setSpinner(false)
            })
            .catch((error) => console.error(error));
    }

    useEffect(() => {
        fetchFacebookData()
    }, []);

    return (
        <>
            <h1 className="text-center">WECOME TO VILLAGE SOIBUGH</h1>
            <Carousel autoplay arrows>
                {data?.images?.map((image, index) => {
                    return (
                        <div key={index}>
                            <Image className="w-100" src={image} />
                        </div>
                    )
                })}
            </Carousel>

            {console.log(facebookData)}

            <Spin spinning={spinner} size="large" tip="Loading Updates">
                <h2 className="my-4 text-danger">News and Updates</h2>
            </Spin>
            <Row>
                {facebookData?.map((item, index) => {
                    return (
                        <Col className="mb-4" key={index} xs={12} sm={12} md={6} lg={4} xl={3}>
                            <FacebookTiles item={item} />
                        </Col>
                    )
                })}
            </Row>
        </>
    );
}

export default LandingComponent;