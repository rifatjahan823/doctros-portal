import React from 'react';

const InfoDetails = ({img,cardTitle,despription,bgClass}) => {
    return (
        <div class={`card lg:card-side hadow-xl px-5 ${bgClass}`}>
        <figure><img src={img} alt="" /></figure>
        <div class="card-body">
          <h2 class="card-title">{cardTitle}</h2>
          <p>{despription}</p>
        </div>
      </div>
    );
};

export default InfoDetails;