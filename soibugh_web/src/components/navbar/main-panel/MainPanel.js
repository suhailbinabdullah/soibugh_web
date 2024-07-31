import React, { useEffect, useState } from 'react';
import Thumbnail from '../../../assets/images/Image_not_available.png';
import { groupBy, mapMenuDataToAntdMenu1 } from '../../../utils/AppExtenstions';
import Sidebar from './Sidebar';
import Topbar from './Navbar';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Footer from './Footer';
import FixedPlugin from './FixedPlugin';

var data = require('../../../assets/SoibughOnline.json');
var sidebarImage = require('../../../assets/images/Image_not_available.png')


const items = new Array(13).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));
const MainPanel = (props) => {

    const [selectedItem, setSelectedItem] = useState({ id: "start" });
    const [items, setItems] = useState([]);
    const [thumbnail, setThumbnail] = useState(Thumbnail);
    const [loading, setLoading] = useState(true);
    const [currentImage, setCurrentImage] = useState();

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [image, setImage] = React.useState(sidebarImage);
    const [color, setColor] = React.useState("black");
    const [hasImage, setHasImage] = React.useState(true);


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
        data.sort((a, b) => a.sorting_order.localeCompare(b.sorting_order));

        const groupBySection = groupBy(data, 'section')
        console.log("groupBySection", groupBySection);
        setItems(mapMenuDataToAntdMenu1(groupBySection))

        console.log("mapMenuDataToAntdMenu1", mapMenuDataToAntdMenu1(groupBySection))
    }, []);

    const mainPanel = React.useRef(null);

    return (
        <>
            <div className="wrapper">
                <Sidebar color={color} image={hasImage ? image : ""} items={items} />
                <div className="main-panel" ref={mainPanel}>
                    <Topbar />
                    <div className="content">
                        {/* <Switch>{getRoutes(routes)}</Switch> */}
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                        <h1>Welcome   to   village soibugh</h1>
                    </div>
                    <Footer />
                </div>
            </div>
            <FixedPlugin
                hasImage={hasImage}
                setHasImage={() => setHasImage(!hasImage)}
                color={color}
                setColor={(color) => setColor(color)}
                image={image}
                setImage={(image) => setImage(image)}
            />
        </>
    );
};
export default MainPanel;