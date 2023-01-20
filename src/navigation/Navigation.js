import { Navbar, Nav, Container, Button, NavDropdown, } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Navigation.css'
import { FaFingerprint } from 'react-icons/fa'


function Navigation() {
    return (
        <div>
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container className="dan">
                        <Navbar.Brand href="#home"><FaFingerprint className="text-white icon" /> DevDanish</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="me-auto">
                                <Link to="/" className="nav-item text-secondary">Home</Link>
                                <NavDropdown title="Scrunchies" id="collasible-nav-dropdown" className='select'>
                                    <NavDropdown.Item>
                                        <Link to="/products" className="nav-item text-secondary">Organza</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/products" className="nav-item text-secondary">Printed</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/products" className="nav-item text-secondary">Double Layered Hair Bows</Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                    <Link to="/products" className="nav-item text-secondary">Wristlets</Link>
                                    </NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                            <Nav>
                                <Nav.Link eventKey={2} href="#memes"></Nav.Link>
                                <Link to="/Login" className="nav-item text-secondary">Login</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation