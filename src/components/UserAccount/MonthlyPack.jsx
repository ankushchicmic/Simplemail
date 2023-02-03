import React from "react";
import Nav1 from "../../Navbar/Nav1";
import Footer from "../../Footer/Footer";
import "./MonthlyPack.css";
import PayPalButton from "../Monthly";


function MonthlyPack() {
  
  return (
    <>
      <Nav1 />
   
  
<div className="payment-page1">
<h1>Choose a Payment Option</h1>
<div className="a1">
  <div className="paypal">
  <PayPalButton/>
  </div>
  
  </div>
  <hr className="hr1"/>
 <div className="stripe-payment">
 <a className='href1' href={`https://buy.stripe.com/fZe14a3Fq2SubdK288?client_reference_id=${localStorage.getItem("id")}`}>
 <img src='https://media.designrush.com/inspiration_images/135143/conversions/_1510164528_150_social-mobile.jpg'/>
  </a>
 </div>

  </div>
      <Footer />
    </>
  );
}

export default MonthlyPack;
