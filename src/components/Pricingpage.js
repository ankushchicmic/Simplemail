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
      <div className='div'>
        <main class="">
          <div class="container ">
            <h4 class="mb-4 text-center  "><strong className='price'>Our Pricing</strong></h4>
            <section class="text-center">




              <div class="row gx-lg-5">


                <div class="col-lg-3 col-md-6 mb-4">


                  <div class="card">

                    <div class="card-header bg-success py-3" >
                      <p class="text-uppercase small mb-2 text-white"><strong>DEMO</strong></p>
                      <h5 class="mb-0 text-white">Try Free for 15 days</h5>
                    </div>

                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Feature</li>
                        <li class="list-group-item">Feature</li>
                        <li class="list-group-item">Feature</li>
                      </ul>
                    </div>

                    <div class="card-footer bg-white py-3">
                      <button type="button" class="btn bg-success btn-sm text-white"  onClick={Free} >Free Trial</button>
                    </div>

                  </div>


                </div>

                <div class="col-lg-3 col-md-6 mb-4">


                  <div class="card border ">

                    <div class="card-header bg-primary py-3">
                      <p class="text-uppercase small mb-2 text-white"><strong>Monthly</strong></p>
                      <h5 class="mb-0 text-white">$6.79</h5>
                    </div>

                    <div class="card-body">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Feature</li>
                        <li class="list-group-item">Feature</li>
                        <li class="list-group-item">Feature</li>
                        {/* <li class="list-group-item">Feature</li> */}
                      </ul>
                    </div>

                    <div class="card-footer bg-white py-3">
                      <button type="button" class="btn bg-primary btn-sm text-white"  onClick={Monthly}>Buy now</button>
                    </div>

                  </div>


                </div>



                <div class="col-lg-3 col-md-6 mb-4">


                  <div class="card  ">

                    <div class="card-header bg-warning py-3" >
                      <p class="text-uppercase small mb-2 text-white"><strong>Yearly</strong></p>
                      <h5 class="mb-0 text-white">$70</h5>
                    </div>

                    <div class="card-body ">
                      <ul class="list-group list-group-flush">
                        <li class="list-group-item">Feature</li>
                        <li class="list-group-item">Feature</li>
                        <li class="list-group-item">Feature</li>
                        {/* <li class="list-group-item">Feature</li>
                  <li class="list-group-item">Feature</li> */}
                      </ul>
                    </div>

                    <div class="card-footer bg-white py-3">
                      <button type="button" class="btn bg-warning btn-sm text-white" onClick={Yearly}>Buy now</button>
                    </div>

                  </div>


                </div>


              </div>
            </section>

          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default PricingPage;