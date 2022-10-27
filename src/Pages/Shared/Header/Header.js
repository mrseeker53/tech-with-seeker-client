import React from 'react';
import { useContext } from 'react';
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import logo from '../../../images/logo.png';
import Sidebar from '../Sidebar/Sidebar';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import { Image } from 'react-bootstrap';



const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand href='/'>
                    <img
                        alt="" src={logo} width="70" height="32" className="d-inline-block align-top" />{' '}
                    Tech With Seeker
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/courses">Courses</Nav.Link>
                        <Nav.Link href="/faq">FAQ</Nav.Link>
                        <Nav.Link href="/blog">Blog</Nav.Link>
                        <NavDropdown className='w-25' title="Theme" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Light</NavDropdown.Item>
                            {/* <NavDropdown.Divider /> */}
                            <NavDropdown.Item href="#action/3.2">Dark</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Nav>

                        <>
                            {
                                user?.photoURL ?
                                    <>
                                        <OverlayTrigger
                                            delay={{ hide: 450, show: 300 }}
                                            overlay={(props) => (
                                                <Tooltip {...props}>
                                                    {user?.displayName}
                                                </Tooltip>
                                            )}
                                            placement="bottom"
                                        >
                                            <Image className='mt-2'
                                                style={{ height: '30px' }}
                                                roundedCircle src={user?.photoURL}>
                                            </Image>
                                        </OverlayTrigger>
                                        <Button className='ms-4' variant='light' onClick={handleLogOut}>Log out</Button>
                                    </>
                                    :
                                    <>
                                        <Link to='/login'>Login</Link>
                                        <Link className='mx-2' to='/register'>Register</Link>
                                    </>
                            }
                        </>
                    </Nav>
                    <div className='d-lg-none'>
                        <Sidebar></Sidebar>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;