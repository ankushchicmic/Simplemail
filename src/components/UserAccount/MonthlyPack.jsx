import React from "react";
import Nav1 from "../../Navbar/Nav1";
import Footer from "../../Footer/Footer";
import "./MonthlyPack.css";

import PayPalButton from "../Monthly";


function MonthlyPack() {
  
  return (
    <>
      <Nav1 />
   
  
<div className="payment-page">
<h1>Choose a Payment Option</h1>
<div className="a">
  <PayPalButton/>
  </div>
  <hr className="hr"/>
 <div className="stripe-payment1">
  <div className="stripe-div">
  <a className='href' href={`https://buy.stripe.com/fZe14a3Fq2SubdK288?`}><h2 className="stripe-logo">Stripe</h2></a>
  </div>
 
 </div>

  </div>
      <Footer />
    </>
  );
}

export default MonthlyPack;
