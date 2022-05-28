import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"

import Blog1 from "../css/assets/img/blog/blog_1.jpg"
import Person1 from "../css/assets/img/person/person_1.jpg"
import Person3 from "../css/assets/img/person/person_2.jpg"
import Blog2 from "../css/assets/img/blog/blog_2.jpg"
import Blog3 from "../css/assets/img/blog/blog_3.jpg"


const LastNews=()=> {
  return (
  <>
   <div className="page-section bg-light">
    <div className="container">
      <h1 className="text-center wow fadeInUp">Latest News</h1>
      <div className="row mt-5">
        <div className="col-lg-4 py-2 wow zoomIn">
          <div className="card-blog">
            <div className="header">
              <div className="post-category">
                <a href="#">Covid19</a>
              </div>
              <a href="#" onClick={() => window.location.replace("/BlogDetails")} className="post-thumb">
                <img src={Blog1} alt="news1"/>
              </a>
            </div>
            <div className="body">
              <h5 className="post-title"><a href="#" onClick={() => window.location.replace("/BlogDetails")}>List of Countries without Coronavirus case</a></h5>
              <div className="site-info">
                <div className="avatar mr-2">
                  <div className="avatar-img">
                    <img src={Person1} alt="news2"/>
                  </div>
                  <span>Roger Adams</span>
                </div>
                <span className="mai-time"></span> 1 week ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 py-2 wow zoomIn">
          <div className="card-blog">
            <div className="header">
              <div className="post-category">
                <a href="#">Covid19</a>
              </div>
              <a href="#" onClick={() => window.location.replace("/BlogDetails")}className="post-thumb">
                <img src={Blog2} alt="news3"/>
              </a>
            </div>
            <div className="body">
              <h5 className="post-title"><a href="#" onClick={() => window.location.replace("/BlogDetails")}>Recovery Room: News beyond the pandemic</a></h5>
              <div className="site-info">
                <div className="avatar mr-2">
                  <div className="avatar-img">
                    <img src={Person1} alt="news4"/>
                  </div>
                  <span>Roger Adams</span>
                </div>
                <span className="mai-time"></span> 4 weeks ago
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4 py-2 wow zoomIn">
          <div className="card-blog">
            <div className="header">
              <div className="post-category">
                <a href="#">Covid19</a>
              </div>
              <a href="#" onClick={() => window.location.replace("/BlogDetails")} className="post-thumb">
                <img src={Blog3} alt="news5"/>
              </a>
            </div>
            <div className="body">
              <h5 className="post-title"><a href="#" onClick={() => window.location.replace("/BlogDetails")}>What is the impact of eating too much sugar?</a></h5>
              <div className="site-info">
                <div className="avatar mr-2">
                  <div className="avatar-img">
                    <img src={Person3} alt="news6"/>
                  </div>
                  <span>Diego Simmons</span>
                </div>
                <span className="mai-time"></span> 2 months ago
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 text-center mt-4 wow zoomIn">
          <a href="#" onClick={() => window.location.replace("/News")} className="btn btn-primary">Read More</a>
        </div>

      </div>
    </div>
  </div> 
  
  
  </>
  )
}
export default  LastNews;