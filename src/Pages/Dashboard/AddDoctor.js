import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDoctor = () => {
    //user query 
    const {data:services,isLoading}=useQuery('services',()=>fetch('https://tranquil-wildwood-93962.herokuapp.com/services')
    .then(res=>res.json()));

    const imgStorageKEY ='d6529dc3e2b5077433b72e6ff3596019';

     /*----------image storage 3 way ----------
        1.third party storage like imgbb//for practice free is okay
        2.In your own storage in your own server(file system)
        3.database like mongodb
        * YUP:to validate file/you can search for this Yup file validation for react hook form
    */ 

     //for from
       const { register, formState: { errors }, handleSubmit,reset }= useForm();
     // Submit your data into Redux store
      const onSubmit =async data =>{
        const image = data.image[0];
        const formData= new FormData();
        formData.append('image',image)
        const url =`https://api.imgbb.com/1/upload?key=${imgStorageKEY}`;
        fetch(url,{
            method:"POST",
            body:formData
        })
        .then(res=>res.json())
        .then(result=>{
            if(result.success){
                const img = result.data.url;
                const doctor = {
                    name:data.name,
                    email:data.email,
                    specialization:data.specialization,
                    img:img
                }
                //send to your database
                fetch('https://tranquil-wildwood-93962.herokuapp.com/doctor',{
                    method:"POST",
                    headers:{
                        'content-type':"application/json",
                        authorization:`Bearer ${localStorage.getItem('accessToken')}`
                    },
                    body:JSON.stringify(doctor)
                })
                .then(res=>res.json())
                .then(output=>{
                    if(output.insertedId){
                        toast('doctor added successfully');
                        reset()
                    }else{
                        toast.error('doctor added unsuccessfully')   
                    }
                })
            }
        })
      };
      if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className='text-2xl'>Add a New Doctor</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
             <div className="form-control w-full max-w-xs">
                 <label className="label">
                     <span className="label-text">Name</span>
                 </label>
                 <input type="text" placeholder="Your Name" className="input input-bordered w-full max-w-xs" {...register("name", {
                     required:{
                        value:true,
                        message:'Please Give Name' 
                     },
                 })}/>
                 <label className="label">
                 {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                 </label>
             </div>
             <div className="form-control w-full max-w-xs">
                 <label className="label">
                     <span className="label-text">Email</span>
                 </label>
                 <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" {...register("email", {
                     required:{
                        value:true,
                        message:'Please Give Email' 
                     },
                     pattern:{
                     value:/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                     message:'Privide  a Valid Email'
                 }
                 })}/>
                 <label className="label">
                 {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                 {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                 </label>
                 </div>
               {/* //Specialization select fild-----------*/}  
                 <div className="form-control w-full max-w-xs">
                 <label className="label">
                     <span className="label-text">Specialization</span>
                 </label>
                 <select className="select w-full input-bordered max-w-xs"{...register("specialization")}>
                     {
                         services.map(service=><option  key={service._id}>
                             {service.name}
                             </option>)
                     }
                </select>
                 </div>
               {/* //image fild-----------*/}
                 <div className="form-control w-full max-w-xs">
                 <label className="label">
                     <span className="label-text">Photo</span>
                 </label>
                 <input type="file" placeholder="Your Image" className="input input-bordered w-full max-w-xs" {...register("image", {
                     required:{
                        value:true,
                        message:'Please Give Picture file' 
                     },
                 })}/>
                 <label className="label">
                 {errors.image?.type === 'required' && <span className="label-text-alt text-red-500">{errors.image.message}</span>}
                 </label>
             </div>
                 <p className='mb-4'><small>Already Have an Account <Link className='text-secondary' to='/login'>Login</Link></small></p>
                <input className='btn w-full max-w-xs' type="submit" value="Add" />
             </form>
             <ToastContainer></ToastContainer>
        </div>
    );
};

export default AddDoctor;