import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
const ServiceDecompo = (props) => {

    const {image,title,author,description,price,id}=props.element;
    

    let history = useHistory();
    const enrollbtn=()=>{
        history.push(`/service/${id}`)
    }
    return (
        <Col md={4} className="courscard">    
        <Card className="cours-content text-center p-2">
            <div className="service-image">
                <Card.Img className="w-100 h-100 ms-5 rounded-circle" variant="top" src={image} />
            </div>
            <Card.Body>
                <Card.Title><h4 className="text-start">{title}</h4></Card.Title>
                    <h5 className="text-start">Cours Fee ${price}</h5>
                    <h6 className="text-start">Author Name : {author}</h6>
                <Card.Text>
                    <p className="text-start">{description}</p>
                </Card.Text>
            </Card.Body>
            <button onClick={enrollbtn} className="btn btn-success">
                 Enroll This Course
            </button>
        </Card>           
       </Col>
    );
};

export default ServiceDecompo;