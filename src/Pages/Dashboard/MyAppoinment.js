import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppoinment = () => {
    const [user]=useAuthState(auth)
    const [appoinment,setAppoinment]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patientEmail=${user.email}`,{
          method:"GET",
          headers:{
            'authorization':`Bearer ${localStorage.getItem('accessToken')}`
          },
        })
        .then(res=> {
          if (res.status === 401 || res.status === 403) {
              signOut(auth);
              localStorage.removeItem('accessToken');
              navigate('/');
          }
          return res.json()
      })
        .then(data=>{
          console.log('data',data)
          setAppoinment(data)
        })
       }
    },[user])
    return (
        <div>
           <h1>My Appoinment is here{appoinment.length}</h1> 
           <div class="overflow-x-auto mt-5">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
          <th></th>
        <th>Name</th>
        <th>Date</th>
        <th>Time</th>
        <th>Treatment</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {
        appoinment?.map((appoinments,index)=><tr>
            <th>{index+1}</th>
            <td>{appoinments.patientName}</td>
            <td>{appoinments.date}</td>
            <td>{appoinments.slot}</td>
            <td>{appoinments.treatment}</td>
            <td>
              {(appoinments.price && !appoinments.paid) && <Link to={`/dashboard/payment/${appoinments._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}

              {(appoinments.price && appoinments.paid) &&<span className='text-successs'>Paid</span>}
              
              </td>
          </tr>)  
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;