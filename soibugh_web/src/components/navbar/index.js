// import { toast } from 'react-toastify';

import { Alert, Flex, Menu, Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Image, Row } from 'react-bootstrap';
import { groupBy, mapMenuDataToAntdMenu1 } from '../../utils/AppExtenstions';
import TopBar from './topbar';

import Thumbnail from '../../assets/images/Image_not_available.png';
import LoadingFull from '../../assets/images/Loading-Full.gif';
import { Navigate, Route, Routes } from 'react-router-dom';
import GenericComponent from '../generic-component';

var data = require('../../assets/SoibughOnline.json');




const Navbar = () => {
    const [selectedItem, setSelectedItem] = useState({ id: "start", body: "Welcome to Soibugh Online" });
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
            <TopBar />
            {/* <img src='https://picsum.photos/236/60' alt='' /> */}
            {/* <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} /> */}
            <div className='d-flex'>
                <Menu className='bg-info bg-opacity-25' onClick={onClick} style={{ width: 220, height: "100vh" }} mode="vertical" items={items} />
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

                <div className='p-3 m-1 w-100 card bg-info bg-opacity-10'>
                    {selectedItem?.id === "start" ?
                        <>
                            <h1 className='text-center text-info'>Welcome to Village Soibugh</h1>
                        </>

                        :
                        <>

                            {/* <Image src="https://i.ibb.co/G3V3TVg/104650348-134107108299266-288366757284116827-n.jpg" width={200} />
                            <h5 style={{ lineHeight: 1.5, textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: "" + selectedItem?.body }}
                            /> */}
                            <div className='text-center mb-3'>
                                <Spin tip="Image Loading..." spinning={false}>
                                    {!loading ? <Image rounded src={thumbnail} width={400} fluid /> : <Image rounded src={LoadingFull} width={400} fluid />}
                                </Spin>
                                {/* <Image rounded src={selectedItem?.image_url} width={500} fluid /> */}
                            </div>

                            <h5 style={{ lineHeight: 1.5, textAlign: "justify" }}
                                dangerouslySetInnerHTML={{ __html: "" + selectedItem?.body }}
                            />
                        </>
                    }
                </div>
            </div>
        </>
    )
}

export default Navbar;