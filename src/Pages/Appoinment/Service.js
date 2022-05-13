import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name,slots}=service
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl text-center">
            <div className="card-body ">
                <h2 className=" text-center text-secondary text-2xl font-bold">{name}</h2>
                <p>
                    {
                      slots.length>0 ?
                      <span>{slots[0]}</span>
                      :
                      <span className='text-red-500'>No Slot available</span>
                    }
                </p>
                <p>{slots.length} {slots.length>1?'Spaces':"Space"} available</p>
                <div className="card-actions justify-center">
                {/* <button onClick={()=>setTreatment(service)} disabled={slots.length===0} 

                className="btn btn-primary modal-button uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary">Book Appoinment</button> */}

                <label onClick={()=>setTreatment(service)} disabled={slots.length===0}  for="my-modal-6" className="btn modal-button btn-primary modal-button uppercase font-bold text-white bg-gradient-to-r from-secondary to-primary ">Book Appoinment</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Service;