import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading/Loading';
import DeleteConfermationModal from './DeleteConfermationModal';
import DoctorRow from './DoctorRow';

const MannageDoctors = () => {
    const [deltedoctore,setDeltedoctore]=useState(null)
    const {data:doctor,isLoading,refetch}=useQuery('doctor',()=>fetch('http://localhost:5000/doctor',{
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
            <div className="overflow-x-auto">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Avatar</th>
                        <th>Name</th>
                        <th>Speciality</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* <!-- row 1 --> */}
                    {
                      doctor.map((doctors,index)=><DoctorRow
                      index={index}
                      key={doctors._id}
                      doctors={doctors}
                      setDeltedoctore={setDeltedoctore}>
                      </DoctorRow>)  
                    }
                    </tbody>
                </table>
             </div>
             {
                 deltedoctore && <DeleteConfermationModal
                 deltedoctore={deltedoctore}
                 refetch={refetch}></DeleteConfermationModal>
             }
        </div>
    );
};

export default MannageDoctors;