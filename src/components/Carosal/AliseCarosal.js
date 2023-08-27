import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../components/css/carosal/CarosalAlice.css';
import { Alarm, Play } from '@phosphor-icons/react';
import FinalCarosal from './FinalCarosal';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="2">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="3">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="4">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="5">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
];

const CarouselAlice = () => {
    return (
        <>
            <p style={{ color: 'white', textAlign: 'center', color: 'gold' }}>WHAT MAKES US DIFFERENT?</p>
            <p className='bestCompany'>We are the leading wedding photography service provider company, we never hesitate to commit and never fail to deliver.</p>
            <p className='teamready'>Our equipped team is ready to capture all the spectrum of your wedding events.</p>
            {/* <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                className="carosalMain"
                paddingLeft={10}
                paddingRight={20}
                autoPlay={true}
                // autoPlayControls={true}
                autoPlayInterval={2000}
                autoPlayStrategy="all"

            /> */}
            <FinalCarosal />
        </>
    )

};

export default CarouselAlice;