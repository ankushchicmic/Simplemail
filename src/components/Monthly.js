import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';

const PayPalButton = () => {
   
    const [success, setSuccess] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [orderID, setOrderID] = useState(false);
    const createOrder = (data, actions) => {
        return actions.order
          .create({
            purchase_units: [
              {
                description: "Sunflower",
                amount: {
                  currency_code: "USD",
                  value: 20,
                },
              },
            ],
            // not needed if a shipping address is actually needed
            application_context: {
              shipping_preference: "NO_SHIPPING",
            },
          })
          .then((orderID) => {
            setOrderID(orderID);
            return orderID;
          });
      };
      
      // check Approval
      const onApprove = (data, actions) => {
        return actions.order.capture().then(function (details) {
          const { payer } = details;
          setSuccess(true);
        });
      };
      //capture likely error
      const onError = (data, actions) => {
        setErrorMessage("An Error occured with your payment ");
      };
   return (
    <>
    <Nav1/>
     <div className='payment'>
     <div className='box'>
     <PayPalScriptProvider
     options={{
       "client-id": "test" ,
     }}
   >
      <PayPalButtons style={{ layout: "horizontal" }} />
         <PayPalButtons
           style={{ layout: "vertical" }}
           createOrder={createOrder}
           onApprove={onApprove}
         />
   </PayPalScriptProvider>
   </div>
   </div>
    </>
   )
};

export default PayPalButton;
