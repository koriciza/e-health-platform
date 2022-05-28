import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import HeaderContact from "./Headers/HeaderContact"
import CoverWithProps from './CoverWithProps'
import Doctor from './Doctor'
import LastNews from './LatestNews'
import Banner from './Banner'
import Footer from './Footer'



const ContactPage=()=> {
  return (
   
           <>
           <HeaderContact/>
           <CoverWithProps title="Contact" pageName="Contact"/>
         
           <div className="page-section">
    <div className="container">
      <h1 className="text-center wow fadeInUp">Get in Touch</h1>

      <form className="contact-form mt-5">
        <div className="row mb-3">
          <div className="col-sm-6 py-2 wow fadeInLeft">
            {/* <label for="fullName">Name</label> */}
            <input type="text" id="fullName" className="form-control" placeholder="Full name.."/>
          </div>
          <div className="col-sm-6 py-2 wow fadeInRight">
            {/* <label for="emailAddress">Email</label> */}
            <input type="text" id="emailAddress" className="form-control" placeholder="Email address.."/>
          </div>
          <div className="col-12 py-2 wow fadeInUp">
            {/* <label for="subject">Subject</label> */}
            <input type="text" id="subject" className="form-control" placeholder="Enter subject.."/>
          </div>
          <div className="col-12 py-2 wow fadeInUp">
            {/* <label for="message">Message</label> */}
            <textarea id="message" className="form-control" rows="8" placeholder="Enter Message.."></textarea>
          </div>
        </div>
        <button type="submit" className="btn btn-primary wow zoomIn">Send Message</button>
      </form>
    </div>
  </div>

 {/*  <div className="maps-container wow fadeInUp">
    <div id="google-maps"></div>
  </div> */}
           <Banner/>
           <Footer/>
           </>
  )
}
export default  ContactPage;