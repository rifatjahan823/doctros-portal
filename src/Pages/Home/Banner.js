import React from 'react';
import chair from '../../assets/images/chair.png'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img className="max-w-sm rounded-lg" src={chair} alt="" />
           <div>
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
            <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
       </div>
      </div>
    );
};

export default Banner;