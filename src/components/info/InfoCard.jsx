import React from "react";
import './infoCard.css'
const InfoCard = ({
  qstSrc,
  alt,
  contentSrc,
  imgSrc,
  flexDirection,
  justifyContent,
}) => {
  return (
      <div className='info-card' style={{ flexDirection }} >
      <div className='info-heading' style={{ justifyContent }}>
        <img src={qstSrc} className='info-head-img' alt={alt} />
        <img src={contentSrc} className='info-content-img' alt={alt} />
      </div>
      <div className='info-body'>
        <img src={imgSrc} className='info-img' alt={alt} />
      </div>
    </div>
  );
};

export default InfoCard;
// style={{ flexDirection }}