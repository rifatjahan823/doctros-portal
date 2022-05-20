import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BookingModal = ({treatment,selected,setTreatment,refetch}) => {
    const {name,slots,_id,price}=treatment
    const [user, loading, error] = useAuthState(auth);
    const formateDate = format(selected, 'PP')
    const handebooking = event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
//sent the user information in backend site 
       const booking= {
            treatmentID:_id,
            treatment:name,
            date:formateDate,
            slot,
            patientEmail:user.email,
            patientName:user.displayName,
            price,
            phone: event.target.phone.value,
        }
        fetch('http://localhost:5000/booking',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data=>{
         if(data.success){
            toast(`appoinment is set ${formateDate} at ${slot}`)
         }
         else{
            toast.error('you already booked')
         }
         refetch()
        })
    }

    return (
        <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">Booking for:{name}</h3>
            <form onSubmit={handebooking}  className='grid grid-cols-1 gap-3'>
            <input type="text"disabled value={format(selected, 'PP')}className="input input-bordered w-full max-w-xs" />
            <select name="slot" className="select w-full max-w-xs">
            {
                slots?.map((slot,index)=><option value={slot}
                key={index}>{slot}</option>)
            }
            </select>
            <input type="text" name="name" disabled value={user?.displayName||''} className="input input-bordered w-full max-w-xs" />

            <input type="text" name="email"  disabled value={user?.email||''}  className="input input-bordered w-full max-w-xs" />

            <input type="text" name="phone"  placeholder='Phone Number' className="input input-bordered w-full max-w-xs" />

            <input type="submit" value='Submit' className="input input-bordered w-full max-w-xs btn btn-secondary" />
            </form>
            <ToastContainer></ToastContainer>
        </div>
        </div> 
        </div>
    );
};

export default BookingModal;