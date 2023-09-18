import React from 'react';
import PhotoGallery from './PhotoGallery/Index';
import WSPGallery from './PhotoGallery/Test';
import '../../components/css/gallery/Index.css';
import VideoGallery from './VideoGallery/Index';

export default function Gallery() {

    return (
        <>
            {/* <PhotoGallery /> */}
            <div className="GalleryComp">
                <div>
                    <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 17 }}>GALLERY US</p>
                    <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>Wedding Photography Gallery</p>
                    <p className='beit'>The prolific and passionate lenses in our team have gotten us some real gems into our kitty. 
                    Explore our gallery of pic perfect photography.</p>
                </div>
            </div>
            <WSPGallery />
            <VideoGallery />
        </>
    )
}