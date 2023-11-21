import { useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { RxCross1 } from 'react-icons/rx';
import { photos } from './photos';

import './Test.css'

const WSPGallery = () => {

    const [slideNumber, setSlideNumber] = useState(0)
    const [openModal, setOpenModal] = useState(false)

    const handleOpenModal = (index) => {
        setSlideNumber(index)
        setOpenModal(true)
    }

    // Close Modal
    const handleCloseModal = () => {
        setOpenModal(false)
    }

    // Previous Image
    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(photos.length - 1)
            : setSlideNumber(slideNumber - 1)
    }

    // Next Image  
    const nextSlide = () => {
        slideNumber + 1 === photos.length
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1)
    }

    return (
        <div className='WSPGalleryCon'>

            {openModal &&
                <div className='sliderWrap'>
                    <RxCross1 className='btnClose' color='red' onClick={handleCloseModal} />
                    <AiOutlineLeft className='btnPrev' onClick={prevSlide} />
                    <AiOutlineRight className='btnNext' onClick={nextSlide} />
                    <div className='fullScreenImage'>
                        <img src={photos[slideNumber].src} alt='' />
                    </div>
                </div>
            }

            <div className='forBg'>
                <div className='forCon'>
                    <div>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 17 }}>GALLERY US</p>
                        <p style={{ color: 'white', textAlign: 'center', alignItems: 'center', fontSize: 32 }}>Wedding Photography Gallery</p>
                        <p className='beit'>The prolific and passionate lenses in our team have gotten us some real gems into our kitty.
                            Explore our gallery of pic perfect photography.</p>
                    </div>
                </div>

                <div className='galleryWrap'>

                    {
                        photos && photos.map((slide, index) => {
                            return (
                                <div
                                    className='single'
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                >
                                    <img src={slide.src} alt='' />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default WSPGallery