import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';

const YearlyPayPalButton = () => {

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
 
  const createSubscription = function (data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      plan_id: 'P-0DV02314472850406MPHEVDQ'
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
              "client-id": "ATYIVw6_KQFxA-3_aug7g6pWUzH40PTYs4shMem6jHsca3nWY4E56ktkRMjzXM6f9a6wyroVbVa9pl4B",
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


export default YearlyPayPalButton;

