import React from 'react';

const DoctorRow = ({doctors,index,setDeltedoctore}) => {
    const {img,name,specialization}=doctors

    return (
        <tr>
        <th>{index+1}</th>
      <td>
        <div className="avatar">
        <div className="w-16 rounded">
            <img src={img} alt="" />
        </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{specialization}</td>
      <td><label onClick={()=>setDeltedoctore(doctors)} for="my-modal-6" className="btn btn-xs btn-error">Remove</label></td>
      
      </tr>
    );
};

export default DoctorRow;