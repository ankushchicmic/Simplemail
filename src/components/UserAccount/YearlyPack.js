import React from 'react'
import Nav1 from '../../Navbar/Nav1'
import Footer from '../../Footer/Footer'
import './Style.css'
import { useNavigate } from 'react-router-dom';

function YearlyPack() {
    const navigate = useNavigate()
    const Buy = ()=>{
        navigate('/yearly')
    }
  return (
    <>
    <Nav1/>
    <div className='div'>
        <main class="">
          <div class="container ">
           
            <section class="text-center ">




              <div class="row gx-lg-5 ">


                <div class="col-lg-3 col-md-6 mb-4 mt-4">


                  <div class="card ">

                    <div class="card-header bg-warning py-3" >
                      <p class="text-uppercase small mb-2 text-white"><strong>Yearly</strong></p>
                      <h5 class="mb-0 text-white">$ 70</h5>
                    </div>
                    <div className='body1'>
                    <h3 style={{color:'#ffc107'}}>Get Access To The All Features For 1 Year </h3>
                        </div> 

                      
                  

                    <div class="card-footer bg-white py-3">
                      <button type="button" class="btn bg-warning btn-sm text-white" onClick={Buy} >Buy Now</button>
                    </div>

                  </div>


                </div>

               



                <div class="col-lg-3 col-md-6 mb-4 mt-4">


                  <div class="card  ">

                    <div class="card-header bg-warning py-3" >
                      <p class="text-uppercase small mb-2 text-white"><strong>Expires In</strong></p>
                      <h5 class="mb-0 text-white">Days</h5>
                    </div>

                    <div class="card-body ">
                    <h3 style={{color:'#ffc107'}}> Your Yearly Pack  Will Expires In 365 Days .</h3>
                    </div>

                    

                  </div>


                </div>

                
                <div class="col-lg-3 col-md-6 mb-4 mt-4">


                  <div class="card  ">

                    <div class="card-header bg-warning py-3" >
                      <p class="text-uppercase small mb-2 text-white"><strong>Click On The Button</strong></p>
                      <h5 class="mb-0 text-white"> Cancel Membership</h5>
                    </div>

                    <div class="card-body ">
                    <div class="">
                    <button className='btn btn bg-warning text-white'>Cancle Membership</button>
                    </div>
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
  )
}

export default YearlyPack