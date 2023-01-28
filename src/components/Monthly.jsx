import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';
import { useEffect } from 'react';
import axios from 'axios'

const PayPalButton = () => {
  const apiUrl = "https://localhost:3000"; //local

//const apiUrl = "https://api.simplemail.ai"; //local

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
 
  const createSubscription = function (data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      plan_id: 'P-0L703587YA7278832MPAUJAI'
    });
  }
  const onApprove = async function (data, actions) {
    console.log(data, "data")
    
   await axios.post(apiUrl+'/subscribe',{userid:localStorage.getItem('id'),subid:data.subscriptionID,method:"payment"})
    .then(res=>{console.log(res)
      alert("subscribed")
      
    });
    window.open("https://mail.google.com/mail/")
    
  }

  //capture likely error
  const onError = (data, actions) => {
    setErrorMessage("An Error occured with your payment ");
    alert("An Error occured with your payment")
  };
  
  return (
    <>

      <div className='payment'>
        <div className='container'>
          <PayPalScriptProvider
            options={{
              "client-id": "AdvvMAUbk5-ZygBTbbv_IUyV-Cy0upeEJU7gax9fFA1czPezd8rlYxZedTDLNpz10R-HxKiiNkqACgXB",
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
              onError={onError}            />
          </PayPalScriptProvider>
        </div>

      </div>
     

      <div className='foot'></div>
     
    </>
  )
};

export default PayPalButton;
