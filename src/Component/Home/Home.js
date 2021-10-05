import React from 'react';
import image from '../../image/home-bg1.png'
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Home = () => {

    let history = useHistory()
    const getstartdbtn=()=>{
        history.push("/service")
    }
    return (
        <div className="Home">
            <div className="container py-5">
            <Row className=" mt-1 py-5">
            <Col md={6}>
            <div className="border-end">
                <img width="100%" src={image} alt="" />
            </div>
            </Col>
             <Col md={6}>
                <div className="home-text mt-5 py-3">
                    <h1 className=" text-success font-weight-bold">Welcome for our online course</h1>
                    <h6>Hi we are very caryful for our service . our online quran Laerning course is very good. so you can enroll our online laern course.</h6>
                    <Button onClick={getstartdbtn} className="btn-success mt-3">Get Started</Button>
                </div>
             </Col>
            </Row>
          </div>
        </div>
    );
};

export default Home;