import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading/Loading';
import UserRow from './UserRow';

const Users = () => {
      //use react query
      const {data:users,isLoading,refetch}=useQuery(['available'],()=>  fetch(`http://localhost:5000/user`,{
         method:"GET",
         headers:{
             authorization:`Bearer ${localStorage.getItem('accessToken')}`
         }
      })
      .then(res=>res.json()))
      if(isLoading){
          return<Loading></Loading>
      }  
    return (
        <div>
           <div class="overflow-x-auto">
  <table class="table w-full">
    {/* <!-- head --> */}
    <thead>
      <tr>
        <th></th>
        <th>Email</th>
        <th>Admin</th>
        <th>Delete</th>
      </tr>
    </thead>
    <tbody>
    {
        users.map((user)=><UserRow
        key={user._id}
        user={user}
        refetch={refetch}
        ></UserRow>)
    }
    </tbody>
  </table>
</div>
        </div>
    );
};

export default Users;