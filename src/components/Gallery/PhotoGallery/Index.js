// import React, { useState, useCallback } from "react";
// import { render } from "react-dom";
// import Gallery from "react-photo-gallery";
// import Carousel, { Modal, ModalGateway } from "react-images";
// import { photos } from "./photos";

// export default function PhotoGallery() {
//     const [currentImage, setCurrentImage] = useState(0);
//     const [viewerIsOpen, setViewerIsOpen] = useState(false);

//     const openLightbox = useCallback((event, { photo, index }) => {
//         setCurrentImage(index);
//         setViewerIsOpen(true);
//     }, []);

//     const closeLightbox = () => {
//         setCurrentImage(0);
//         setViewerIsOpen(false);
//     };

//     return (
//         <div>
//             <Gallery photos={photos} onClick={openLightbox} />
//             <ModalGateway>
//                 {viewerIsOpen ? (
//                     <Modal onClose={closeLightbox}>
//                         <Carousel
//                             currentIndex={currentImage}
//                             views={photos.map(x => ({
//                                 ...x,
//                                 srcset: x.srcSet,
//                                 caption: x.title
//                             }))}
//                         />
//                     </Modal>
//                 ) : null}
//             </ModalGateway>
//         </div>
//     );
// }


import React from "react";
import { Media } from './photos';

export default function PhotoGallery() {
    return (
        <>
            <div className="container">
                <h1>Photo Gallery</h1>
                <div className="medial-container">
                    {
                        Media.map((file, index) => {
                            <div className="media" key={index}>
                                {
                                    console.log(file)
                                }
                                <img src={file.url} alt="Img" width='100px' height='100px' />

                                {

                                    file.type === 'image' ?
                                        <img src={file.url} alt="Img" width='100px' height='100px' /> :
                                        <video src={file.url} muted />
                                }
                            </div>
                        })
                    }
                </div>

            </div>
        </>
    )
}