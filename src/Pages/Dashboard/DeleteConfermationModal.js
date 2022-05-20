import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteConfermationModal = ({deltedoctore,refetch}) => {
    const {name,email}=deltedoctore
    const handleDelete = (email)=>{
        fetch(`http://localhost:5000/doctor/${email}`,{
            method:"Delete",
            headers:{
                authorization:`Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount){
                 toast(`Doctor ${name} Deleteed` )  ;
                 refetch()
            }
            else{
                toast.error(`Doctor ${name} Not Deleteed` )     
            }
        })
    }
    return (
        <div>
        {/* // <!-- The button to open modal --> */}

        
        {/* <!-- Put this part before </body> tag --> */}
        <input type="checkbox" id="my-modal-6" class="modal-toggle" />
        <div class="modal modal-bottom sm:modal-middle">
          <div class="modal-box">
            <h3 class="font-bold text-lg">Are you Sure You Want to delete{name}</h3>
            <div class="modal-action">
            <label onClick={()=>handleDelete(email)} for="my-modal-6" className="btn btn-xs btn-error">Remove</label>
              <label for="my-modal-6" class="btn btn-xs">Cancel</label>
            </div>
          </div>
        </div>
        <ToastContainer></ToastContainer>
        </div>
    );
};

export default DeleteConfermationModal;