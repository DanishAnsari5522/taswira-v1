import React from 'react';
import '../../components/css/home/Status.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { photos } from '../Gallery/PhotoGallery/photos';


export default function Status() {
    return (
        <>
            <div className='StatusComp'>
                <p style={{ textAlign: 'center', color: 'white', paddingTop: '20px' }}>Photo Section</p>
                <div className='VideoList'>
                    <Row xs={1} md={3} className="g-4 bg-red">
                        {photos.slice(0, 5).map((file, ind) => (
                            <Col key={ind}>
                                <Card>
                                    <Card.Img variant="top" src={file.src}/>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
                <div></div>
            </div>
        </>
    )
}