import React from 'react';
import quote from '../../assets/icons/quote.svg'
import img1 from '../../assets/images/people1.png'
import img2 from '../../assets/images/people2.png'
import img3 from '../../assets/images/people3.png'
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id:1,
            img:img1,
            name:'Winson Herry',
            city:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:2,
            img:img2,
            name:'Winson Herry',
            city:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id:3,
            img:img3,
            name:'Winson Herry',
            city:'California',
            description:'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <section className='py-28'>
            <div className='flex justify-between'>
               <div>
                   <h4 className='text-xl text-primary font-bold'>Testimonials</h4> 
                   <h2 className='text-4xl'>What Our Patients Says </h2> 
               </div> 
               <div>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
               </div> 
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 pt-14'>
                {
                   reviews.map(review=><Review
                   review={review}
                   key={review._id}
                   >
                   </Review>) 
                }
            </div>
        </section>
    );
};

export default Testimonials;