import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';
import axios from 'axios';

const YearlyPayPalButton = () => {
  //const apiUrl = "https://localhost:3000"; //local

 const apiUrl = "https://api.simplemail.ai"; //local
  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
 
  const createSubscription = function (data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      custom_id:localStorage.getItem('id'),
      plan_id: 'P-55G43614BF500581CMPMUF2Y'
    });
  }
  const onApprove = async function (data, actions) {
    console.log(data, "data")
    
      alert("subscribed")
      
    
    window.open("https://mail.google.com/mail/")
  }

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
  };
  return (
    <>
    
      <div className='payment'>
        <div className='container'>
          <PayPalScriptProvider
            options={{
              "client-id": "AUMwusyquj_wKP4zm3MjuSsKcVUN-FwgRXpbtYDmV8zbWZDBNGcdwbh4rMeXgX3b8qt0NpjzDnSdZKLt",
              "vault": "true",
              "intent": "subscription"
            }}
          >
             <PayPalButtons
              style={{
                shape: 'rect',
                color: 'gold',
                layout: 'horizontal',
                label: 'subscribe',
               
                                     
              }}
              createSubscription={createSubscription}
              onApprove={onApprove}
              onError={onError}
            />
           
           
          </PayPalScriptProvider>
        </div>

      </div>
    

      <div className='foot'></div>

    </>
  )
};


export default YearlyPayPalButton;

