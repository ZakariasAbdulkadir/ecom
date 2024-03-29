import { Navbar, Nav, Container, NavDropdown, Badge } from 'react-bootstrap';
import { useNavigate, Link } from 'react-router-dom';


const Header = () => {
 
 
  return (
    <header>
      <Navbar bg='primary' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <Navbar.Brand>
              Electronics
            </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
                  Cart
                <>
                  <NavDropdown id='username'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    <NavDropdown.Item>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
                <NavDropdown title='Admin' id='adminmenu'>
                  <Link to='/admin/productlist'>  
                    Products
                  </Link>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
