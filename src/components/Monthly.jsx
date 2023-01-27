import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';

const PayPalButton = () => {

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
 
  const createSubscription = function (data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      plan_id: 'P-0L703587YA7278832MPAUJAI'
    });
  }
  const onApprove = function (data, actions) {
    console.log(data, "data")
    localStorage.setItem("subscriptionid", data.subscriptionID)
    alert(data.subscriptionID); // You can add optional success message for the subscriber here
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
            />
          </PayPalScriptProvider>
        </div>

      </div>
     

      <div className='foot'></div>
     
    </>
  )
};

export default PayPalButton;
