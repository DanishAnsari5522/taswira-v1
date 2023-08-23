import React from 'react';
import contactus from '../components/css/contactus.css'
import Footer from '../components/Footer/Index'
import { FaFacebookF } from 'react-icons/fa';
import { GrInstagram } from 'react-icons/gr';
import { AiFillYoutube } from 'react-icons/ai'


const ContactUS = () => {
  return (
    <>
    <div className='mainDiv'>
            <header>
                <div className='back'>
                    <nav>
                        <div class="logo">
                            <h1>Taswira</h1>

                            <br></br>
                            <br></br>

                        </div>
                        <div class="menu">
                            <a href="#">Home</a>
                            <a href="#">ABout us</a>
                            <a href="#"> <span class="spam">Partners</span></a>

                            <a href="#">Package</a>

                            <a href="#">Blog</a>
                            <a href="#">Contact</a>

                        </div>
                    </nav>
                    <main>
                        <section>

                            <p><span>-</span>Need help<span>-</span></p>

                            <h1>Contact US</h1>
                            <p style={{color:'white'}}>
                    Desk No.7, C14/165 sonia Road ,Sigra varanas,uttar  <br></br>
                    paradesh 221010

                </p>
                <p>Email </p>
                <p>phone no</p>
                <FaFacebookF style={{marginRight:'15px',fontSize:'25px' ,color:'white'}}/>
                        <GrInstagram style={{marginRight:'15px',fontSize:'25px',color:'white'}}/>
                        <AiFillYoutube style={{marginRight:'15px',fontSize:'25px',color:'white'}}/>
                           

                          
                        </section>
                    </main>
                </div>
            </header>

           
                
            

            <Footer />
        </div>

   
    </>
  );
};

export default ContactUS;



