import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarComponent() {
    return (
        <>
            <Navbar className="NavBar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Taca</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link><Link className="link-navbar" to='/'>Home</Link></Nav.Link>
                        <Nav.Link ><Link className="link-navbar" to='/artists'>Artists</Link></Nav.Link>
                        <Nav.Link ><Link className="link-navbar" to="/artworks">Artworks</Link></Nav.Link>
                        <NavDropdown className="nav-drop" title="Cathalogue" id="basic-nav-dropdown" alignright="true">
                            <NavDropdown.Item><Link to="/create-artist">Create Artist</Link></NavDropdown.Item>
                            <NavDropdown.Item><Link to="/create-artwork">Create Artwork</Link></NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link ><Link className="link-navbar" to="#home">Exhibitions</Link></Nav.Link>
                        <Nav.Link ><Link className="link-navbar" to="/create-artist">Shop</Link></Nav.Link>
                        <Nav.Link ><Link className="link-navbar" to="#pricing">About Us</Link></Nav.Link>
                        <Nav.Link ><Link className="link-navbar" to="#">Contact Us</Link></Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarComponent;