import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading/Loading';

const MannageDoctors = () => {
    const {data:doctor,isLoading}=useQuery('doctor',()=>fetch('http://localhost:5000/doctor',{
        headers:{
            authorization:`Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res=>res.json()));
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'> Mannage Doctors {doctor.length}</h2>
        </div>
    );
};

export default MannageDoctors;