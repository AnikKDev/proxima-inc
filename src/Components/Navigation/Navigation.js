import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import CustomLink from '../../Utilities/CustomLink';
import './Navigation.css';

const Navigation = () => {
    return (
        <div >
            <Navbar bg="light" variant="light">
                <Container style={{ height: "60px" }}>
                    <Nav className="mx-auto nav-links">
                        <CustomLink to="/">Home</CustomLink>
                        <CustomLink to="/home">Home</CustomLink>
                        <CustomLink to="/reviews">Reviews</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/blogs">Blogs</CustomLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigation;