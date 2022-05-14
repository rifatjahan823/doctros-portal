import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../shared/Loading/Loading';
import { useUpdateProfile } from 'react-firebase-hooks/auth'; 


const SignUp = () => {
        //google
        const [signInWithGoogle, guser,
            gloading,
            gerror,] = useSignInWithGoogle(auth);
        //SignUp
        const [
            createUserWithEmailAndPassword,
            user,
            loading,
            error,
          ] = useCreateUserWithEmailAndPassword(auth);
         //update user profile
         const [updateProfile, updating, updateerror] = useUpdateProfile(auth);
         const navigate = useNavigate();
      //for from
      const { register, formState: { errors }, handleSubmit } = useForm();
      // Submit your data into Redux store
      const onSubmit =async data =>{
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName:data.name });
        navigate('/appointment')
      }; 
      if(loading||gloading ||updating){
        return <Loading></Loading>
      }  
    return (
        <div className='flex justify-center items-center mt-12 h-screen'>
        <div className="card w-96 bg-base-100 shadow-xl">
         <div className="card-body">
             <h2 className="text-center text-2xl font-bold">SignUp</h2>
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
             <div className="form-control w-full max-w-xs">
                 <label className="label">
                     <span className="label-text">Password</span>
                 </label>
                 <input type="password" placeholder="Your Password" className="input input-bordered w-full max-w-xs" {...register("password", {
                     required:{
                        value:true,
                        message:'Please Give password' 
                     },
                     minLength:{
                     value:6,
                     message:'Must be 6 Characters or longer'
                 }
                 })}/>
                 <label className="label">
                 {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                 {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                 </label>
                 </div>
                 <p className='mb-4'><small>Already Have an Account <Link className='text-secondary' to='/login'>Login</Link></small></p>
 
             {
                 error?.message  && <p className='text-red-500'>{error.message}</p>
             }
             {
                 gerror?.message  && <p className='text-red-500'>{gerror.message}</p>
             }
             {
                updateerror?.message  && <p className='text-red-500'>{updateerror.message}</p>
             }
 
             <input className='btn btn-block' type="submit" vale="SignUp" />
             </form>
             <div className="divider">OR</div>
             <button onClick={() =>signInWithGoogle()} className="btn btn-outline btn-primary">continue with Google</button>
         </div>
         </div>
         </div>
    );
};

export default SignUp;