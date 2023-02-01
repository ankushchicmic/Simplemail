import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import Nav1 from '../Navbar/Nav1'
import './Feedback.css'
import axios from 'axios'
function Feedback() {

    const[feedback , setFeedback] = useState({
        name:"",
        email:"",
        message :""
    })

    const handleChange = (e)=>{
        setFeedback({...feedback , [e.target.name]: e.target.value})
      }
   
   console.log(feedback);

  return (
    <>
    <Nav1/>
    <div id='body'>
       <form id='feedbackForm'>
        <h1 id='feedback-header'>Feedback</h1>
  <div className="form-group">
    <label >Name</label>
    <input type="text" name='name' className="form-control" id="exampleFormControlInput1" placeholder="Enter Name" onChange={handleChange}/>
  </div><br/>
  <div className="form-group">
    <label >Email address</label>
    <input type="email" name='email' className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" onChange={handleChange}/>
  </div><br/>
  <div className="form-group">
    <label>Message</label>
    <textarea name='message' className="form-control" id="exampleFormControlTextarea1" rows="5" onChange={handleChange}></textarea>
  </div>
  <div id='button'><button className='btn btn bg-primary text-white' >Submit</button></div>
</form>
</div>
<Footer/>
    </>
  )
}

export default Feedback