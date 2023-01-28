import React from 'react'
import Nav1 from '../../Navbar/Nav1'
import Footer from '../../Footer/Footer'
import './YearlyPack.css'
import { useNavigate } from 'react-router-dom';
import YearlyPayPalButton from '../Yearly';


function YearlyPack() {
 
  return (
    <>
      <Nav1 />
      <div className="payment-page">
<h1>Choose a Payment Option</h1>
<div className="a">
  <YearlyPayPalButton/>
  </div>
  <hr className="hr"/>
 <div className="stripe-payment1">
  <div className="stripe-div">
  <a className='href' href={`https://buy.stripe.com/eVa0066RCct46Xu9AB?`}><h2 className="stripe-logo">Stripe</h2></a>
  </div>
 
 </div>

  </div>
      <Footer />
    </>
  )
}

export default YearlyPack