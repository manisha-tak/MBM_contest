import React, { Component } from "react";

export default class Section5 extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container-fluid nav_bg" id="deve">
            <div className="row">
              <div className="col-10 mx-auto">
                <div class="row">
                  <div class="col-sm-6 mb-3 mb-sm-0" id="develop">
                    <div>
                      <div>
                        <h1><strong>Developer</strong></h1>
                        <p>
                          We now support 14 popular coding languages. At our
                          core, LeetCode is about developers. Our powerful
                          development tools such as Playground help you test,
                          debug and even write your own projects online.
                        </p>

                        <a class="navbar-brand" href="#">
                          <img
                            src="/docs/5.3/assets/brand/bootstrap-logo.svg"
                            alt="Bootstrap"
                            width="30"
                            height="24"
                          />
                        </a>
                      </div> 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
