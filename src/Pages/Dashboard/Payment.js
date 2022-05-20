import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../shared/Loading/Loading';
import CheckoutForm from './CheckoutForm';
const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');

const Payment = () => {
    const {id}=useParams();
    const url =`https://tranquil-wildwood-93962.herokuapp.com/booking/${id}`;
    const {data:payments,isLoading}=useQuery(['payment',id],()=>fetch(url,{
        method:"GET",
        headers:{
          'authorization':`Bearer ${localStorage.getItem('accessToken')}`
        },
    })
    .then(res=>res.json())
    
    )
    if(isLoading){
        return <Loading></Loading>
    }
    return (
        <div>
        <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
            <div class="card-body">
                <p className="text-success font-bold">Hello, {payments.patientName}</p>
                <h2 class="card-title">Please Pay for {payments.treatment}</h2>
                <p>Your Appointment: <span className='text-orange-700'>{payments.date}</span> at {payments.slot}</p>
                <p>Please pay: ${payments.price}</p>
            </div>
        </div>
        <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
            <div class="card-body">
                <Elements stripe={stripePromise}>
                    <CheckoutForm payments={payments} />
                </Elements>
            </div>
        </div>
    </div>
    );
};

export default Payment;