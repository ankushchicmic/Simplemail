import React, {useState} from 'react'
import Footer from '../Footer/Footer'
import Nav1 from '../Navbar/Nav1'
import './Business.css'

function Business() {

    const[data , setData] = useState({
        name:"",
        email:"",
        message :""
    })

    const handleChange = (e)=>{
        setData({...data, [e.target.name]: e.target.value})
      }
   
   console.log(data);

  return (
    <>
    <Nav1/>
    <div id='body'>
       <form id='businessForm'>
        <h1 id='business-header'>Business</h1>
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
  <div id='button'><button className='btn btn bg-primary text-white'>Submit</button></div>
</form>
</div>
<Footer/>
    </>
  )
}

export default Business