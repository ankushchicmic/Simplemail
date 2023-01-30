import React from 'react'
import Nav1 from '../../Navbar/Nav1'
import Footer from '../../Footer/Footer'
import './YearlyPack.css'

import YearlyPayPalButton from '../Yearly';


function YearlyPack() {
 
  return (
    <>
      <Nav1 />
      <div className="payment-page2">
<h1>Choose a Payment Option</h1>
<div className="a2">
  <YearlyPayPalButton/>
  </div>
  <hr className="hr2"/>
 <div className="stripe-payment2">
 <a className='href2' href={`https://buy.stripe.com/eVa0066RCct46Xu9AB?`}><div className="stripe-div2">
 <h2 className="stripe-logo2">Stripe</h2>
  </div></a>
 
 </div>

  </div>
      <Footer />
    </>
  )
}

export default YearlyPack