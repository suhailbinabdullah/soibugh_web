// import { toast } from 'react-toastify';

import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { groupBy, htmlStringToElement, mapMenuDataToAntdMenu, mapMenuDataToAntdMenu1 } from '../../utils/AppExtenstions';
import TopBar from './topbar';

var data = require('../../assets/SoibughOnline.json');




const Navbar = () => {

    const [current, setCurrent] = useState('mail');
    const [selectedItem, setSelectedItem] = useState({ id: "start", body: "Welcome to Soibugh Online" });
    const [items, setItems] = useState([]);
    const onClick = (e) => {
        console.log('click ', e);
        // const index = parseInt(e.key) - 2
        // setSelectedItem(data[index])

        // console.log("selected", data[e.key])
        // setCurrent(e.key);

        data.forEach(element => {
            if (element.id === e.key) {
                setSelectedItem(element)
                console.log("selected", element)
                return true
            }
        });
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
                <Menu onClick={onClick} style={{ width: 220, height: "100vh" }} mode="vertical" items={items} />
                <img src={selectedItem?.image_url} alt='' />
                <div className='p-3'>

                    {selectedItem?.id === "start" ? <h1 style={{ display: "flex", color: "green", textAlign: "center" }}>Welcome to Soibugh Online</h1> : <h5 style={{ lineHeight: 1.5, textAlign: "justify" }}
                        dangerouslySetInnerHTML={{ __html: selectedItem?.body }}
                    />}


                </div>
            </div>
        </>
    )
}

export default Navbar;