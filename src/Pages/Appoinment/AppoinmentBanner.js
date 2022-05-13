import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';


const AppoinmentBanner = ({selected, setSelected}) => {
    return (
        <div className="hero min-h-screen"style={{ backgroundImage: `url(${bg})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',}} >
        <div className="hero-content flex-col lg:flex-row-reverse">
         <img  className="max-w-sm rounded-lg shadow-2xl" src={chair} alt="" />
          <div>
          <DayPicker 
           mode="single"
           selected={selected}
           onSelect={setSelected}/>
          </div>
        </div>
      </div>
    );
};

export default AppoinmentBanner;