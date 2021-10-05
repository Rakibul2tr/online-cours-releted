import React from 'react';
import { Container, Form, Row,Button, Col } from 'react-bootstrap';
import image from '../../image/contact.png'

const Contacts = () => {
    return (
        <div className="py-5 contact-section">
            <Container>
            <h1 className="text-success pt-5 font-weight-bold contactheading">Contact Us</h1>
                <Row className="py-5">
                <Col md={6}>
                <div className="text-center w-100">
                    <Form className="text-start">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Check me out" />
                        </Form.Group>
                        <Button variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
                </Col>
                <Col md={6}>
                    <div className="contactimage">
                        <img className="w-100" src={image} alt="" />
                    </div>
                </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contacts;