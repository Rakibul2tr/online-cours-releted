import React from 'react';
import image from '../../image/coungret-image.gif'
import { useState } from 'react';
import { Button, Col, Modal, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';

const UserDeshbord = () => {
    let {id}=useParams();

    let history=useHistory()
    const gobackbtn=()=>{
        history.push("/service")
    }

    const [smShow, setSmShow] = useState(true);
    return (
        <div className="py-5">
            {' '}
            
             <Modal
                size="mm"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm" className="text-success fs-1">
                Congratulations !!
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h5>You are enrolled our online Course!</h5>
                    <h3 className="text-center text-success">Thanks !!</h3>
                </Modal.Body>
            </Modal>
           
             <Row className="mt-5">
                <Col md={6}>
                    <div className="image">
                        <img src={image} alt="" />
                    </div>
                </Col>
                <Col md={6}>
                    <div className="">
                        <h1>Your Enrolled Course Number</h1><br></br>
                        <span className="courseid">{id}</span>
                    </div>
                </Col>
            </Row>
            <Button onClick={gobackbtn}className="btn-success">Go Back Our Course</Button>
        </div>
    );
};

export default UserDeshbord;