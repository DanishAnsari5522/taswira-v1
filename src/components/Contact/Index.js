import React from 'react';
import '../../components/css/contact/Index.css';
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineInstagram, AiOutlineYoutube } from 'react-icons/ai'

export default function Contact() {
    return (
        <>
            <div className='ContactComp'>
                <div>
                    <p>NEED HELP</p>
                    <p style={{ fontSize: 62, fontWeight: '700' }}>Contact Us</p>
                    <p>Address:-  <span>P.20/44 -47 A , Vijay Nagaram Colony , Bhelupur</span></p>
                    <p>Email: <span style={{ color: 'white' }}> taswira32@gmail.com </span></p>
                    <p>Phone: <span style={{ color: 'white' }}> 7355661108,9616022575 </span></p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>



                        <a href='https://www.facebook.com/taswira32?mibextid=LQQJ4d'>
                            <FaFacebookF style={{ fontSize: '40px', backgroundColor: 'blue', padding: 10, borderRadius: 100, margin: 3 }} />
                        </a>

                        <a href='https://www.instagram.com/taswira._/'>
                            <AiOutlineInstagram style={{ fontSize: '40px', backgroundColor: 'gray', padding: 10, borderRadius: 100, margin: 3 }} />
                        </a>
                        <a href='https://www.youtube.com/@taswira32'>
                            <AiOutlineYoutube style={{ fontSize: '40px', backgroundColor: 'red', padding: 10, borderRadius: 100, margin: 3 }} />
                        </a>
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28858.227325274634!2d82.95822202503656!3d25.29484831005946!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e31f85355cd31%3A0xd2d8ca7d58dde2d0!2sBhelupur%2C%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700309850251!5m2!1sen!2sin" width="100%" height="450" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='contactMap'></iframe>
        </>
    )
}