import React from "react";
import Nav1 from "../../Navbar/Nav1";
import Footer from "../../Footer/Footer";
import "./MonthlyPack.css";
import { useNavigate } from 'react-router-dom';
import PayPalButton from "../Monthly";


function MonthlyPack() {
  const navigate = useNavigate()
  const Buy = () => {
    navigate('/monthly')
  }
  return (
    <>
      <Nav1 />
      <div id='div'>
        <main id='Monthly-Pack-Main'>
          <div class="container-monthly">
            <h3 id="heading1">Get Access To The All Features  For 30 Days </h3>
          </div>
          <PayPalButton />
          <a className='monthly-link' href="https://buy.stripe.com/test_fZebLUebW5gN5gI145">   <div className="stripe-Payment">Stripe Payment</div></a>
          <div id='Monthly-Pack-Body'>
            <h3>Your Monthly Pack Will Expires In 30 Days.</h3>

          </div>
          <div id="button">
            <button className="btns btn bg-danger text-white">Cancel MemberShip</button>
          </div>

        </main>

      </div>
      <Footer />
    </>
  );
}

export default MonthlyPack;
