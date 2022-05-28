import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import banner from "../css/assets/img/banner-pattern.svg"
import mobile from "../css/assets/img/mobile_app.png"
import google from "../css/assets/img/google_play.svg"
import app from "../css/assets/img/app_store.svg"

const Banner=()=> {
  return (
   <>
    <div className="page-section banner-home bg-image" style={{ backgroundImage: `url(${banner})` }}>
    <div className="container py-5 py-lg-0">
      <div className="row align-items-center">
        <div className="col-lg-4 wow zoomIn">
          <div className="img-banner d-none d-lg-block">
            <img src={mobile} alt=""/>
          </div>
        </div>
        <div className="col-lg-8 wow fadeInRight">
          <h1 className="font-weight-normal mb-3">Get easy access of all features using E Health Application</h1>
          <a href="#"><img src={google} alt=""/></a>
          <a href="#" className="ml-2"><img src={app} alt=""/></a>
        </div>
      </div>
    </div>
  </div>
   </>
  )
}
export default  Banner;