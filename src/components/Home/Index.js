import React from "react";
import Carosal from "../Carosal/Index";
import CarouselAlice from "../Carosal/AliseCarosal";
import '../../components/css/home/Index.css';
import VideoGallery from "./VideoGallery";
import Status from "./Status";
import PhotographyPackage from "./PhotographyPackage";
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <div className="HomeComp">
                <Carosal />
                <CarouselAlice />
                <div className='whatwedocomp'>
                    <div className='whatwedoimg'>
                        <img src="https://img.freepik.com/premium-photo/bride-groom-hand-together-indian-wedding_14349-57.jpg?w=900" className='whatweimg' />
                    </div>
                    <div className='whatwedo'>
                        <p style={{ fontSize: 30, color: 'rgb(164, 116, 25)' }}>Choose us to immortalize your special day through stunning photography</p><br></br>
                        <p style={{ color: 'white', fontFamily: 'Times New Roman, monospace', fontSize: '16px', marginBottom: '10px' }}>
                        Weddings mark the inception of a new journey, a miniature universe brimming with emotions. It's a blend of joy for the couple's new beginning and a touch of nostalgia for the bride bidding adieu to her childhood sanctuary.
                        </p>
                        <br></br>
                        <Link to='/contact'>
                            <span className="getQuote">Get Quote</span>
                        </Link>

                    </div>
                </div>
                <Status />
                <VideoGallery />
                <PhotographyPackage />

                <div className="OfferComp">
                    <div>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>Discover incredible wedding deals waiting just for you!</p>
                        <p className='beit'>From candid moments capturing the couple and loved ones to cinematic ritual angles or timeless family portraits—celebrating every aspect of your special day. </p> <br></br> <br></br>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}><span className="getQuote1" >Get Quote</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}