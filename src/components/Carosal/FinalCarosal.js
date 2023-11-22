import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Alarm } from '@phosphor-icons/react';
import '../../components/css/carosal/FinalCarosal.css'

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2 },
    { width: 1200, itemsToShow: 3 }
];

const data = [
    {
        name: "Traditional photography",
        disc: "Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!"
    },
    {
        name: "Candid photography",
        disc: "We know how varying can emotions and expressions be in marriages. We capture exactly the same with this!"
    },
    {
        name: "Pre-wedding shoots",
        disc: "How about the filmy and fantasy-like shots that you have been dreaming of for the longest of time?"
    },
    {
        name: "Bridal portraits",
        disc: "Oh, how angelic does the bride look in her special attire! And we love capturing this from different angles!"
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

export default function FinalCarosal() {
    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {
                        data.map((val) => {
                            return (
                                <>
                                    <Item style={{ fontSize: 12, backgroundColor: 'black' }} className="carosalCardComp">
                                        <div class="group relative cursor-pointer items-center justify-center overflow-hidden transition-shadow hover:shadow-xl">
                                            <div className="carosalCardinnerComp">
                                                <div style={{ display: 'flex', alignItems: "center", justifyContent: 'center', marginBottom: 10 }}><Alarm size={32} color='gold' /></div>
                                                <p style={{ fontSize: 22 }}>{val.name}</p>
                                                <p style={{ fontSize: 14, paddingLeft: 15, paddingRight: 15 }}>{val.disc}</p>
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

