import React from 'react';
import download from '../image/download.png'

export default function Section2() {
  return (
       <>
       <section id="header"  className=' section2 d-flex align-item-center'>
       <div className="container-fluid nav_bg">
        <div className='row'>
            <div className='col-10 mx-auto'>
                <div className='row'>
                <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ' >
                 <h1 className='pt-5'>
                    A New Way To  Learn
                 </h1>
                 <h2 className='my-3'>
                 CodeArea is the best platform to help you enhance your skills, expand your knowledge and prepare for technical interviews.
                 </h2>
                 <div className='mt-3' >
                    <a href="" className='btn-get-started'>
                        
                    <button type="button" className="btn btn-success" id='createaccount'>Create Account</button>
                    </a>
                 </div>
                </div>
                <div className='col-lg-6 order-1 order-lg-2 header-img pt-5' id='land'>
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
