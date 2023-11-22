import React from 'react';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../components/css/carosal/CarosalAlice.css';
import { Alarm } from '@phosphor-icons/react';
import FinalCarosal from './FinalCarosal';


const CarouselAlice = () => {
    return (
        <>
            <div className='AliseCarosalComp'>
                <p style={{ color: 'white', textAlign: 'center', color: 'gold' }}>What sets us apart?</p>
                <p className='bestCompany'>As the premier provider of wedding photography services, we consistently pledge and unfailingly deliver on our promises.</p>
                <p className='teamready'>Our proficient team is prepared to capture every aspect of your wedding occasions.</p>
               


                <FinalCarosal />
            </div>
        </>
    )

};

export default CarouselAlice;