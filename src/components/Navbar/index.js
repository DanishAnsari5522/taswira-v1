import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Gogo from '../../assets/taswiraimg.png'
import navbar from '../css/navbar.css'

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{backgroundColor:'black'}}>
      <Container fluid>
        
        <Navbar.Brand href="#" style={{color:'white',marginLeft:'2px' }}>Taswira</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        <img className='logomain' src={Gogo} alt='error' />
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '40px'  }}
            navbarScroll
          >
            <Nav.Link href="#action1" style={{color:''}}>Home</Nav.Link>
            <Nav.Link href="#action2"></Nav.Link>
            <NavDropdown title="Link" id="navbarScrollingDropdown" style={{color:'white'}}>
              <NavDropdown.Item href="#action3" style={{color:'white'}}>Action</NavDropdown.Item>
              
              <NavDropdown.Item href="#action4" style={{color:'white'}}>
                Another action
              </NavDropdown.Item>
              
              <NavDropdown.Divider />
             
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          
           
            <Nav.Link href="#" disabled>
              
            </Nav.Link>
          </Nav>
          
          
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;