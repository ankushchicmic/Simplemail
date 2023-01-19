import React from 'react';
import Footer from '../Footer/Footer';
import Nav1 from '../Navbar/Nav1';
import './pricing.css'
import { useNavigate } from 'react-router-dom';


const PricingPage = () => {
  const navigate = useNavigate()
  const Monthly = () => {
    navigate('/monthlyPack')
  }
  const Yearly = () => {
    navigate('/yearlyPack')
  }
  const Free = () => {
    navigate('/freeTrial')
  }

  return (
    <>
      <Nav1 />
      <div class="pricing-header">
        <label>Our Pricing</label>
      </div>

      <div className='div'>

        <main class="main-body">

          <div class="container ">

            <section class="text-center">




              <div class="row gx-lg-5">


                <div class="col-lg-3 col-md-6 mb-4 ">

                  <div className='bg-img'></div>
                  <div class="card1">
                    <div className='head bg-success text-white' id='header-card1'>
                      <h3 className='h3'>Free</h3>
                      <h2>$0</h2>
                    </div>
                    <div id='body-card1'>
                      <ul>
                        <li>Compose AI</li>
                        <li>Summarise </li>
                        <li>AI Reply</li>
                        <li>Custom Reply
                        </li>
                      </ul>
                    </div>
<<<<<<< HEAD
                    <div id='card1-footer'>
                      <button type="button" class="btn5 bg-success btn-sm text-white" onClick={Free}>Buy now</button>
=======

                    <div class="card-footer bg-white py-3">
                      <button type="button" class="btn bg-success btn-sm text-white"  onClick={Free} >Free Trial</button>
>>>>>>> aeed3e32282ddcce620477457eacfd1d7558cef4
                    </div>

                  </div>


                </div>

                <div class="col-lg-3 col-md-6 mb-4">


                  <div class="card2 ">

                    <div className='head bg-primary text-white' id='header-card2'>
                      <h3 className='h3'>Monthly</h3>
                      <h2>$6.99</h2>
                    </div>
                    <div id='body-card2'>
                      <ul>
                        <li> Compose AI </li>
                        <li>Summarise </li>
                        <li>AI Reply</li>
                        <li>Custom Reply
                        </li>
                      </ul>
                    </div>
                    <div id='card2-footer'>
                      <button type="button" class="btn6 bg-primary btn-sm text-white" onClick={Monthly}>Buy now</button>
                    </div>



                  </div>


                </div>



                <div class="col-lg-3 col-md-6 mb-4">


                  <div class="card3">
                    <div className='head bg-warning text-white' id='header-card3'>
                      <h3 className='h3'>Yearly</h3>
                      <h2>$70</h2>
                    </div>
                    <div id='body-card3'>
                      <ul>
                        <li>Compose AI</li>
                        <li>Summarise </li>
                        <li>AI Reply</li>
                        <li>Custom Reply
                        </li>
                      </ul>
                    </div>
                    <div id='card3-footer'>
                      <button type="button" class="btn7 bg-warning btn-sm text-white" onClick={Yearly}>Buy now</button>
                    </div>
                  </div>


                </div>


              </div>
            </section>

          </div>
        </main>

      </div>
      <Footer />
    </>
  );
};

export default PricingPage;