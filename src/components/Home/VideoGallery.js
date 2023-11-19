import React from 'react';
import '../../components/css/home/VideoGallery.css';
import ReactCarousel from '../Carosal/Test';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FinalCarosal from '../Carosal/FinalCarosal';
import CardFlip from '../Package/CardFlip';

const data = [
    'https://youtu.be/l3aKPVx_EK0',
    'https://youtu.be/mKQyY7x3W2s',
    'https://youtu.be/mKQyY7x3W2s'
]

export default function VideoGallery() {
    return (
        <>
            <div className='VideoGalleryComp'>
                <div className='videogallery'>
                    <p style={{ color: 'gold' }}>VIDEO GALLERY</p>
                    <h2 style={{ fontSize: 40, color: 'white', fontWeight: 'bold' }}>Wedding Videoshoot</h2>
                    <p style={{ color: 'white' }}>Here's an exhibition of some beautiful and eye-catching wedding shots our team clicked for our clients.</p>
                </div>
                <div className='VideoList'>
                    <Row xs={1} md={3} className="g-4 bg-red">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col key={idx}>
                                <Card>
                                    {/* <Card.Body> */}
                                    {/* <Card.Title>Card title {idx}</Card.Title> */}
                                    <iframe
                                        width="100%"
                                        height="180"
                                        src={`https://www.youtube.com/embed/${data[idx]}`}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        title="Embedded youtube"
                                        autoplay
                                    />
                                    {/* </Card.Body> */}
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </div>
                {/* <ReactCarousel /> */}
                {/* <FinalCarosal /> */}
                {/* IMP */}
                {/* <CardFlip /> */}
            </div>
        </>
    )
}