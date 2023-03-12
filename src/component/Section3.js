import React from 'react'
import download from '../image/download.png'

export default function Section3() {
  return (
    <><section id="header"  className=' section2 d-flex align-item-center'>
    <div className="container-fluid nav_bg">
     <div className='row'>
         <div className='col-10 mx-auto'>
             <div className='row'>
             <div className='col-lg-6 order-1 order-lg-2 header-img pt-0' id='lands' >
              <h1 className='pt-0'>
              Start Exploring
              </h1>
              <h2 className='my-3'>
              Explore is a well-organized tool that helps you get the most out of LeetCode by providing structure to guide your progress towards the next step in your programming career.
              </h2>
              <div className='mt-3' >
                 <a href="" className='btn-get-started'>
                     
                 <button type="button" className="btn btn-success" id='createaccount'>Get Started</button>
                 </a>
              </div>
             </div>
             <div className='col-md-6  pt-lg-0 order-2 order-lg-1' >
              <img src={download} alt="home"/>
             </div>
             </div>
         </div>
     </div>
   </div>
    </section>
    </>
  )
}

