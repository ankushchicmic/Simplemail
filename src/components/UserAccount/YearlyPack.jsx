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
<h1>Choose Payment Option</h1>
<div className="a2">
  <YearlyPayPalButton/>
  </div>
  <hr className="hr2"/>
 <div className="stripe-payment2">
 <a className='href2' href={`https://buy.stripe.com/eVa0066RCct46Xu9AB?`}>
  <img src='https://media.designrush.com/inspiration_images/135143/conversions/_1510164528_150_social-mobile.jpg'/>
 </a>
 
 </div>

  </div>
      <Footer />
    </>
  )
}

export default YearlyPack