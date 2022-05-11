import React from 'react';

const InfoDetails = ({img,cardTitle,despription,bgClass}) => {
    return (
        <div className={`card lg:card-side hadow-xl px-5 pt-5 ${bgClass}`}>
        <figure><img src={img} alt="" /></figure>
        <div className="card-body">
          <h2 className="card-title">{cardTitle}</h2>
          <p>{despription}</p>
        </div>
      </div>
    );
};

export default InfoDetails;