import React from "react";

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
