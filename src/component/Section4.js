import React from "react";
import download from "../image/download.png";

export default function Section4() {
  return (
    <>
      <section id="section4" className=" section2 d-flex align-item-center">
        <div className="container-fluid nav_bg">
          <div className="row">
            <div className="col-10 mx-auto" id="box">
              <div>
                <img
                  class="card-img-top"
                  src={download}
                  height="250"
                  width="40%"
                  alt="Card image cap"
                />
                <div class="card-body">
                    <h2><strong>Contests</strong></h2>
                  <p class="card-text">
                    Over 2600 questions for you to practice. Come and join one
                    of the largest tech communities with hundreds of thousands
                    of active users and participate in our contests to challenge
                    yourself and earn rewards..
                  </p>
                  <a href="" className='btn-get-started'>
                        
                        <button type="button" className="btn btn-success" id='createaccount'>View Questions</button>
                        </a>
                </div>
              </div>
              <div id="box2">
                <img
                  class="card-img-top"
                  src={download}
                  height="250"
                  width="40%"
                  alt="Card image cap"
                />
                <div class="card-body">
                <h2><strong>Ranking</strong></h2>
                  <p class="card-text">
                    Over 2600 questions for you to practice. Come and join one
                    of the largest tech communities with hundreds of thousands
                    of active users and participate in our contests to challenge
                    yourself and earn rewards..
                  </p>
                  <a href="" className='btn-get-started'>
                        
                        <button type="button" className="btn btn-success" id='createaccount'>View Ranking</button>
                        </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
