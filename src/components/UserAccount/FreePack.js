import React from 'react'
import Nav1 from '../../Navbar/Nav1'
import Footer from '../../Footer/Footer'
import './FreePack.css'
import FreePayPalButton from '../FreeTrial'

function FreePack() {
  return (
    <>
    <Nav1/>
    <div id='div'>
        <main id='Free-Pack-Body'>
          <div class="container-free">
        
           <h3>Get Access To The All Features Free For 30 Days </h3>
          </div>
       
          <div id='FreePack-Body'>
             <h3>Your Free Trial Will Expires In 30 Days.</h3>
          </div>
        </main>
      
      </div>
      <Footer />
    </>
  )
}

export default FreePack