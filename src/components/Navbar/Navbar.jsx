import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';
import './Navbar.css';

function NavbarComponent() {
    return (
        <>
            <Navbar className="NavBar" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Taca</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link className="link-navbar" href='/'>Home</Nav.Link>
                        <Nav.Link className="link-navbar" href="/artists">Artists</Nav.Link>
                        <Nav.Link className="link-navbar" href="/artworks">Artworks</Nav.Link>
                        <Nav.Link className="link-navbar" href="#home">Exhibitions</Nav.Link>
                        <Nav.Link className="link-navbar" href="#features">Shop</Nav.Link>
                        <Nav.Link className="link-navbar" href="#pricing">About Us</Nav.Link>
                        <Nav.Link className="link-navbar" href="#">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarComponent;