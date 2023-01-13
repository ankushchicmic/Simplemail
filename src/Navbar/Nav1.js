import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Nav1() {
  return (
    <>
      <Navbar bg="light" variant="dark">
        <Container>
          <Navbar.Brand href="https://www.simplemail.ai/">
            <img
              alt=""
              src="https://lh3.googleusercontent.com/LKDLU8ZVMsIacy8PJISNy369_lGxOAIjTy-9rxv0YKALGOMoFRsQ78dAftd8dRjNRIIjOuT4gbENGowVXpYvghA6Ag=w128-h128-e365-rj-sc0x00ffffff"
              width="80"
              height="80"
              className="d-inline-block align-top"
            />
            <label className='h1' style={{ color: '  #7B645A ', margin: "1vw" }}> Simplemail </label>
          </Navbar.Brand>
          <button className='btn btn-secondary btn-lg' style={{backgroundColor:'#B2A296' , border:'none' ,  color: ' black ' , fontWeight:'bold'}}>Logout</button>

       
        </Container>
      </Navbar>
    </>
  )
}

export default Nav1