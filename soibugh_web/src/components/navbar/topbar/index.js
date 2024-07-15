import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

const TopBar = () => {

    const navigate = useNavigate()
    return (
        <Navbar expand="lg" bg="info" sticky='top'>
            <Container fluid>
                <Navbar.Brand href="#">Soibugh Budgam</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    {/* <Nav
                        className="me-auto my-2 my-lg-2"
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link onClick={() => navigate("/generic-component")}>About</Nav.Link>
                        <NavDropdown title="Developer" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Youtube</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                                Facebook
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Instagram
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#" disabled>
                            Linkedin
                        </Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-light">Search</Button>
                    </Form> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default TopBar;