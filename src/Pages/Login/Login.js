import React, { useEffect } from 'react';
import { useNavigation } from 'react-day-picker';
import {useSignInWithEmailAndPassword, useSignInWithGoogle} from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import useToken from '../../hooks/useToken';
import Loading from '../shared/Loading/Loading';

const Login = () => {
    //google
    const [signInWithGoogle, guser,
        gloading,
        gerror,] = useSignInWithGoogle(auth);
    //login
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

  //for from
  const navigate = useNavigate()
  const { register, formState: { errors }, handleSubmit } = useForm();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  // Submit your data into Redux store
  const onSubmit = data =>{
    console.log(data)
    signInWithEmailAndPassword(data.email, data.password);
  }; 
  const [token]=useToken(user || guser)
 useEffect(()=>{
    if(token){
        navigate(from, { replace: true });
      }
 },[token,from, navigate])

  if(loading||gloading){
    return <Loading></Loading>
  }     
    return (
        <div className='flex justify-center items-center mt-12 h-screen'>
       <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
            <h2 className="text-center text-2xl font-bold">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <p className='mb-4'><small>New To Dorctors Portal <Link className='text-secondary' to='/signUp'>Create New Account</Link></small></p>

            {
                error?.message  && <p className='text-red-500'>{error.message}</p>
            }
            {
                gerror?.message  && <p className='text-red-500'>{gerror.message}</p>
            }

            <input className='btn btn-block' type="submit" vale="Login" />
            </form>
            <div className="divider">OR</div>
            <button onClick={() =>signInWithGoogle()} className="btn btn-outline btn-primary">continue with Google</button>
        </div>
        </div>
        </div>
    );
};

export default Login;