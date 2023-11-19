import React from "react";
import Carosal from "../Carosal/Index";
import CarouselAlice from "../Carosal/AliseCarosal";
import '../../components/css/home/Index.css';
import VideoGallery from "./VideoGallery";
import Status from "./Status";
import PhotographyPackage from "./PhotographyPackage";

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
                        <p style={{ fontSize: 30, color: 'rgb(164, 116, 25)' }}>Hire us as your Wedding Photographer</p>
                        <p style={{ color: 'white', fontFamily: 'Courier New, Courier, monospace', fontSize: '16px', marginBottom: '10px' }}>
                            Weddings are the Harold of a new life, and a new little world. The day brings in a roller coaster of emotions within the people.
                            The couple is equally happy to be beginning their new life.
                            Again there is a bittersweet pain in the heart of the bride,
                            for thinking of leaving her childhood home behind.
                        </p>
                        <br></br>
                        <span className="getQuote">Get Quote</span>
                    </div>
                </div>
                <Status />
                <VideoGallery />
                <PhotographyPackage />

                <div className="OfferComp">
                    <div>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>Get Amazing Offers for your Wedding</p>
                        <p className='beit'>The spontaneous candid photography of the couple and the dear ones, or the cinematic angles of the rituals, or the classic family photograph.</p>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '20px' }}><br></br><span className="getQuote1" >Get Quote</span></div>
                    </div>
                </div>
            </div>
        </>
    )
}