import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Alarm } from '@phosphor-icons/react';
import '../../css/carosal/FinalCarosal.css';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
];

const data = [
    {
        name: "Traditional photography",
        disc: "Seeking impeccable family portraits for your grand living room display? Look no further, we've got you covered!"
    },
    {
        name: "Candid photography",
        disc: "We understand the spectrum of emotions and expressions that unfold during weddings. Our expertise lies in capturing these moments authentically."
    },
    {
        name: "Pre-wedding shoots",
        disc: "What about those dreamy, cinematic shots you've longed for? We'll make your fantasies come to life through our photography."
    },
    {
        name: "Bridal portraits",
        disc: "Isn't the bride a vision in her special attire? We adore capturing this beauty from unique perspectives"
    },
    {
        name: "Aerial/Drone photography",
        disc: "Wouldn't a bird's eye view of the entire venue, with all the festivities taking place look mesmerising?"
    },
    {
        name: "Wedding Albums",
        disc: "From the engagement to the reception, we got you covered with a series of the best shots we took from your wedding!"
    }
]

export default function ViewMoreCarosal() {
    const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    return (
        <>
            <div className="CarosalComp">
                <div className="CarosalInnerComp">
                    <p style={{ color: 'gold',marginBottom:10 }}>TRADITIONAL PHOTOGRAPHY</p>
                    <p style={{ color: 'white' }}>
Traditional Photography, reminiscent of the cherished images from our parents' weddings, embodies simplicity. While these photos are often posed and captured at eye level without extravagant creativity, they hold timeless value. Most photographers include some traditional shots, especially for capturing family portraits post-ceremony, honoring the classic essence of wedding documentation.
                    </p>
                </div>
                <Carousel breakPoints={breakPoints}>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <Item style={{ fontSize: 12, backgroundColor: 'black' }} className="carosalCardComp">
                                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl hover:shadow-black/30">
                                            <div className="carosalCardinnerComp">
                                                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
                                                <p style={{ fontSize: 22 }}>{val.name}</p>
                                                <p style={{ fontSize: 14, paddingLeft: 15, paddingRight: 15 }}>{val.disc}</p>
                                            </div>
                                            <div class="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70"></div>
                                            <div class="absolute inset-0 flex translate-y-[60%] flex-col items-center justify-center px-9 text-center transition-all duration-500 group-hover:translate-y-0">
                                                <button class="rounded-full text-gold-400 bg-neutral-900 py-2 px-3.5 font-com text-sm capitalize text-white shadow shadow-black/60" onClick={() => { alert(val.name) }}>Read More</button>
                                            </div>
                                        </div>
                                    </Item>
                                </>
                            )
                        })
                    }
                </Carousel>
            </div>
        </>
    );
}

