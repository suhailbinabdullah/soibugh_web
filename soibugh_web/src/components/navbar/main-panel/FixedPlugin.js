import React, { Component, useState } from "react";

import { Dropdown, Badge, Button, Form, Image } from "react-bootstrap";
import { SettingOutlined } from '@ant-design/icons';

import sideBarImage1 from "../../../assets/images/soibugh_logo.png";
import sideBarImage2 from "../../../assets/images/soibugh_logo.png";
import sideBarImage3 from "../../../assets/images/soibugh_logo.png";
import sideBarImage4 from "../../../assets/images/soibugh_logo.png";
import { FloatButton, Modal } from "antd";

function FixedPlugin({
    hasImage,
    setHasImage,
    color,
    setColor,
    image,
    setImage
}) {
    const [open, setOpen] = useState(false);
    // constructor(props) {
    //   super(props);
    //   this.state = {
    //     classes: "dropdown show-dropdown open",
    //     bg_checked: true,
    //     bgImage: this.props.bgImage,
    //   };
    // }
    // handleClick = () => {
    //   this.props.handleFixedClick();
    // };
    // onChangeClick = () => {
    //   this.props.handleHasImage(!this.state.bg_checked);
    //   this.setState({ bg_checked: !this.state.bg_checked });
    // };
    return (
        <div className="fixed-plugin">
            <FloatButton tooltip="Settings" onClick={() => setOpen(true)} icon={<SettingOutlined />} />
            <Modal
                title="Sidebar color setting"
                okText="Save Setting"
                onOk={() => setOpen(false)}
                onCancel={() => setOpen(false)}
                mask={false}
                centered={false}
                open={open} >

                <li className="">
                    <p>Colors</p>
                    <div className="pull-right d-flex">
                        <div style={{ background: "black" }}
                            className={`color-badge ${color} === "black" ? "active-color" : ""`}
                            onClick={() => setColor("black")}
                        ></div>
                        <div style={{ background: "azure" }}
                            className={`color-badge ${color} === "azure" ? "active-color" : ""`}
                            onClick={() => setColor("azure")}
                        ></div>
                        <div style={{ background: "orange" }}
                            className={`color-badge ${color} === "orange" ? "active-color" : ""`}
                            onClick={() => setColor("orange")}
                        ></div>
                        <div style={{ background: "red" }}
                            className={`color-badge ${color} === "red" ? "active-color" : ""`}
                            onClick={() => setColor("red")}
                        ></div>
                        <div style={{ background: "purple" }}
                            className={`color-badge ${color} === "purple" ? "active-color" : ""`}
                            onClick={() => setColor("purple")}
                        ></div>
                        <div style={{ background: "blue" }}
                            className={`color-badge ${color} === "blue" ? "active-color" : ""`}
                            onClick={() => setColor("blue")}
                        ></div>
                    </div>
                    <div className="clearfix"></div>
                </li>
                <li className="">
                    <p>
                        Select Color
                    </p>
                    <Form.Check
                        type="switch"
                        id="custom-switch-1-image"
                        checked={hasImage}
                        onChange={setHasImage}
                    />
                </li>
                <li className="header-title">Click on any one image</li>
                <li className={image === sideBarImage1 ? "active" : ""}>
                    <a
                        className="img-holder switch-trigger d-block mb-2"
                        href="#pablo"
                        onClick={(e) => {
                            e.preventDefault();
                            setImage(sideBarImage1);
                        }}
                    >
                        <Image fluid alt="..." src={sideBarImage1}></Image>
                    </a>
                </li>
                <li className={image === sideBarImage2 ? "active" : ""}>
                    <a
                        className="img-holder switch-trigger d-block"
                        href="#pablo"
                        onClick={(e) => {
                            e.preventDefault();
                            setImage(sideBarImage2);
                        }}
                    >
                        <Image fluid alt="..." src={sideBarImage2}></Image>
                    </a>
                </li>
                <li className={image === sideBarImage3 ? "active" : ""}>
                    <a
                        className="img-holder switch-trigger d-block"
                        href="#pablo"
                        onClick={(e) => {
                            e.preventDefault();
                            setImage(sideBarImage3);
                        }}
                    >
                        <Image fluid alt="..." src={sideBarImage3}></Image>
                    </a>
                </li>
                <li className={image === sideBarImage4 ? "active" : ""}>
                    <a
                        className="img-holder switch-trigger d-block"
                        href="#pablo"
                        onClick={(e) => {
                            e.preventDefault();
                            setImage(sideBarImage4);
                        }}
                    >
                        <Image fluid alt="..." src={sideBarImage4}></Image>
                    </a>
                </li>

            </Modal>

        </div>
    );
}

export default FixedPlugin;
