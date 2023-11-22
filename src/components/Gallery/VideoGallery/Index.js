import { useState } from 'react';
import { RxCross1 } from 'react-icons/rx';
import { videos } from './Video'

import '../../css/gallery/Video.css'

const VideoGallery = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
        console.log(index);

    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }



    return (
        <div>

            {openModal &&
                <div className='sliderWrap'>
                    <RxCross1 className='btnClose' color='white' onClick={handleCloseModal} />
                    <div className='fullScreenImage'>
                        {/* <img src={videos[slideNumber].src} alt='' /> */}
                        <p>Hiii Danshi Ansari</p>
                        <iframe src={videos[slideNumber].src}
                            frameborder='0'
                            allow='autoplay; encrypted-media'
                            allowfullscreen
                            title='video'
                            width="600"
                            height="315"
                            className='maxVideo'
                            controls autoplay
                        />
                    </div>
                </div>
            }

            <div className='forBg'>
                <div className='forCon'>
                    <div>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 17 }}>GALLERY US</p>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>Wedding Video Gallery</p>
                        <p className='beit'>Taswira and passionate lenses have captured remarkable gems for our collection.
                    Discover our gallery showcasing picture-perfect photography.</p>
                    </div>
                </div>

                <div className='galleryWrap'>

                    {
                        videos && videos.map((slide, index) => {
                            return (
                                <div
                                    className='singlev'
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    {/* <img src={slide.src} alt='' /> */}
                                    <iframe src={slide.src}
                                        frameborder='0'
                                        allow='autoplay; encrypted-media'
                                        title='video'
                                        onClick={() => handleOpenModal(index)}
                                        className='video'
                                        controls aria-disabled
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default VideoGallery;