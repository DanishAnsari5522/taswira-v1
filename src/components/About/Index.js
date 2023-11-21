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
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>We Capture Splendid Wedding Memories</p>
                        <p className='beit'>Wedding Reels is an experienced & Best Wedding Photographer in India that is committed to enhancing customer satisfaction.
                            We have a lot of experience in Candid Wedding Photography, Pre Wedding Photography & Indian Wedding Photography.</p>
                    </div>
                </div>
                <div className='whatwedocomp'>
                    <div className='whatwedoimg'>
                        <img src="https://img.freepik.com/free-photo/hands-indian-bride-groom-intertwined-together-making-authentic-wedding-ritual_8353-10047.jpg?w=900&t=st=1700143639~exp=1700144239~hmac=bee75756a22fc80380694421ce358f3de1c9820517941a499532ebeae3ed166a" className='whatweimg' alt='image' />
                    </div>
                    <div className='whatwedo'>
                        <p style={{ fontSize: 30, color: 'rgb(164, 116, 25)' }}>Hire us as your Wedding Photographer</p>
                        <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '16px', marginBottom: '10px' }}>
                            Weddings are the Harold of a new life, and a new little world. The day brings in a roller coaster of emotions within the people.
                            The couple is equally happy to be beginning their new life.
                            Again there is a bittersweet pain in the heart of the bride,
                            for thinking of leaving her childhood home behind.
                        </p>
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