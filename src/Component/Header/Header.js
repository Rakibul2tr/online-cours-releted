import React from 'react';
import logo from '../../image/my-1.png'
import { Col, Container, Form, FormControl, Nav, Navbar, Row,Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
          <Row className="header-border row-cols-sm-12">
           <Navbar className="header-border" bg="dark" variant="dark" expand="md"fixed="top">
                <Container>
                <Col md={8} sm={12} className="d-flex">
                    <Navbar.Brand to="/"><img src={logo}width="40"height="40" alt="" /></Navbar.Brand>
                    <Nav className="me-auto">
                    <NavLink to="/home">Home</NavLink>
                    <NavLink to="/about">About Us</NavLink>
                    <NavLink to="/service">Our Service</NavLink>
                    <NavLink to="/contact">Countact</NavLink>
                    </Nav>
                </Col>
                <Col md={4}sm={12}>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Col>
                </Container>
            </Navbar>
          </Row>
        </div>
    );
};

export default Header;