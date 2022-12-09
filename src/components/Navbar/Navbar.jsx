import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarComponent() {
    return (
        <>
            <Navbar className="NavBar" collapseOnSelect expand="sm" bg="black" variant="dark">
                <Container>

                    <Navbar.Brand href="#home">間</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='navbar-collapse' id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link-navbar" to='/'>Home</Link></Nav.Link>
                            <Nav.Link ><Link className="link-navbar" to='/artists'>Artists</Link></Nav.Link>
                            <Nav.Link ><Link className="link-navbar" to="/artworks">Artworks</Link></Nav.Link>
                            <NavDropdown className="nav-drop" title="Cathalogue" id="basic-nav-dropdown" alignright="true">
                                <NavDropdown.Item><Button variant="link" as={Link} to="/create-artist"><b>Create Artist</b></Button></NavDropdown.Item>
                                <NavDropdown.Item><Button variant="link" as={Link} to="/create-artwork"><b>Create Artwork</b></Button></NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link ><Link className="link-navbar" to="#home">Exhibitions</Link></Nav.Link>
                            <Nav.Link ><Link className="link-navbar" to="/shop">Shop</Link></Nav.Link>
                            <Nav.Link ><Link className="link-navbar" to="/footer">Contact Us</Link></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarComponent;