import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import HeaderAbout from "./Headers/HeaderAbout"
import CoverWithProps from './CoverWithProps'
import Doctor from './Doctor'
import LastNews from './LatestNews'
import Banner from './Banner'
import Footer from './Footer'

import Doctor_2 from "../css/assets/img/doctors/doctor_2.jpg";
import Doctor_3 from "../css/assets/img/doctors/doctor_3.jpg";

import Doctor_5 from "../css/assets/img/doctors/doctor_5.png";
import Doctor_6 from "../css/assets/img/doctors/doctor_6.jpg";


const AboutUsPage=()=> {
  return (
   
           <>
           <HeaderAbout/>
           <CoverWithProps title="About" pageName="About Us"/>
         
           <div className="page-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-8 wow fadeInUp">
          <h1 className="text-center mb-3">Welcome to Your Health Center</h1>
          <div className="text-lg">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt neque sit, explicabo vero nulla animi nemo quae cumque, eaque pariatur eum ut maxime! Tenetur aperiam maxime iure explicabo aut consequuntur.</p>
            <p>Expedita iusto sunt beatae esse id nihil voluptates magni, excepturi distinctio impedit illo, incidunt iure facilis atque, inventore reprehenderit quidem aliquid recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quod ad sequi atque accusamus deleniti placeat dignissimos illum nulla voluptatibus vel optio, molestiae dolore velit iste maxime, nobis odio molestias!</p>
          </div>
        </div>
        <div className="col-lg-10 mt-5">
          <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>
          <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_2} alt="doctor 1"/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Stein Albert</p>
                  <span className="text-sm text-grey">Cardiology</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_3} alt="doctor 2"/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Alexa Melvin</p>
                  <span className="text-sm text-grey">Dental</span>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_5} alt="doctor 3"/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Rebecca Steffany</p>
                  <span className="text-sm text-grey">General Health</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
           <Banner/>
           <Footer/>
           </>
  )
}
export default  AboutUsPage;