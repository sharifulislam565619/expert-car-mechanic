import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from "react-router-hash-link";
import logo from '../../../images/logo.jpg'


const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
                <Container>
                    <Nav.Link as={HashLink} to="/home#home"><img style={{ width: '100px', height: "50px", borderRadius: "10px" }} src={logo} alt="" /></Nav.Link>

                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#about">About us</Nav.Link>
                        {user?.displayName ? <button onClick={logOut}>Logout</button> : <Nav.Link as={Link} to="/login">login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>-

                </Container>
            </Navbar>
        </>
    );
};

export default Header;