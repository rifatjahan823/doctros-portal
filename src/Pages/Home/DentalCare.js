import React from 'react';
import treatment from '../../assets/images/treatment.png'

const DentalCare = () => {
    return (
         <div className='md:px-20 pb-20 mb-20 sm:px-0  '>
           <div className="card lg:card-side bg-base-100 ">
            <figure><img src={treatment}/></figure>
            <div className="card-body ml-10">
            <h2 className="card-title">Exceptional Dental Care, on Your Terms</h2>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
            <div className="card-actions justify-start">
            <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
        </div>
      </div>
     </div>
    );
};

export default DentalCare;