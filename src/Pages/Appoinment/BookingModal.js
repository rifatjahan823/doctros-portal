import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({treatment,selected,setTreatment}) => {
    const {name,slots}=treatment

    const handebooking = event=>{
        event.preventDefault();
        const slot = event.target.slot.value;
    }

    return (
        <div>
        <input type="checkbox" id="my-modal-6" className="modal-toggle" />
        <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label for="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 className="font-bold text-lg">Booking for:{name}</h3>
            <form onSubmit={handebooking}  className='grid grid-cols-1 gap-3'>
            <input type="text"disabled value={format(selected, 'PP')}className="input input-bordered w-full max-w-xs" />
            <select name="slot" className="select w-full max-w-xs">
            {
                slots?.map(slot=><option value={slot}>{slot}</option>)
            }
            </select>
            <input type="text" name="name" placeholder='Your Name' className="input input-bordered w-full max-w-xs" />

            <input type="text" name="email"  placeholder='Your Email' className="input input-bordered w-full max-w-xs" />

            <input type="text" name="phone"  placeholder='Phone Number' className="input input-bordered w-full max-w-xs" />

            <input type="submit" value='Submit' className="input input-bordered w-full max-w-xs btn btn-secondary" />
            </form>
        </div>
        </div> 
        </div>
    );
};

export default BookingModal;