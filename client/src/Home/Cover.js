import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import background from "../css/assets/img/bg_image_1.jpg";
import patient from "../css/assets/img/patient.jpg";
   
const Cover=()=> {
  return (
    <>
   
  <div className="page-banner bg-image overlay-dark" style={{ backgroundImage: `url(${background})`, width:"100%" }} >
    <div className="hero-section">
      <div className="container text-center wow zoomIn">
        <span className="subhead">Let's make your life happier</span>
        <h1 className="display-4">Healthy Living</h1>
        <a href="#" className="btn btn-primary">Let's Consult</a>
      </div>
    </div>
  </div>


  <div className="bg-light">
    <div className="page-section py-3 mt-md-n5 custom-index">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-secondary text-white">
                <span className="mai-chatbubbles-outline"></span>
              </div>
              <p><span>Chat</span> with a doctors</p>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-primary text-white">
                <span className="mai-shield-checkmark"></span>
              </div>
              <p><span>E</span>-Health Protection</p>
            </div>
          </div>
          <div className="col-md-4 py-3 py-md-0">
            <div className="card-service wow fadeInUp">
              <div className="circle-shape bg-accent text-white">
                <span className="mai-basket"></span>
              </div>
              <p><span>E</span>-Health Pharmacy</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="page-section pb-0">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 py-3 wow fadeInUp">
            <h1>Welcome to Your Health <br/> Center</h1>
            <p className="text-grey mb-4">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Accusantium aperiam earum ipsa eius, inventore nemo labore eaque porro consequatur ex aspernatur. Explicabo, excepturi accusantium! Placeat voluptates esse ut optio facilis!</p>
            <a href="about.html" className="btn btn-primary">Learn More</a>
          </div>
          <div className="col-lg-6 wow fadeInRight" data-wow-delay="400ms">
            <div className="img-place custom-img-1">
              <img src={patient} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div> 

    </>
  )
}
export default  Cover;