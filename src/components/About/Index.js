import React from 'react';
import '../../components/css/About/Index.css';
import CarouselAlice from '../Carosal/AliseCarosal';
import { Link } from 'react-router-dom'

export default function About() {
    return (
        <>
            <div className='MainAbout'>
                <div className="AboutComp">
                    <div>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 17 }}>ABOUT US</p>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>We specialize in capturing magnificent wedding moments</p>
                        <p className='beit'>
                            Taswira stands as a seasoned and premier Wedding Photographer in India dedicated to elevating customer delight. With extensive expertise in Candid, Pre-Wedding, and Indian Wedding Photography, we bring a wealth of experience to capture your special moments.</p>
                    </div>
                </div>
                <div className='whatwedocomp'>
                    <div className='whatwedoimg'>
                        <img src="https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?w=900&t=st=1700143639~exp=1700144239~hmac=bee75756a22fc80380694421ce358f3de1c9820517941a499532ebeae3ed166a" className='whatweimg' alt='image' />
                    </div>
                    <div className='whatwedo'>
                        <p style={{ fontSize: 30, color: 'rgb(164, 116, 25)' }}>Hire us as your Wedding Photographer</p>

                        <p style={{ color: 'white', fontFamily: 'Times New Roman, monospace', fontSize: '18px', marginBottom: '10px' }}>
                            The day swirls with a myriad of emotions among all involved. The couple exudes equal joy, embarking on their new life together. Yet, the bride's heart holds a bittersweet ache, contemplating the farewell to her cherished childhood home
                        </p><br></br>


                        <Link to='/contact'>
                            <span className="getQuote">Get Quote</span>
                        </Link>

                    </div>
                </div>
                <CarouselAlice />
            </div>
        </>
    )
}