import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import background from "../css/assets/img/bg_image_1.jpg";
import patient from "../css/assets/img/patient.jpg";


   
const CoverWithProps=props=> {
  return (
    <>
   
   <div className="page-banner overlay-dark bg-image" style={{ backgroundImage: `url(${background})` }}>
    <div className="banner-section">
      <div className="container text-center wow fadeInUp">
        <nav aria-label="Breadcrumb">
          <ol className="breadcrumb breadcrumb-dark bg-transparent justify-content-center py-0 mb-2">
            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">{props.title}</li>
          </ol>
        </nav>
        <h1 className="font-weight-normal">{props.pageName}</h1>
      </div> 
    </div> 
  </div>

  <div className="page-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-4 py-3 wow zoomIn">
          <div className="card-service">
            <div className="circle-shape bg-secondary text-white">
              <span className="mai-chatbubbles-outline"></span>
            </div>
            <p><span>Chat</span> with a doctors</p>
          </div>
        </div>
        <div className="col-md-4 py-3 wow zoomIn">
          <div className="card-service">
            <div className="circle-shape bg-primary text-white">
              <span className="mai-shield-checkmark"></span>
            </div>
            <p><span>One</span>-Health Protection</p>
          </div>
        </div>
        <div className="col-md-4 py-3 wow zoomIn">
          <div className="card-service">
            <div className="circle-shape bg-accent text-white">
              <span className="mai-basket"></span>
            </div>
            <p><span>One</span>-Health Pharmacy</p>
          </div>
        </div>
      </div>
    </div>
  </div>

    </>
  )
}
export default  CoverWithProps;