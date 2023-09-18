import React from 'react';
import '../../css/home/viewMore/Index.css';
import FinalCarosal from '../../Carosal/FinalCarosal';
import ViewMoreCarosal from './Carosal';

function ViewMore({ props }) {
    return (
        <div className='viewMoreComp'>
            <div className="AboutComp">
                <div>
                    <p style={{ color: 'gold', textAlign: 'center', alignItems: 'center', fontSize: 17 }}>WEDDING REELS PRESENTS</p>
                    <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 42 }}>Traditonal Photography for Weddings</p>
                </div>
            </div>

            <ViewMoreCarosal />

            <div className='whatwedocomp'>
                <div className='whatwedoimg'>
                    <img src="https://www.weddingreels.in/wp-content/uploads/2022/01/pre-wedding1.jpg" className='whatweimg' />
                </div>
                <div className='whatwedo'>
                    <p style={{ fontSize: 30, color: 'rgb(164, 116, 25)' }}>Hire us as your Wedding Photographer</p>
                    <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '16px', marginBottom: '10px' }}>
                        Weddings are the Harold of a new life, and a new little world. The day brings in a roller coaster of emotions within the people.
                        The couple is equally happy to be beginning their new life.
                        Again there is a bittersweet pain in the heart of the bride,
                        for thinking of leaving her childhood home behind.
                    </p>
                    <span className="getQuote">Get Quote</span>
                </div>
            </div>
            <div>ViewMore</div>
        </div>
    )
}

export default ViewMore