import { format } from 'date-fns/esm';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import BookingModal from './BookingModal';
import Service from './Service';
import Loading from '../shared/Loading/Loading';

const Availableappoinments = ({selected, setSelected}) => {
    // const [Services,setServices]=useState([]);
    const [treatment,setTreatment]=useState([]);
    const formateDate = format(selected, 'PP')
    //use react query
    const {data:Services,isLoading,refetch}=useQuery(['available',formateDate],()=>  fetch(`https://tranquil-wildwood-93962.herokuapp.com/available?date=${formateDate}`)
  .then(res=>res.json()))
  if(isLoading){
      return<Loading></Loading>
  }

    // useEffect(()=>{
    //     // for all service fetch(`https://tranquil-wildwood-93962.herokuapp.com/services`)
    //     //only which service available
    //     fetch(`https://tranquil-wildwood-93962.herokuapp.com/available?date=${formateDate}`)
    //     .then(res=>res.json())
    //     .then(data=>setServices(data))
    // },[formateDate,Services])
    return (
        <div className='py-12'>
              <h4 className='text-center text-secondary text-xl'>AvailableAppoinment On {format(selected, 'PP')}</h4>
              <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mt-20'>
                  {
                   Services?.map(service=><Service
                   service={service}
                   key={service._id}
                   setTreatment={setTreatment}>
                   </Service>)   
                  }
              </div>

              {setTreatment && <BookingModal treatment={treatment} selected={selected} setTreatment={setTreatment}refetch={refetch}></BookingModal>}
        </div>
    );
};

export default Availableappoinments;