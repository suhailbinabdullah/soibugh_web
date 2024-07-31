
import { Navbar, Container, Nav, Dropdown, Button, NavDropdown } from "react-bootstrap";
import { AreaChartOutlined } from '@ant-design/icons';


function Topbar() {
    const mobileSidebarToggle = (e) => {
        e.preventDefault();
        document.documentElement.classList.toggle("nav-open");
        var node = document.createElement("div");
        node.id = "bodyClick";
        node.onclick = function () {
            this.parentElement.removeChild(this);
            document.documentElement.classList.toggle("nav-open");
        };
        document.body.appendChild(node);
    };

    const getBrandText = () => {
        // for (let i = 0; i < routes.length; i++) {
        //     if (location.pathname.indexOf(routes[i].layout + routes[i].path) !== -1) {
        //         return routes[i].name;
        //     }
        // }
        return "Mohalla";
    };
    return (
        <Navbar bg="success" expand="lg" data-bs-theme="dark" sticky="top">
            <Container fluid>
                <div className="d-flex justify-content-center align-items-center ml-2 ml-lg-0">
                    <Button
                        variant="dark"
                        className="d-lg-none btn-fill d-flex justify-content-center align-items-center rounded-circle p-2"
                        onClick={mobileSidebarToggle}
                    >
                        <AreaChartOutlined />
                    </Button>
                    <Navbar.Brand
                        href="#home"
                        onClick={(e) => e.preventDefault()}
                        className="mr-2"
                    >
                        {getBrandText()}
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" navbar>
                        <Nav.Link
                            data-toggle="dropdown"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                            className="m-0"
                        >
                            <i className="nc-icon nc-palette"></i>
                            <span className="ml-1">Dashboard</span>
                        </Nav.Link>
                        <Nav.Link
                            className="m-0"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <i className="nc-icon nc-zoom-split"></i>
                            <span className="d-lg-block"> Search</span>
                        </Nav.Link>

                    </Nav>
                    <Nav>
                        <Nav.Link
                            className="m-0"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <span className="no-icon">Account</span>
                        </Nav.Link>
                        <Nav.Link
                            className="m-0"
                            href="#pablo"
                            onClick={(e) => e.preventDefault()}
                        >
                            <span className="no-icon">Log out</span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Topbar;
