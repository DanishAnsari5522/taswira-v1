import React from 'react'
import Flipcard from '../Package/Flipcard'
import Navbar from '../Navbar/index'
import Carosal from '../Carosal/Index'
import Footer from '../Footer/Index'
import Package from '../css/Package.css'
import Logo from '../../assets/wed1.jpg'
import Gogo from '../../assets/taswiraimg.png'
import back2 from '../../assets/back2.jpg';
import { AiFillCamera } from 'react-icons/ai';
import { HiVideoCamera } from 'react-icons/hi';
import { FaPhotoVideo } from 'react-icons/fa';
import { HiPhotograph } from 'react-icons/hi';
import { GiBlackball } from 'react-icons/gi';
import { RiStackFill } from 'react-icons/ri';

const Index = () => {

    return (

        <>
            <Navbar />

            <div className='mainDiv '>
                <header>
                    <div className='backimg'>


                        <Carosal />
                        {/* <nav>
                        <div class="logo">
                            <h1>Taswira</h1>

                            <br></br>
                            <br></br>
                            
 


                        </div>
                         <div className="menu">
                            <a href="#">Home</a>
                            <a href="#">ABout us</a>
                            <a href="#"> <span class="spam">Partners</span></a>

                            <a href="#">Package</a>

                            <a href="#">Blog</a>
                            <a href="#">Contact</a>

                        </div>
                    </nav> */}
                        <main>
                            <section>

                                {/* <h5>ITS  YOUR   DREAM   SO  IT   MATTERS</h5> */}

                                {/* 

                            <h2>Best Wedding Photography Packages <span class="change_content"></span></h2> */}
                                {/* <div class="line-above-text">Wedding Reels is an experienced <br></br>& Best Wedding Photographer in Varanasi that <br></br>is committed to enhancing customer satisfaction. <br></br>We have a lot of experience in Candid Wedding <br></br>Photography, Pre Wedding Photography<br></br> & Wedding Photography.</div>
                            <br></br>
                            <br></br> */}
                                {/* <p class="color">Get the best Packages</p>
                            <br></br>
                            <br></br> */}

                                <a href="#" class="btntwo">Explore More</a>
                            </section>
                        </main>
                    </div>
                </header>



                <div className='part2'>

                    <img className='logomain' src={Gogo} alt='error' />
                    <p>PRE - WEDDING PHOTOGRAPHY LOCATION</p>
                    <h1>All Kinds of Wedding Photography Package</h1>
                    <h5> &nbsp;after it a Candid series, or the filmy cinematic shots,<br></br>
                        or a classic style photograph for your special frame.<br>
                        </br> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  We offer services of every regional and
                        <br></br> &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  style of Photography!</h5>

                    <Flipcard />


                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="#" class="btntwo" style={{ marginLeft: '42rem', marginTop: '20rem' }}>Explore More</a>




                </div>

                <div className='part3'>
                    <br></br>
                    <br></br>
                    <br></br>


                    <h1 style={{ lineHeight: '50px', }}>What you will get</h1>




                    <p style={{ display: "block", }}>Indian culture is considered to be one of the richest cultures,
                        in India. <br></br> With time, regions tend to lose the authenticity ,
                        of their culture by blending with the modern era</p>



                    <br></br>
                </div>


                <div className='conta'>
                    <br></br>
                    <div className='inner' >

                        <AiFillCamera style={{ marginLeft: '10%', fontSize: '60px', color: '#f0c65a', marginTop: "20px", borderRadius: "50px" }} />
                        <h4 style={{ color: 'white', marginLeft: '2%', display: 'inline-block' }}>Wedding photography</h4>
                        <p style={{ color: '#A5A5A5', marginLeft: '16%' }}>The best way to keep your memories  memorable.</p>

                    </div>
                    <div className='.exp1 .box-container .box '>

                    </div>



                    <div className='dinner' style={{ display: 'inline', }}>
                        <HiVideoCamera style={{ marginLeft: '10%', fontSize: '60px', color: '#f0c65a', borderRadius: "50px" }} />
                        <h4 style={{ color: 'white', marginLeft: '2%', display: 'inline-block' }}>Wedding Videography</h4>
                        <p style={{ color: '#A5A5A5', marginLeft: '16%' }}>You are gonna b able to relish these  moments a few years from now.</p>
                    </div>

                    <div className='dinner' style={{ display: 'inline', marginTop: '4%', marginBottom: '5%' }}>
                        <FaPhotoVideo style={{ marginLeft: '10%', fontSize: '60px', color: '#f0c65a', borderRadius: "50px" }} />
                        <h4 style={{ color: 'white', marginLeft: '2%', display: 'inline-block' }}>Teaser /Tralior</h4>
                        <p style={{ color: '#A5A5A5', marginLeft: '16%' }}>How about letting your guests know how grand your day is gonna be?  </p>
                        <br></br>
                        <br></br>
                    </div>

                </div>
                <div className='cont2'>
                    <br></br>
                    <br></br>
                    <div className='inner' style={{ display: 'inline', marginTop: '5%' }}>
                        <HiPhotograph style={{ marginLeft: '10%', fontSize: '60px', color: '#f0c65a', borderRadius: "50px" }} />
                        <h4 style={{ color: 'white', marginLeft: '2%', display: 'inline-block' }}> Full video Editing</h4>
                        <p style={{ color: '#A5A5A5', marginLeft: '16%' }}>The most surreal light and shade effects you can see! </p>
                    </div>
                    <div className='dinner' style={{ display: 'inline', marginTop: '4%' }}>
                        <GiBlackball style={{ marginLeft: '10%', fontSize: '60px', color: '#f0c65a', borderRadius: "50px" }} />
                        <h4 style={{ color: 'white', marginLeft: '2%', display: 'inline-block' }}> Canvera Album</h4>
                        <p style={{ color: '#A5A5A5', marginLeft: '16%' }}>How about preserving the memoirsforever, and hassle free? </p>
                    </div>
                    <div className='dinner' style={{ display: 'inline', marginTop: '4%' }}>
                        <RiStackFill style={{ marginLeft: '10%', fontSize: '60px', color: '#f0c65a', borderRadius: "50px" }} />
                        <h4 style={{ color: 'white', marginLeft: '2%', display: 'inline-block' }}> Photo Pendrive</h4>
                        <p style={{ color: '#A5A5A5', marginLeft: '16%' }}>A soft copy of all the good  memories is always a saviour. Ain't they?</p>
                        <br></br>
                        <br></br>






                        <section className='exp1'>
                            <div className="box-container">

                                <div className="box">
                                    <div className="content">
                                        <span> <AiFillCamera style={{ fontSize: '60px', color: 'black', marginTop: "20px", borderRadius: "50px" }} /></span>
                                        <h3>Pre-wedding shoot </h3>
                                        <p style={{ fontSize: '17px', color: 'black' }}>The best way to keep your memories memorable </p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="content">
                                        <span><HiVideoCamera style={{ marginLeft: '10%', fontSize: '60px', color: 'black', borderRadius: "50px" }} /> </span>
                                        <h3>Wedding shoot</h3>
                                        <p style={{ fontSize: '17px', color: 'black' }}>You are gonna b able to relish these  moments a few years from now. </p>
                                    </div>
                                </div>

                                <div className="box">
                                    <div className="content">
                                        <span><FaPhotoVideo style={{ marginLeft: '10%', fontSize: '60px', color: 'black', borderRadius: "50px" }} /></span>
                                        <h3>Videography</h3>
                                        <p style={{ fontSize: '17px', color: 'black' }}>The most surreal light and shade effects you can see!</p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <span><GiBlackball style={{ marginLeft: '10%', fontSize: '60px', color: 'black', borderRadius: "50px" }} /></span>
                                        <h3>Pre shoot</h3>
                                        <p style={{ fontSize: '17px', color: 'black' }}>How about preserving the memoirsforever, and hassle free? </p>
                                    </div>
                                </div>
                                <div className="box">
                                    <div className="content">
                                        <span><RiStackFill style={{ marginLeft: '10%', fontSize: '60px', color: '#f0c65a', borderRadius: "50px" }} /></span>
                                        <h3>Shooting </h3>
                                        <p style={{ fontSize: '20px', color: 'black' }}>A soft copy of all the good  memories is always a saviour. Ain't they? </p>
                                    </div>
                                </div>

                            </div>

                        </section>


                    </div>
                </div>





                <div className='partback'>
                    <div className='part4'>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <h1 >Get Amazing Offers for your Wedding</h1>
                        <p> &nbsp; &nbsp; The spontaneous candid photography of the<br></br> couple and the dear ones, or the cinematic angles <br></br>&nbsp; &nbsp;of the rituals, or the classic
                            family photograph.</p>
                        <br></br>
                        <br></br>
                        <a href="#" class="btntwo">Contact Us </a>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>

                <Footer />


            </div>


        </>


    )
}
export default Index