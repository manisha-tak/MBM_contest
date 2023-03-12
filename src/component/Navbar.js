import React from 'react'

export default function Navbar() {
  return (
    <>
    
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
      <img src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="Bootstrap" width="30" height="24"/>
    </a>

        <a className="navbar-brand" href="#"><strong>Coding Area</strong></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
            <ul className="navbar-nav ml-0 d-flex justify-content-end">
                
                <li id='e' className="nav-item">
                    <a className="nav-link" href="#">Explore</a>
                </li>
                <li id='d' className="nav-item">
                    <a className="nav-link" href="#">Developer</a>
                </li>
               
                <li id="s" className="nav-item">
                    <a className="nav-link" href="#">Signin</a>
                </li>
            </ul>
        </div>
    </nav>
    
    </>
  )
}

