import React from 'react';
import '../../components/css/home/VideoGallery.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { videos } from '../Gallery/VideoGallery/Video';

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
                        {videos.slice(0, 3).map((slide, index) => (
                            <Col key={index}>
                                <Card>
                                    <iframe src={slide.src}
                                        frameborder='0'
                                        allow='autoplay; encrypted-media'
                                        title='video'
                                        // onClick={() => handleOpenModal(index)}
                                        className='video h-[15rem]'
                                        controls aria-disabled
                                    />
                                </Card>
                            </Col>
                        ))}
                    </Row>

                </div>
            </div>
        </>
    )
}