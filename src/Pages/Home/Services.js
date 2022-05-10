import React from 'react';
import florid from '../../assets/images/fluoride.png';
import cavity from '../../assets/images/cavity.png';
import teeth from '../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const services = [
        {
            _id:1,
            name:"Fluoride Treatment",
            img: florid,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id:2,
            name:"Cavity Filling ",
            img:cavity,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        },
        {
            _id:3,
            name:"Teeth Whitening",
            img: teeth,
            description:"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
        }
    ]
    return (
        <div className='my-28'>
           <div className='text-center'>
           <h3 className='text-primary text-xl uppercase font-bold'>our services</h3> 
           <h2 className='text-4xl capitalize'>services we provide</h2>
           </div>
               <div className='grid grid-cols-1 md:grid-cols-6 lg:grid-cols-3 gap-12 mt-10'>
               {
                 services.map(service=><Service
                 service={service}
                 key={service._id}
                 >  
                 </Service>)
               }
               </div>
        </div>
    );
};

export default Services;