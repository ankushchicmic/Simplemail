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
              width="90"
              height="90"
              className="d-inline-block align-top"
            />{' '}
            <label className='h1' style={{ color: 'black', margin: "1.5vw" }}> Simplemail </label>
          </Navbar.Brand>
          <button className='btn btn-secondary btn-lg'>Logout</button>
        </Container>
      </Navbar>
    </>
  )
}

export default Nav1