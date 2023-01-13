import React from 'react'
import Nav1 from '../../Navbar/Nav1'
import Footer from '../../Footer/Footer'
import './Style.css'

function FreePack() {
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

                    <div class="card-header bg-success py-3" >
                      <p class="text-uppercase small mb-2 text-white"><strong>Free</strong></p>
                      <h5 class="mb-0 text-white">$0</h5>
                    </div>
                    <div className='body1'>
                    <h3 style={{color:'green'}}>Get Access To The All Features Free For 30 Days </h3>
                        </div> 
                  

                    <div class="card-footer bg-white py-3">
                      <button type="button" class="btn bg-success btn-sm text-white" >Free Trial</button>
                    </div>

                  </div>


                </div>

               



                <div class="col-lg-3 col-md-6 mb-4 mt-4">


                  <div class="card  ">

                    <div class="card-header bg-success py-3" >
                      <p class="text-uppercase small mb-2 text-white"><strong>Expires In</strong></p>
                      <h5 class="mb-0 text-white">Days</h5>
                    </div>

                    <div class="card-body ">
                    <h3 style={{color:'green'}}> Your Free Trial Will Expires In 30 Days .</h3>
                    </div>

                    

                  </div>


                </div>
                <div class="col-lg-3 col-md-6 mb-4 mt-4">


<div class="card  ">

  <div class="card-header bg-success py-3" >
    <p class="text-uppercase small mb-2 text-white"><strong>Click On The Button</strong></p>
    <h5 class="mb-0 text-white"> Cancel Membership</h5>
  </div>

  <div class="card-body ">
  <div class="">
  <button className='btn btn bg-success text-white'>Cancle Membership</button>
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

export default FreePack