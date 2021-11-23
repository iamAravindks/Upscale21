import React from "react";

import bgimg from '../../assets/ellpsebg.png';

const SpeakerCard = ({ name, title, topic, imgSrc }) => {
  return (
    <div className='speaker-card'>
      <div className="speaker-head">
        <img src={bgimg} className="ellpsebg" alt="ha" />
        <div className="speaker-img-contaner">
          <img 
            src={imgSrc}
            className='card-img-top rounded-circle speaker-img'
            alt='...'
          />
        </div>
      </div>
      <div className='card-body'>
        <em><h5 className='card-title'>{name}</h5></em>
        <p className='card-sub-title'>{title}</p>
        
      </div>
      <div className="speaker-card-topic">
        <p className='card-text'>{topic}</p>
      </div>
      


const SpeakerCard = ({ name, title, topic, imgSrc }) => {
  return (
    <div className='card speaker-card'>
      <div className="speaker-head">
        <img
          src={imgSrc}
          className='card-img-top rounded-circle speaker-img'
          alt='...'
        />
      </div>
      <div className='card-body'>
        <h5 className='card-title'>{name}</h5>
        <p className='card-text'>{title}</p>
        <p className='card-text'>{topic}</p>
      </div>

    </div>
  );
};

export default SpeakerCard;
