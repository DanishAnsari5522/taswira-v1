import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../components/css/carosal/CarosalAlice.css';
import { Alarm } from '@phosphor-icons/react';
import FinalCarosal from './FinalCarosal';

const CarouselAlice = () => {
    return (
        <>
            <div className='AliseCarosalComp'>
                <p style={{ color: 'white', textAlign: 'center', color: 'gold' }}>WHAT MAKES US DIFFERENT?</p>
                <p className='bestCompany'>We are the leading wedding photography service provider company, we never hesitate to commit and never fail to deliver.</p>
                <p className='teamready'>Our equipped team is ready to capture all the spectrum of your wedding events.</p>
                <FinalCarosal />
            </div>
        </>
    )

};

export default CarouselAlice;