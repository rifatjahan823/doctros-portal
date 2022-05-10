import React from 'react';

const Review = ({review}) => {
    const{name,img,city,description}=review
    return (
        <div className="card w-96 bg-base-100 shadow-xl text-primary-content">
        <div className="card-body">
            <p>{description}</p>
            <div className="flex justify-between items-center mt-5">
                <div className='avatar'>
                <div className='w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2'>
                <img src={img} alt="" />
                </div>
                </div>
                <div>
                    <p>{name}</p>
                    <p>{city}</p>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Review;