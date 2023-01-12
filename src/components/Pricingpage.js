import React from 'react';
import Footer from '../Footer/Footer';
import Nav1 from '../Navbar/Nav1';
import './pricing.css'
import { useNavigate } from 'react-router-dom';


const PricingPage = () => {
     const navigate = useNavigate()
    const Monthly = ()=>{
        navigate('/monthly')
    }
    const Yearly = ()=>{
        navigate('/yearly')
    }
   
  return (
    <>
    <Nav1/>
    <div className='div'>
     <main class="">
    <div class="container ">
    <h4 class="mb-4 text-center  "><strong className='price'>Our Pricing</strong></h4>
      <section class="text-center">
        

        

        <div class="row gx-lg-5">

          
          <div class="col-lg-3 col-md-6 mb-4">

         
            <div class="card">

              <div class="card-header bg-success py-3">
                <p class="text-uppercase small mb-2"><strong>Free</strong></p>
                <h5 class="mb-0">Free</h5>
              </div>

              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                </ul>
              </div>

              <div class="card-footer bg-white py-3">
                <button type="button" class="btn btn-success btn-sm">Get it</button>
              </div>

            </div>
          

          </div>
          
          <div class="col-lg-3 col-md-6 mb-4">

        
            <div class="card border ">

              <div class="card-header bg-primary py-3">
                <p class="text-uppercase small mb-2"><strong>Monthly</strong></p>
                <h5 class="mb-0">$19/month</h5>
              </div>

              <div class="card-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                </ul>
              </div>

              <div class="card-footer bg-white py-3">
                <button type="button" class="btn btn-primary btn-sm" onClick={Monthly}>Buy now</button>
              </div>

            </div>
           

          </div>
       

         
          <div class="col-lg-3 col-md-6 mb-4">

          
            <div class="card ">

              <div class="card-header bg-warning py-3">
                <p class="text-uppercase small mb-2"><strong>Yearly</strong></p>
                <h5 class="mb-0">$49/month</h5>
              </div>

              <div class="card-body ">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li>
                </ul>
              </div>

              <div class="card-footer bg-white py-3">
                <button type="button" class="btn btn-warning btn-sm" onClick={Yearly}>Buy now</button>
              </div>

            </div>
           

          </div>
    
         
        </div>
      </section>
    
    </div>
  </main>
  <Footer/>
  </div>
  </>
  );
};

export default PricingPage;