import React from 'react';
import '../../components/css/Footer.css';
import { MdCall, MdOutlineMail } from 'react-icons/md';
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillYoutube } from 'react-icons/ai';

function Footer() {
    return (
        <>
            <div className='footercomp'>
                <div className='aboutcomp1'>
                    <p style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>ABOUT</p>
                    <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px' }}>Wedding Reels is an experienced & Best Wedding Photographer in India that is committed to enhancing <br></br>customer satisfaction. We have a lot of experience in Candid Wedding Photography, Pre Wedding Photography & Indian Wedding Photography.</p>
                    <div className='d-flex'>
                        <FaFacebookF style={{ marginRight: '15px', fontSize: '25px' }} />
                        <GrInstagram style={{ marginRight: '15px', fontSize: '25px' }} />
                        <AiFillYoutube style={{ marginRight: '15px', fontSize: '25px' }} />
                    </div>
                </div>

                <div className='aboutcomp1'>
                    <p style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>PAGES</p>
                    <ul style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '15px' }}>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Gallery</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                <div className='aboutcomp1'>
                    <p style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>ADDRESS</p>
                    <p>P.20/44 -47 A , Vijay Nagaram Colony , Bhelupur</p>
                    <p className='d-flex'><MdCall style={{ marginRight: '10px' }} />+91 7355661108,9616022575</p>
                    <p className='d-flex'><MdOutlineMail style={{ marginRight: '10px' }} />taswira32@gmail.com</p>
                </div>
            </div>
        </>
    )
}

export default Footer;