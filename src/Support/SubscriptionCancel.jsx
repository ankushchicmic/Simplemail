import React, {useState,useEffect} from 'react'
import Footer from '../Footer/Footer'
import Nav1 from '../Navbar/Nav1'
import './SubscriptionCancel.css'
import axios from 'axios'
function CancelSubscription() {
  // const apiUrl = "https://localhost:3000"; //local

  const apiUrl = "https://api.simplemail.ai"; //local
    const[subscription, setSubscription] = useState({
        name:"",
        paymentMethod:"",
        subscriptionPlan:"",
        message :""
    })
    useEffect(()=>{
      const queryparams=new URLSearchParams(window.location.search);
      localStorage.setItem("id",queryparams.get('id') )
      console.log(queryparams.get('id'),"id",window.location.search)
      
    
    
    },[])
    async function cancelsub(e){
      e.preventDefault();
      if(localStorage.getItem('id')=='null'){
        alert("Please login")
    
    }else{
      await axios.post(apiUrl+'/cancelsub',{userid:localStorage.getItem('id'),method:subscription.paymentMethod})
      .then(alert("email successfully sent"))
      .catch(err=>console.log(err))
      }
    }
    const handleChange = (e)=>{
        setSubscription({...subscription , [e.target.name]: e.target.value})
      }
   
   console.log(subscription);

  return (
    <>
    <Nav1/>
    <div id='subscription-body'>
       <form id='SubscriptionForm'>
        <h1 id='Subscription-header'>Cancellation Subscription</h1>
  <div className="form-group">
    <label >Name</label>
    <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" onChange={handleChange}/>
  </div><br/>
  <label >Payment Method</label>
  <select id="paymentMethod" name='paymentMethod' className="form-control" onChange={handleChange}>
  <option  value="" disabled selected hidden>Choose Option</option>
  <option  value="PayPal">PayPal</option>
  <option  value="Stripe">Stripe</option>
</select><br/>
  <label >Select Subscription Type You Want To Cancel</label>
  <select className="form-control" onChange={handleChange}>
  <option  value="" disabled selected hidden>Choose Option</option>
  <option  value="Monthly">Monthly</option>
  <option  value="Yearly">Yearly</option>
</select><br/>
  <div className="form-group">
    <label>Reason For Cancellation</label>
    <textarea name='message' className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={handleChange}></textarea>
  </div>
  <div id='button'><button className='btn btn bg-primary text-white' onClick={cancelsub}>Submit</button></div>
</form>
</div>
<Footer/>
    </>
  )
}

export default CancelSubscription