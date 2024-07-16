import { Card, Carousel } from "antd";
import { Image } from "react-bootstrap";

const LandingComponent = (props) => {
    const { data } = props
    console.log("PROPS", data)

    return (
        <>
            <h1 className="text-center">WECOME TO VILLAGE SOIBUGH</h1>
            <Card>
                <Carousel autoplay arrows>
                    {data?.images?.map((image, index) => {
                        return (
                            <div key={index}>
                                <Image height={300} className="w-100" src={image?.image_url} />
                            </div>
                        )
                    })}
                </Carousel>
            </Card>
        </>
    );
}

export default LandingComponent;