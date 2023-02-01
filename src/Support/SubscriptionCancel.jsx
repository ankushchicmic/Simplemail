import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import Nav1 from '../Navbar/Nav1'
import './SubscriptionCancel.css'
import axios from 'axios'
function CancelSubscription() {
  const apiUrl = "https://localhost:3000"; //local

  // const apiUrl = "https://api.simplemail.ai"; //local
    const[subscription, setSubscription] = useState({
        name:"",
        email:"",
        subscriptionPlan:"",
        message :""
    })
    async function cancelsub(e){
      e.preventDefault();
      await axios.post(apiUrl+'/cancelsub',{userid:localStorage.getItem('id'),reason:subscription.message})
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
  <div className="form-group">
    <label >PayPal Email address</label>
    <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange}/>
  </div><br/>
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