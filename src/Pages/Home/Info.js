import React from 'react';
import clock from '../../assets/icons/clock.svg';
import marker from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg';
import InfoDetails from './InfoDetails';

const Info = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-white ">
           <div><InfoDetails cardTitle="Opening Hours" despription="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-secondary to-primary " img={clock}></InfoDetails>  </div>
           <div><InfoDetails cardTitle="Visit our location" despription="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-accent " img={marker}></InfoDetails> </div> 
             <div><InfoDetails cardTitle="Contact us now" despription="Lorem Ipsum is simply dummy text of the pri" bgClass="bg-gradient-to-r from-secondary to-primary " img={phone}></InfoDetails> </div> 
        </div>
    );
};

export default Info; 