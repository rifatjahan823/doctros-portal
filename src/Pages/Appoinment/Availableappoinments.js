import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';

const Availableappoinments = ({selected, setSelected}) => {
    const [Services,setServices]=useState([]);
    const [treatment,setTreatment]=useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div className='py-12'>
              <h4 className='text-center text-secondary text-xl'>AvailableAppoinment On {format(selected, 'PP')}</h4>
              <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20'>
                  {
                   Services.map(service=><Service
                   service={service}
                   key={service._id}
                   setTreatment={setTreatment}>
                   </Service>)   
                  }
              </div>

              {setTreatment && <BookingModal treatment={treatment} selected={selected} setTreatment={setTreatment}></BookingModal>}
        </div>
    );
};

export default Availableappoinments;