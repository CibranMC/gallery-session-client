import { AuthContext } from '../../context/auth.context';

import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useContext } from 'react';

function NavbarComponent() {
    const { logOut, isLoggedIn, user } = useContext(AuthContext)


    return (
        <>
            <Navbar className="NavBar" collapseOnSelect expand="sm" bg="black" variant="dark">
                <Container>

                    <Navbar.Brand className="brand" href="#home">間</Navbar.Brand>

                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='navbar-collapse' id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link><Link className="link-navbar" to='/'>Home</Link></Nav.Link>
                            <Nav.Link ><Link className="link-navbar" to='/artists'>Artistas</Link></Nav.Link>
                            <Nav.Link ><Link className="link-navbar" to="/artworks">Obras</Link></Nav.Link>
                            {
                                isLoggedIn && user?.role === 'Gallerist' &&
                                <NavDropdown className="nav-drop" title="Cathalogue" id="basic-nav-dropdown" alignright="true">
                                    <NavDropdown.Item><Link variant="link" as={Link} to="/create-artist"><b>Create Artist</b></Link></NavDropdown.Item>
                                    <NavDropdown.Item><Link variant="link" as={Link} to="/create-artwork"><b>Create Artwork</b></Link></NavDropdown.Item>
                                </NavDropdown>
                            }
                            <Nav.Link ><Link className="link-navbar" onClick={() => { window.location.href = "#footer" }}>Contacto</Link></Nav.Link>



                            {isLoggedIn ? (
                                <>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/auth/profile'>
                                            Perfil
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/' onClick={logOut}>Desconectarse</Link>
                                    </Nav.Link>
                                </>
                            ) : (
                                <>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='auth/register'>
                                            Registro
                                        </Link>
                                    </Nav.Link>
                                    <Nav.Link as='span'>
                                        <Link className='link-navbar' to='/auth/login'>
                                            Iniciar sesión
                                        </Link>
                                    </Nav.Link>


                                </>
                            )
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </>
    );
}

export default NavbarComponent;