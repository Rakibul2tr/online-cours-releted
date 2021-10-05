import React from 'react';
import image from '../../image/about.png'
import { Col, Row,Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const About = () => {

    let history = useHistory()
    const abouthendelar=()=>{
        history.push("/about")
    }
    return (
        <div className="container py-5 About">
        <Row className=" mt-1 py-2">
         <Col md={6}>
            <div className="border-end mt-5 py-5 px-2">
                <h1 className="text-success font-weight-bold Aboutheading">About Us</h1>
                <h6>Hi we are very caryful for our service . our online quran Laerning course is very good. so you can enroll our online laern course.</h6>
                <Button onClick={abouthendelar} className="btn-success mt-3">Learn Us</Button>
            </div>
         </Col>
         <Col md={6}>
            <div className="">
                <img width="100%"  src={image} alt="" />
            </div>
         </Col>
        </Row>
    </div>
    );
};

export default About;