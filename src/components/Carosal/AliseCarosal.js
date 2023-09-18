import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import '../../components/css/carosal/CarosalAlice.css';
import { Alarm, Play } from '@phosphor-icons/react';
import FinalCarosal from './FinalCarosal';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
    <div className="item" data-value="1">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="2">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="3">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="4">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div className="item" data-value="5">
        <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
        <h4>Traditional photography</h4>
        <p className='itempara'>Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!</p>
        <p>Read More</p>
    </div>,
    <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
        <div class="h-96 w-72">
            <img class="h-full w-full object-cover transition-transform duration-500 group-hover:rotate-3 group-hover:scale-125" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>
        <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
        <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
            <h1 class="font-dmserif text-3xl font-bold text-white">Beauty</h1>
            <p class="mb-3 text-lg italic text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis dolore adipisci placeat.</p>
            <button class="rounded-full bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60">See More</button>
        </div>
    </div>
];

const CarouselAlice = () => {
    return (
        <>
            <div className='AliseCarosalComp'>
                <p style={{ color: 'white', textAlign: 'center', color: 'gold' }}>WHAT MAKES US DIFFERENT?</p>
                <p className='bestCompany'>We are the leading wedding photography service provider company, we never hesitate to commit and never fail to deliver.</p>
                <p className='teamready'>Our equipped team is ready to capture all the spectrum of your wedding events.</p>
                {/* <AliceCarousel
                mouseTracking
                items={items}
                responsive={responsive}
                controlsStrategy="alternate"
                className="carosalMain"
                paddingLeft={10}
                paddingRight={20}
                autoPlay={true}
                // autoPlayControls={true}
                autoPlayInterval={2000}
                autoPlayStrategy="all"

            /> */}
                <FinalCarosal />
            </div>
        </>
    )

};

export default CarouselAlice;