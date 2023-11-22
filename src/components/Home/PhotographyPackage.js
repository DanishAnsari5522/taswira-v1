import React from 'react';
import '../../components/css/home/PhotographyPackage.css';
import CardFlip from '../Package/CardFlip';

export default function PhotographyPackage() {
    return (
        <>
            <div className='PhotographyPackageComp'>
                <p style={{color:'white',textAlign:'center',fontSize:32}}>A diverse range of wedding photography packages available.</p>
                <p className='beit'>Whether it's candid sequences, cinematic shots, or timeless classic photographs for your cherished moments, we provide photography services encompassing every regional and stylistic preference!</p>
                <CardFlip />
            </div>
        </>
    )
}