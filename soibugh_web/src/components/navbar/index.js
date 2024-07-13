// import { toast } from 'react-toastify';

import { Menu } from 'antd';
import React, { useEffect, useState } from 'react';
import { groupBy, mapMenuDataToAntdMenu, mapMenuDataToAntdMenu1 } from '../../utils/AppExtenstions';

var data = require('../../assets/SoibughOnline.json');




const Navbar = () => {

    const [current, setCurrent] = useState('mail');
    const [items, setItems] = useState([]);
    const onClick = (e) => {
        console.log('click ', e.key);
        const index = parseInt(e.key) - 2

        console.log(data[index])
        setCurrent(e.key);
    };




    useEffect(() => {

        const groupBySection = groupBy(data, 'section')
        console.log(groupBySection);
        setItems(mapMenuDataToAntdMenu1(groupBySection))

        console.log(mapMenuDataToAntdMenu1(groupBySection))
    }, []);

    return (
        <>
            <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />
            <div>{ }</div>
        </>
    )
}

export default Navbar;