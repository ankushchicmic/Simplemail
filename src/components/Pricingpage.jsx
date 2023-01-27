import React from "react";
import Footer from "../Footer/Footer";
import Nav1 from "../Navbar/Nav1";
import "./pricing.css";
import { useNavigate } from "react-router-dom";

const PricingPage = () => {
  const navigate = useNavigate();
  const Monthly = () => {
    navigate("/pricing/monthlyPack");
  };
  const Yearly = () => {
    navigate("/pricing/yearlyPack");
  };

  return (
    <>
     
    
      <Nav1 />
     

<div className="main-body-1">

<div className="as">
<div className="accordion"> 
  
  <p className="accordion-toggle">Start 30 days free trail now!</p>
  <div className="accordion-content">
    <div className="accordion-inner"> 
     <ul className="package-list3" >
      <li>COMPOSE AI  ✅</li>
      <li>SUMMARISE  ✅</li>
      <li> AI  REPLY ✅</li>
      <li>CUSTOM REPLY   ✅</li>
     
     </ul>
     <div className="free-button">
     <div className="main">
     <a href="https://mail.google.com/mail/"><button className="btna">Try Free</button></a>
 </div>
     </div>
     
    </div>
  </div>
</div>

  

</div>
<div className='wrapper grid-container grid-x grid-margin-x align-top align-justify'>
 
<div className='package1 small-12 medium-4 cell'>
    <div className='package-name'>Choose  Plan</div>
    
    <hr className="hr"/>
    <ul className="package-list2">
      <li>
      COMPOSE AI 
      </li>
      <li>
        SUMMARISE AI
      </li>
      <li>
       AI REPLY
       
      </li>
     
    </ul>
         
  
              </div>

  <div className='package2 small-12 medium-4 cell'>
    <div className='package-name'>MONTHLY</div>
   
    <div className='package-price1 scale '>$6.99</div>
    <div ></div>
    <hr/>
    <ul className="package-list1">
      <li>
      <strong><span className="span-color"></span>✅</strong>
      </li>
      <li>
        <strong><span className="span-color"></span>✅</strong>
      </li>
      <li>
        <strong><span className="span-color"></span>✅</strong>
       
      </li>
      <li><strong><span className="span-color"></span></strong>
      ✅
      </li>
      <li><strong><span className="span-color"></span></strong>
      ✅
      </li>
      <li><strong><span className="span-color"></span></strong>
      ✅
      </li>
      <li><strong><span className="span-color"></span></strong>
      ✅
      </li>
     
      
      
      
    </ul>
         
    <div className="monthly-button">
                <button className="monthly-buy"    onClick={Monthly}> Buy Now</button>
              </div>
  

  </div>
  
  <div className='package business recommended small-12 medium-4 cell'>
  <div className="ribbon ribbon-top-right"><span>Save 20%</span></div>
    <div className='package-name'>YEARLY</div>
    <div className='package-price scale'>$70</div>
    
    <div style={{marginTop:"25px"}}></div>
    <hr/>
    <ul className="package-list">
    <li>
        <strong><span className="span-color"></span>✅</strong>
      </li>
      <li>
        <strong><span  className="span-color" ></span>✅</strong>
      </li>
      <li>
        <strong><span className="span-color" ></span>✅</strong>
       
      </li>
      <li>
      <strong><span className="span-color" ></span>✅ </strong>
      </li>
      <li>
      <strong><span className="span-color" ></span>✅ </strong>
      </li>
      <li>
      <strong><span className="span-color"></span>✅ </strong>
      </li>
      <li>
      <strong><span className="span-color" ></span>✅</strong>
      </li>
     
      
    </ul>
    <div className="yearly-button">
                <button className="yearly-buy"    onClick={Yearly}> Buy Now</button>
              </div>
              
  </div>
  
</div>

</div>
      <Footer/>
    </>
  );
};

export default PricingPage;
