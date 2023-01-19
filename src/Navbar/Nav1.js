import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'

function Nav1() {
  return (
    <>
      <Navbar  id='nav'>
        <Container>
          <Navbar.Brand href="https://www.simplemail.ai/">
            <img
              alt=""
              src="https://lh3.googleusercontent.com/LKDLU8ZVMsIacy8PJISNy369_lGxOAIjTy-9rxv0YKALGOMoFRsQ78dAftd8dRjNRIIjOuT4gbENGowVXpYvghA6Ag=w128-h128-e365-rj-sc0x00ffffff"
              width="75"
              height="70"
              className="d-inline-block align-top"
            />
            <label className='h1' style={{ color: '   #130B0F ', margin: ".6vw" }}> Simplemail </label>
          </Navbar.Brand>
          <button className='btn2 '>Logout</button>
        </Container>
      </Navbar>
    </>
  )
}

export default Nav1