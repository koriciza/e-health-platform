import React from 'react'
import "../../css/assets/css/maicons.css"
import "../../css/assets/css/bootstrap.css"
import "../../css/assets/vendor/animate/animate.css"
import "../../css/assets/css/theme.css"
import "../../css/assets/vendor/owl-carousel/css/owl.carousel.css"

const HeaderAbout=()=> {
  return (
    <header>
<div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-sm-8 text-sm">
            <div className="site-info">
              <a href="#"><span className="mai-call text-primary"></span> +257 22 21 15 22</a>
              <span className="divider">|</span>
              <a href="#"><span className="mai-mail text-primary"></span> homeCare@gmail.com</a>
            </div>
          </div>
          <div className="col-sm-4 text-right text-sm">
            <div className="social-mini-button">
              <a href="#"><span className="mai-logo-facebook-f"></span></a>
              <a href="#"><span className="mai-logo-twitter"></span></a>
              <a href="#"><span className="mai-logo-dribbble"></span></a>
              <a href="#"><span className="mai-logo-instagram"></span></a>
            </div>
          </div>
        </div> 
      </div>
    </div>

    <nav className="navbar navbar-expand-lg navbar-light shadow-sm">
      <div className="container">
        <a className="navbar-brand" href="#"><span className="text-dark">Home</span><span className="text-primary">Care</span></a>

        <form action="#">
          <div className="input-group input-navbar">
            <div className="input-group-prepend">
              <span className="input-group-text" id="icon-addon1"><span className="mai-search"></span></span>
            </div>
            <input type="text" className="form-control" placeholder="Enter keyword.." aria-label="Username" aria-describedby="icon-addon1"/>
          </div>
        </form>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupport" aria-controls="navbarSupport" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupport">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => window.location.replace("/")}>Home</a>
            </li>
            <li className="nav-item active">
              <a className="nav-link" href="#" onClick={() => window.location.replace("/AboutUs")}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => window.location.replace("/Doctors")}>Doctors</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"  onClick={() => window.location.replace("/News")}>News</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => window.location.replace("/Contact")}>Contact</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ml-lg-3" href="#" onClick={() => window.location.replace("/Login")}>Login / Register</a>
            </li>
          </ul>
        </div> 
      </div> 
    </nav>

    </header>
  )
}
export default  HeaderAbout;