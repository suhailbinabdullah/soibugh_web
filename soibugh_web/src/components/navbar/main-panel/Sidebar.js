import { AreaChartOutlined } from '@ant-design/icons';
import React from "react";
import { NavLink, useLocation } from "react-router-dom";

import { Nav } from "react-bootstrap";

const Sidebar = ({ color, image, items }) => {
    const location = useLocation();
    const activeRoute = (routeName) => {
        return location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    return (
        <div className="sidebar" data-image={image} data-color={color}>
            <div
                className="sidebar-background"
                style={{
                    backgroundImage: "url(" + image + ")"
                }}
            />
            <div className="sidebar-wrapper">
                <div className="logo d-flex text-center">
                    <a
                        href="https://www.creative-tim.com?ref=lbd-sidebar"
                        className="simple-text logo-mini mx-1 text-center"
                    >
                        <div className="logo-img text-center">
                            <img src={require("../../../assets/images/soibugh_logo.png")} alt="..." />
                        </div>
                    </a>
                    {/* <a className="simple-text" href="http://www.creative-tim.com">
                        Creative Tim
                    </a> */}
                </div>
                <Nav>
                    {items.map((prop, key) => {
                        if (!prop.redirect)
                            return (
                                <li
                                    className={
                                        prop.upgrade
                                            ? "active active-pro"
                                            : activeRoute(prop.layout + prop.path)
                                    }
                                    key={key}
                                >
                                    <NavLink
                                        to={prop.layout + prop.path}
                                        className="nav-link"
                                    // activeClassName="active"
                                    >
                                        <i className="nc-alien-33" />
                                        <AreaChartOutlined />
                                        <span className='ms-2'>{prop.key}</span>
                                    </NavLink>
                                </li>
                            );
                        return null;
                    })}
                </Nav>
            </div>
        </div>
    );
}

export default Sidebar;
