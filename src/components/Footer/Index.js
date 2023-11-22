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
                    <p style={{ color: 'white', fontFamily: 'Times New Roman, monospace', fontSize: '15px' }}>Taswira  is an experienced & Best Wedding Photographer in India that is committed to enhancing customer satisfaction. We have a lot of experience in Candid Wedding Photography, Pre Wedding Photography & Indian Wedding Photography.</p><br></br>
                    <div className='flex items-center'>
                        <a href='https://www.facebook.com/taswira32?mibextid=LQQJ4d' target='_blank'>
                            <FaFacebookF style={{ fontSize: '40px', backgroundColor: 'blue', padding: 10, borderRadius: 100, margin: 3 }} />
                        </a>
                        <a href='https://www.instagram.com/taswira._/' target='_blank'>
                            <GrInstagram style={{ fontSize: '40px', backgroundColor: 'gray', padding: 10, borderRadius: 100, margin: 3 }} />
                        </a>
                        <a href='https://www.youtube.com/@taswira32' target='_blank'>
                            <AiFillYoutube style={{ fontSize: '40px', backgroundColor: 'red', padding: 10, borderRadius: 100, margin: 3 }} />
                        </a>
                    </div>
                </div>

                <div className='aboutcomp1'>
                    <p style={{ fontSize: '18px', color: 'white', fontWeight: 'bold' }}>PAGES</p>
                    <ul style={{ color: 'white', fontFamily: 'Times New Roman, monospace', fontSize: '15px' }}>
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