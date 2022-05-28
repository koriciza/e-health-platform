import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import HeaderDoctor from "./Headers/HeaderDoctor"
import CoverWithProps from './CoverWithProps'

import Banner from './Banner'
import Footer from './Footer'

import Doctor_1 from "../css/assets/img/doctors/doctor_1.webp";
import Doctor_2 from "../css/assets/img/doctors/doctor_2.jpg";
import Doctor_3 from "../css/assets/img/doctors/doctor_3.jpg";
import Doctor_4 from "../css/assets/img/doctors/doctor_4.webp";
import Doctor_5 from "../css/assets/img/doctors/doctor_5.png";
import Doctor_6 from "../css/assets/img/doctors/doctor_6.jpg";


const DoctorsPage=()=> {
  return (
   
           <>
           <HeaderDoctor/>
           <CoverWithProps title="Doctors" pageName="Our Doctors"/>
          
           <div className="page-section bg-light">
           
    <div className="container">
      <div className="row justify-content-center">
      
        <div className="col-lg-10">

          <div className="row">
          <div class="col-sm-12 py-2  wow fadeInLeft" style={{justifyContent:'center'}} >
          
          <input type="text" id="fullName" class="form-control" placeholder="Search for your preferred doctor.."/>
        </div>
            
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_1} alt=""/>
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
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_2} alt=""/>
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
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_3} alt=""/>
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
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_4} alt=""/>
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
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_5} alt=""/>
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
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
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
export default  DoctorsPage;