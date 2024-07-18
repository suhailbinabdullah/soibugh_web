// import { toast } from 'react-toastify';

import { Card, Menu, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import { groupBy, mapMenuDataToAntdMenu1 } from '../../utils/AppExtenstions';

import Thumbnail from '../../assets/images/Image_not_available.png';
import LoadingFull from '../../assets/images/server_loading.gif';
import Logo from '../../assets/images/soibugh_logo.png';
import ImageModal from '../image-modal';
import LandingComponent from '../landing-component';

var data = require('../../assets/SoibughOnline.json');
const { Meta } = Card;




const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState({ id: "start" });
    const [items, setItems] = useState([]);
    const [thumbnail, setThumbnail] = useState(Thumbnail);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = (image) => {
        setCurrentImage(image)
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };


    const onClick = (e) => {
        console.log('click ', e);
        setLoading(true)
        // const index = parseInt(e.key) - 2
        // setSelectedItem(data[index])

        // console.log("selected", data[e.key])
        // setCurrent(e.key);

        data.forEach(element => {
            if (element.id === e.key) {
                setSelectedItem(element)
                console.log("selected", element)
                fetchImage(element)
                return true
            }
        });
    };

    const fetchImage = (item) => {
        if (item.image_url !== "NA")
            fetch(item?.image_url).then(res => {
                console.log(res)
                setLoading(false)
                setThumbnail(res?.url)
            }).catch(error => {
                console.error(error)
                setLoading(false)
                setThumbnail(Thumbnail)
            })
        else {

            setThumbnail(Thumbnail)
            setTimeout(() => {
                setLoading(false)
            }, 3000);
        }
    };




    useEffect(() => {
        console.log("rawData", data);
        data.sort((a, b) => a.id.localeCompare(b.id));

        const groupBySection = groupBy(data, 'section')
        console.log("groupBySection", groupBySection);
        setItems(mapMenuDataToAntdMenu1(groupBySection))

        console.log("mapMenuDataToAntdMenu1", mapMenuDataToAntdMenu1(groupBySection))
    }, []);

    return (
        <>
            {/* <TopBar /> */}
            <div className=' bg-info pt-2 position-fixed w-100 z-1 overflow-hidden'>
                {/* <h3 onClick={() => setSelectedItem({ id: "start" })} className='text-primary-emphasis text-center cp'>SOIBUGH BUDGAM</h3> */}
                <div className='text-center cp' onClick={() => setSelectedItem({ id: "start" })}>
                    <Image width={210} src={Logo} />
                </div>
                <Menu className='bg-info' onClick={onClick} mode="horizontal" items={items} />
            </div >

            <div className='d-flex'>

                <div style={{ marginTop: 90 }} className='p-3 w-100 bg-info bg-opacity-10'>
                    {selectedItem?.id === "start" ?
                        <>
                            <LandingComponent data={data.find(o => o.id === '72')} />
                        </>

                        :
                        <>
                            <div className='text-center mb-3'>
                                <Spin tip="Image Loading..." spinning={false}>
                                    {!loading ? <Image rounded src={thumbnail} width={400} fluid /> : <Image width={400} fluid rounded src={LoadingFull} />}
                                </Spin>
                            </div>

                            <h2>{selectedItem?.title}</h2>
                            <p style={{ lineHeight: 1.5, textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: "" + selectedItem?.body }}
                            />

                            {/* gallery component */}
                            <Row>
                                {selectedItem?.images &&
                                    selectedItem?.images.map((image, index) => {
                                        return (

                                            <Col key={index} xs={12} md={6} lg={4} xl={3}>
                                                <Spin tip="Image Loading..." spinning={loading}>
                                                    <Card
                                                        onClick={() => showModal(image)}
                                                        className='mt-3'
                                                        hoverable
                                                        cover={<img alt="example" src={image?.image_url} />}
                                                    >
                                                        <Meta title={image?.caption} description={`Photo By ${image?.author}`} />
                                                    </Card>
                                                </Spin>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                            <ImageModal
                                image={currentImage}
                                open={isModalOpen}
                                onOk={handleOk}
                                onCancel={handleCancel}
                            />
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;