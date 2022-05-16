import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import {useAuthState} from 'react-firebase-hooks/auth';

const MyAppoinment = () => {
    const [user]=useAuthState(auth)
    const [appoinment,setAppoinment]=useState([]);
    useEffect(()=>{
       if(user){
        fetch(`http://localhost:5000/booking?patient=${user.email}`)
        .then(res=>res.json())
        .then(data=>setAppoinment(data))
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
      </tr>
    </thead>
    <tbody>
      {
        appoinment.map((appoinments,index)=><tr>
            <th>{index+1}</th>
            <td>{appoinments.patientName}</td>
            <td>{appoinments.date}</td>
            <td>{appoinments.slot}</td>
            <td>{appoinments.treatment}</td>
          </tr>)  
      }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default MyAppoinment;