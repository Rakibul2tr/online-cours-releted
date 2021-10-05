import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row, Spinner,Button } from 'react-bootstrap';
import ServiceDecompo from './ServiceDecompo';

const ServiceDetail = () => {
    const [courseDetail,setcourseDetail]=useState([])
    useEffect(()=>{
        fetch(`./fack-data.json`)
        .then(res=> res.json())
        .then(data=>setcourseDetail(data))
    },[])

    
    return (
        <div className="container py-5">
            <h1 className="py-5">Our Course Services : {courseDetail.length}</h1>
            <Row>
                {
                courseDetail.length===0 ?
                <div className="w-100 text-center">
                    <Button className="w-25 " variant="danger" disabled>
                    <Spinner
                    as="span"
                    animation="border"
                    size="lm"
                    role="status"
                    aria-hidden="true"
                    />
                    Loading...
                  </Button>
                </div>
                :

                 courseDetail.map(element=><ServiceDecompo
                    key={element.id}
                    element={element}
                 ></ServiceDecompo>
                     
                 )
                }
            </Row>
        </div>
    );
};

export default ServiceDetail;