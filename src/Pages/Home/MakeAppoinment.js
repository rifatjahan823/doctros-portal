import React from 'react';
import doctor from '../../assets/images/doctor.png'
import bg from '../../assets/images/appointment.png'

const MakeAppoinment = () => {
    return (
       <section style={{ backgroundImage: `url(${bg})`,
       backgroundSize: 'cover',
       backgroundRepeat: 'no-repeat',}} 
        className='flex justify-center items-center text-white'>

            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px] ' src={doctor} alt="" />
            </div>
            <div className='flex-1 pr-10'>
                <h3 className='text-xl text-primary capitalize font-bold'>appoinment</h3>
                <h2 className='text-2xl capitalize pt-4'>Make an appointment Today</h2>
                <p className='py-6'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <button className="btn btn-primary uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
            </div>
       </section>
    );
};

export default MakeAppoinment;