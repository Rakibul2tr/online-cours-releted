import React from 'react';
import { Col, Nav, Row, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer bg-dark mt-1 pt-5">
            <div className="container">
            <Row className="py-5">
                <Col md={6}>
                  <div className="text-white py-3">
                      <h4>Contact Us</h4>
                      <h5><Link to="">rakibul2tr@gmail.com</Link></h5>
                      <h6>+088024682645</h6>
                      <p>Hi we are very caryful for our service . our online quran Laerning course is very good. so you can enroll our online laern course. course ending is 12/11/2021.</p>
                  </div>
                </Col>
                <Col md={6}>
                <Stack direction="Vertical" gap={3}>
                  <Nav className="d-flex flex-column text-white">
                    <Nav.Link to="#home">Home</Nav.Link>
                    <Nav.Link to="#features">About Us</Nav.Link>
                    <Nav.Link to="#pricing">Our Service</Nav.Link>
                    <Nav.Link to="#pricing">Countact</Nav.Link>
                  </Nav>
                </Stack>
                </Col>
            </Row>
            <Row>
                <p className="text-white py-3 border-top">Copywrite @ Rakibul Islam</p>
            </Row>
        </div>
     </div>
    );
};

export default Footer;