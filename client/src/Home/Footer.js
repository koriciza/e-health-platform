import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"

const Footer=()=> {
  return (
    <>
    <footer className="page-footer">
    <div className="container">
      <div className="row px-md-3">
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Company</h5>
          <ul className="footer-menu">
            <li><a href="#">About Us</a></li>
            <li><a href="#">Career</a></li>
            <li><a href="#">Editorial Team</a></li>
            <li><a href="#">Protection</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>More</h5>
          <ul className="footer-menu">
            <li><a href="#">Terms & Condition</a></li>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Advertise</a></li>
            <li><a href="#">Join as Doctors</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Our partner</h5>
          <ul className="footer-menu">
            <li><a href="#">One-Fitness</a></li>
            <li><a href="#">One-Drugs</a></li>
            <li><a href="#">One-Live</a></li>
          </ul>
        </div>
        <div className="col-sm-6 col-lg-3 py-3">
          <h5>Contact</h5>
          <p className="footer-link mt-2">34 Amitie Street Rohero, MA 02038</p>
          <a href="#" className="footer-link">+257 22 21 15 22</a>
          <a href="#" className="footer-link">ehealth@gmail.com</a>

          <h5 className="mt-3">Social Media</h5>
          <div className="footer-sosmed mt-3">
            <a href="#" target="_blank"><span className="mai-logo-facebook-f"></span></a>
            <a href="#" target="_blank"><span className="mai-logo-twitter"></span></a>
            <a href="#" target="_blank"><span className="mai-logo-google-plus-g"></span></a>
            <a href="#" target="_blank"><span className="mai-logo-instagram"></span></a>
            <a href="#" target="_blank"><span className="mai-logo-linkedin"></span></a>
          </div>
        </div>
      </div>

      <hr/>

      <p id="copyright">Swift-IT solutions &copy; 2022 . All right reserved</p>
    </div>
  </footer>
    </>
  )
}
export default  Footer;