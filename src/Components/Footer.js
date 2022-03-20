import React from "react";
import './Footer.css'
// import { FaBeer,fa } from 'react-icons/fa';
import { FaInstagramSquare, FaLinkedinIn, FaFacebook } from "react-icons/fa";



function Footer() {
  return (
    <section className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 col-lg-10 mx-auto ">
            <div className="row">
              <div className="col-6 col-lg-3">
                {/* <h6>ABOUT US</h6> */}

                <br />

                <a href="/" className="mt-5">
                  About Us
                </a>

                <br />
                <br />
                <a href="/">Contact</a>
                <br />
                <br />

                <a href="/">Our people</a>
                <br />
              </div>
              <div className="col-6 col-lg-3">
                {/* <h6>CONTACT</h6> */}
                <br></br>


                <a href="/" className="mt-5">
                Frequently asked questions                </a>

                <br />
                <br />
                <a href="/">Privacy</a>
                <br />
                <br />

                <a href="/">Term and conditiond</a>
                <br />
            
                <br />
                
              </div>
              <div className="col-6 col-lg-3">
                {/* <h6>CONTACT</h6> */}
                <br></br>
                <div className="social-menu">
                  <ul>
                  <li><a href="https://thiscoindaily.com/learn-to-build-substrate-pallets-from-scratch-dissecting-the-frame-pallet/"> <i className="fa fa-facebook"><FaFacebook /> </i></a></li>
                  <li><a href="https://thiscoindaily.com/learn-to-build-substrate-pallets-from-scratch-dissecting-the-frame-pallet/"> <i className="fa fa-twitter"><FaLinkedinIn /> </i></a></li>
                  <li><a href="https://thiscoindaily.com/learn-to-build-substrate-pallets-from-scratch-dissecting-the-frame-pallet/"> <i className="fa fa-instagram"><FaInstagramSquare /> </i></a></li>
                  
                  </ul>
                </div>

                {/* <a href="https://thiscoindaily.com/learn-to-build-substrate-pallets-from-scratch-dissecting-the-frame-pallet/" className="social">
                <FaFacebook />              </a>

                <br />
                <br />
                <a href="/"><FaLinkedinIn /></a>
                <br />
                <br />

                <a href="/"><FaInstagramSquare /></a>
                <br /> */}
            
                <br />
                
              </div>
              
            </div>
            
            <br />
           
            <hr />
            <div className="mt-5">
              <p className="main-hero-para text-center w-100">
                Copyright @ 2022 dotfordummies. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
