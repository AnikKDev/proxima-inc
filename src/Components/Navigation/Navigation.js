import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomLink from '../../Utilities/CustomLink';
import './Navigation.css';

const Navigation = () => {
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Container>
                    <Nav className="mx-auto nav-links">
                        <CustomLink to="/">Home</CustomLink>
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