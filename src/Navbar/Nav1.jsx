import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './Nav.css'

function Nav1() {
  async function tut() {
    // let queryOptions = { active: true, lastFocusedWindow: true };

    // let [tab] = await chrome.tabs.query(queryOptions);
    // let internalURL = chrome.runtime.getURL('./tutorial.html');

    // chrome.tabs.create(
    //   {
    //     url: chrome.extension.getURL('chrome-extension://epaoeoeofbdhoakmlhembafepfjgomme/tutorial.html'),
    //   }
    // )
    window.open('chrome-extension://epaoeoeofbdhoakmlhembafepfjgomme/tutorial.html')
  }
  return (
    <>
      
      <div className="nav">
  <input type="checkbox" id="nav-check"/>
  <div className="nav-header">
  <img
              alt=""
              src="https://lh3.googleusercontent.com/LKDLU8ZVMsIacy8PJISNy369_lGxOAIjTy-9rxv0YKALGOMoFRsQ78dAftd8dRjNRIIjOuT4gbENGowVXpYvghA6Ag=w128-h128-e365-rj-sc0x00ffffff"
              width="75"
              height="70"
              classNameName="d-inline-block align-top"
            />
    <div className="nav-title">
     Simplemail
    </div>
  </div>
  <div className="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div className="nav-links">
     <button classNameName='tut ' onClick={tut}> --&gt;back to Tutorial</button>
      <button classNameName='btn2 '>Logout</button>
  </div>
</div>
    </>
  )
}

export default Nav1