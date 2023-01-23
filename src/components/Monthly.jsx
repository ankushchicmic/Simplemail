import React, { useState } from 'react';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './monthly.css'
import Nav1 from '../Navbar/Nav1';

const PayPalButton = () => {

  const [success, setSuccess] = useState(false);
  const [ErrorMessage, setErrorMessage] = useState("");
  const [orderID, setOrderID] = useState(false);
  // const createOrder = (data, actions) => {
  //   return actions.order
  //     .create({
  //       purchase_units: [
  //         {
  //           description: "monthly subscription",
  //           amount: {
  //             currency_code: "USD",
  //             value: 6.79,
  //           },
  //         },
  //       ],
  //       // not needed if a shipping address is actually needed
  //       application_context: {
  //         shipping_preference: "NO_SHIPPING",
  //       },
  //     })
  //     .then((orderID) => {
  //       setOrderID(orderID);
  //       return orderID;
  //     });
  // };

  // check Approval
  // const onApprove = (data, actions) => {
  //   return actions.order.capture().then(function (details) {
  //     const { payer } = details;
  //     setSuccess(true);
  //   });
  // };
  const createSubscription = function (data, actions) {
    return actions.subscription.create({
      /* Creates the subscription */
      plan_id: 'P-8MY22973ER585953EMPHETQY'
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
            {/* <PayPalButtons className='pay' style={{ layout: "horizontal" }} /> */}
            <table border="0" cellpadding="10" cellspacing="0" align="center"><tr><td align="center"></td></tr><tr><td align="center"><img src="https://www.paypalobjects.com/webstatic/mktg/Logo/pp-logo-200px.png" border="0" alt="PayPal Logo"/></td></tr></table>
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
      {/* <div id="paypal-button-container-P-0L703587YA7278832MPAUJAI"></div> */}

      <div className='foot'></div>

    </>
  )
};

export default PayPalButton;
