import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({payments}) => {
    const stripe = useStripe();
    const elements = useElements();
    const [carderror,setCarderror]=useState('');
    const [successerror,setSuccesserror]=useState('');
    const [clientSecret,setClientSecret]=useState('');

    const {price,patientEmail,patientName}=payments
    useEffect(() => {
        fetch('http://localhost:5000/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
              console.log(data)
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            });

    }, [price])


    //submit form
    const handleSubmit =async (event)=>{
        event.preventDefault();
        if (!stripe || !elements) {
            return;
          }
    const card = elements.getElement(CardElement);
    if (card === null) {
        return;
      };
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card,
      });
      setCarderror(error?.message || '')
      setSuccesserror('');
//----------------------confirm card apyment-----------------
const {paymentIntent,error:intentError} = await stripe.confirmCardPayment(clientSecret,
    {
      payment_method: {
        card: card,
        billing_details: {
          name:patientName,
          email:patientEmail,
        },
      },
    },
    console.log(patientEmail)
  );
if(intentError){
    setCarderror(intentError?.message)
    console.log(intentError)
}else{
    setCarderror('');
    console.log(paymentIntent)
    setSuccesserror('SuccessFully Payment')
}
    };
    return (
        <>
 <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-xs mt-6' type="submit" disabled={!stripe ||!clientSecret}>
          Pay
        </button>
      </form>
      {
        carderror && <p className='text-red-500'>{carderror}</p> 
      }       
      {
        successerror && <p className='text-green-500'>{successerror}</p> 
      }       
        </>
    );
};

export default CheckoutForm;