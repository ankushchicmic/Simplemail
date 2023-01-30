import React from 'react'
import './SuccessfulPayment.css'

function SuccessPayment() {
  return (
   <>
   <div className='success-payment  grid-container grid-x grid-margin-x align-top align-justify'>
        <div className='payment-input'>
          <img src='https://ruperhat.com/wp-content/uploads/2020/06/Paymentsuccessful21.png'/>
          <div>
          <a href="https://mail.google.com/mail/"> <button className='navigate-btn'>Click To Try Now</button></a>
        </div>
        </div>
   </div>
   </>
  )
}

export default SuccessPayment