import React from 'react';
import WSPGallery from './PhotoGallery/Test';
import '../../components/css/gallery/Index.css';
import VideoGallery from './VideoGallery/Index';

export default function Gallery() {

    return (
        <>
            <div className="GalleryComp">
                <div>
                    <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 17 }}>GALLERY US</p>
                    <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>Wedding Photography Gallery</p>
                    <p className='beit'>Taswira and passionate lenses have captured remarkable gems for our collection.
                    Discover our gallery showcasing picture-perfect photography.</p>
                </div>
            </div>
            <WSPGallery />
            <VideoGallery />
        </>
    )
}