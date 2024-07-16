// import { toast } from 'react-toastify';

import { Alert, Card, Flex, Menu, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import { groupBy, mapMenuDataToAntdMenu1 } from '../../utils/AppExtenstions';
import TopBar from './topbar';

import Thumbnail from '../../assets/images/Image_not_available.png';
import LoadingFull from '../../assets/images/server_loading.gif';
import { Navigate, Route, Routes } from 'react-router-dom';
import GenericComponent from '../generic-component';
import LandingComponent from '../landing-component';

var data = require('../../assets/SoibughOnline.json');
const { Meta } = Card;




const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState({ id: "start" });
    const [items, setItems] = useState([]);
    const [thumbnail, setThumbnail] = useState(Thumbnail);
    const [loading, setLoading] = useState(true);


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
            {/* <img src='https://picsum.photos/236/60' alt='' /> */}
            <div className=' bg-info pt-2 position-fixed w-100 z-1 overflow-hidden'>
                <h3 onClick={() => setSelectedItem({ id: "start" })} className='text-primary-emphasis text-center cp'>SOIBUGH BUDGAM</h3>
                <Menu className='bg-info' onClick={onClick} mode="horizontal" items={items} />
            </div >

            <div className='d-flex'>
                {/* <Menu className='bg-info bg-opacity-25' onClick={onClick} style={{ width: 220, height: "100vh" }} mode="vertical" items={items} /> */}
                {/* <img src={selectedItem?.image_url} alt='' /> */}

                {/* <Card>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                        <Card.Title>{selectedItem?.title}</Card.Title>
                        <Card.Text>
                            {selectedItem?.body}
                        </Card.Text>
                    </Card.Body>
                </Card> */}

                <div style={{ marginTop: 90 }} className='p-3 w-100 bg-info bg-opacity-10'>
                    {/* <div className='p-3 m-1 w-100 card bg-info bg-opacity-10'> */}
                    {selectedItem?.id === "start" ?
                        <>
                            <LandingComponent />
                        </>

                        :
                        <>

                            {/* <Image src="https://i.ibb.co/G3V3TVg/104650348-134107108299266-288366757284116827-n.jpg" width={200} />
                            <h5 style={{ lineHeight: 1.5, textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: "" + selectedItem?.body }}
                            /> */}
                            <div className='text-center mb-3'>
                                <Spin tip="Image Loading..." spinning={false}>
                                    {!loading ? <Image rounded src={thumbnail} width={400} fluid /> : <Image width={400} fluid rounded src={LoadingFull} />}
                                </Spin>
                                {/* <Image rounded src={selectedItem?.image_url} width={500} fluid /> */}
                            </div>

                            <h2>{selectedItem?.title}</h2>
                            <p style={{ lineHeight: 1.5, textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: "" + selectedItem?.body }}
                            />
                            <Row>
                                {selectedItem?.images &&
                                    selectedItem?.images.map((image, index) => {
                                        return (

                                            <Col key={index} xs={12} md={6} lg={4} xl={3}>
                                                <Spin tip="Image Loading..." spinning={loading}>

                                                    <Card
                                                        className='mt-3'
                                                        hoverable
                                                        cover={<img alt="example" src={image?.image_url} />}
                                                    >
                                                        <Meta title={image?.caption} description={image?.body} />
                                                    </Card>
                                                </Spin>
                                            </Col>
                                        )
                                    })
                                }
                            </Row>
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;