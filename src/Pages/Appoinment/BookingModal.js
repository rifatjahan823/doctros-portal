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
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
        <label for="my-modal-6" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
            <h3 class="font-bold text-lg">Booking for:{name}</h3>
            <form onSubmit={handebooking}  className='grid grid-cols-1 gap-3'>
            <input type="text"disabled value={format(selected, 'PP')}class="input input-bordered w-full max-w-xs" />
            <select name="slot" class="select w-full max-w-xs">
            {
                slots?.map(slot=><option value={slot}>{slot}</option>)
            }
            </select>
            <input type="text" name="name" placeholder='Your Name' class="input input-bordered w-full max-w-xs" />

            <input type="text" name="email"  placeholder='Your Email' class="input input-bordered w-full max-w-xs" />

            <input type="text" name="phone"  placeholder='Phone Number' class="input input-bordered w-full max-w-xs" />

            <input type="submit" value='Submit' class="input input-bordered w-full max-w-xs btn btn-secondary" />
            </form>
        </div>
        </div> 
        </div>
    );
};

export default BookingModal;