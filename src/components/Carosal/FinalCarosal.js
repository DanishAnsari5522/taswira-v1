import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { Alarm, Play } from '@phosphor-icons/react';
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
        name: "Traditional photography",
        disc: "Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!"
    },
    {
        name: "Traditional photography",
        disc: "Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!"
    },
    {
        name: "Traditional photography",
        disc: "Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!"
    },
    {
        name: "Traditional photography",
        disc: "Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!"
    },
    {
        name: "Traditional photography",
        disc: "Wanna have those perfect family photographs shot for that huge wall frame in your living room? We got you!"
    }
]

export default function FinalCarosal() {
    const [items, setItems] = useState([0, 1, 2, 3, 4, 5, 6, 7]);

    return (
        <>
            <div className="App">
                <Carousel breakPoints={breakPoints}>
                    {
                        data.map((val) => {
                            return (
                                <>

                                    <Item style={{ fontSize: 12, backgroundColor: 'black', display: 'block', alignItems: 'center', justifyContent: 'center', textAlign: 'center', paddingTop: 40, height: '250px' }}>
                                        <div style={{display:'flex',alignItems:"center",justifyContent:'center',marginBottom:10}}><Alarm size={32} color='gold' /></div>
                                        <p style={{ fontSize: 22 }}>{val.name}</p>
                                        <p style={{ fontSize: 14 }}>{val.disc}</p>
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

