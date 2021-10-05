import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const Services = () => {
    const [services,setServices]=useState([])
    useEffect(()=>{
        fetch(`./fack-data-1.json`)
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])

    let history = useHistory();
    const ShowAllCourse=()=>{
        history.push("/service")
    }

    return (
        <div className="Service-section">
            <div className="container serviceContain">
            <Row className="py-5">
                <h1 className="servicebigheading text-success font-weight-bold">Our Services</h1>
            </Row>
            <Row>
                {
                    services.map(service=><Col md={4}key={service.id}>
                        
                        <Card className="homepagservic text-center p-2 mb-3">
                            <div className="service-image">
                            <Card.Img className="w-100 h-100 ms-5 rounded-circle" variant="top" src={service.image} />
                            </div>
                            <Card.Body>
                            <Card.Title><h4 className="text-start">{service.title}</h4></Card.Title>
                            <h6 className="text-start">Cours Fee ${service.price}</h6>
                            <Card.Text>
                                <p className="text-start">{service.description}</p>
                            </Card.Text>
                            <Link to="/service" className="coursanchor">Enroll This Course </Link>
                            </Card.Body>
                        </Card>
                        </Col>
                    )
                }
                
            </Row>
            <Row className="p-3">
                <Col className="offset-md-10 ">
                    <Button onClick={ShowAllCourse} className="btn-success">Show All Course</Button>
                </Col>
            </Row>
          </div>
        </div>
    );
};

export default Services;