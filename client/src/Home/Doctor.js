import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"

import Doctor_2 from "../css/assets/img/doctors/doctor_2.jpg";
import Doctor_3 from "../css/assets/img/doctors/doctor_3.jpg";

import Doctor_5 from "../css/assets/img/doctors/doctor_5.png";
import Doctor_6 from "../css/assets/img/doctors/doctor_6.jpg";



const Doctor=()=> {
  return (
    <>
 <div className="page-section">
    <div className="container">
      <h1 className="text-center mb-5 wow fadeInUp">Our Doctors</h1>

      <div className="owl-carousel wow fadeInUp" id="doctorSlideshow">
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <img src={Doctor_2} alt=""/>
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
      
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <img src={Doctor_3} alt=""/>
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
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <img src={Doctor_5} alt=""/>
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
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <img src={Doctor_6} alt=""/>
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
        <div className="item">
          <div className="card-doctor">
            <div className="header">
              <img src={Doctor_2} alt=""/>
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
    </>
  )
}
export default  Doctor;