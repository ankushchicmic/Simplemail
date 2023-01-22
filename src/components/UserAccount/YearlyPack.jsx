import React from 'react'
import Nav1 from '../../Navbar/Nav1'
import Footer from '../../Footer/Footer'
import './YearlyPack.css'
import { useNavigate } from 'react-router-dom';
import YearlyPayPalButton from '../Yearly';

function YearlyPack() {
  const navigate = useNavigate()
  const Buy = () => {
    navigate('/yearly')
  }
  return (
    <>
      <Nav1 />
      <div id='yearly-div'>
        <main id='Yearly-Pack-Main'>
          <div className="container">
            <h3 id="heading1">Get Access To The All Features  For 1 Year </h3>
          </div>

          <YearlyPayPalButton />
          
          <a className='href' href="https://buy.stripe.com/eVa0066RCct46Xu9AB">   <div className="container2">Stripe Payment</div></a>
          
         

          <div id='Yearly-Pack-Body'>
            <h3>Your Monthly Pack Will Expires In 365 Days.</h3>
          </div>
          <div id="yearly-button">
            <button className="btns btn bg-danger text-white">Cancel MemberShip</button>
          </div>

        </main>

      </div>
      <Footer />
    </>
  )
}

export default YearlyPack