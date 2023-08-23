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
                    <p style={{ fontSize: 32, fontWeight: '600' }}>Contact Us</p>
                    <p>Address</p>
                    <p>Email:<span style={{ color: 'red' }}>abc@gmail.com</span></p>
                    <p>Phone:<span style={{ color: 'red' }}>0000000000,1111111111</span></p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FaFacebookF style={{ fontSize: '40px', backgroundColor: 'blue', padding: 10, borderRadius: 100, margin: 3 }} />
                        <AiOutlineInstagram style={{ fontSize: '40px', backgroundColor: 'red', padding: 10, borderRadius: 100, margin: 3 }} />
                        <AiOutlineYoutube style={{ fontSize: '40px', backgroundColor: 'gray', padding: 10, borderRadius: 100, margin: 3 }} />
                    </div>
                </div>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3662.303395967776!2d85.3288887744589!3d23.377239103001546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e113a1d89761%3A0x6e3727603c6a7710!2sNucleus%20Mall!5e0!3m2!1sen!2sin!4v1692784944066!5m2!1sen!2sin" width="100%" height="550" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </>
    )
}