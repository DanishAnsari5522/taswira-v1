import React from 'react';
import '../css/Flipcard.css';
import { AiOutlineEye } from 'react-icons/ai';

const FlipCard = () => {
  return (
    <>
     <div></div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <AiOutlineEye  />
            <h3>Pre-wed </h3>
          </div>
          <div className="flip-card-back">
            <h3>Gallery</h3>
          </div>
        </div>
      </div>

      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3>Post wed</h3>
          </div>
          <div className="flip-card-back">
            <h3>Gallery</h3>
          </div>
        </div>
      </div>


      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <h3>Videography</h3>
          </div>
          <div className="flip-card-back">
            <h3>Gallery</h3>
          </div>
        </div>
       
      </div>



    </>
  );
};

export default FlipCard;


