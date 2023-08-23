import React from 'react';
import '../../components/css/home/PhotographyPackage.css';
import CardFlip from '../Package/CardFlip';

export default function PhotographyPackage() {
    return (
        <>
            <div className='PhotographyPackageComp'>
                <p style={{color:'white',textAlign:'center',fontSize:32}}>All Kinds of Wedding Photography Package</p>
                <p className='beit'>Be it a Candid series, or the filmy cinematic shots, or a classic style photograph for your special frame. We offer services of every regional and style of Photography!</p>
                <CardFlip />
            </div>
        </>
    )
}