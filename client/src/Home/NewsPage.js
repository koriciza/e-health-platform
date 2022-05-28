import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import HeaderNews from "./Headers/HeaderNews"
import CoverWithProps from './CoverWithProps'
import Banner from './Banner'
import Footer from './Footer'

import Person1 from "../css/assets/img/person/person_1.jpg"
import Person2 from "../css/assets/img/person/person_2.jpg"
import Person3 from "../css/assets/img/person/person_3.jpg"
import Person4 from "../css/assets/img/person/person_4.jpg"

import Blog1 from "../css/assets/img/blog/blog_1.jpg"
import Blog2 from "../css/assets/img/blog/blog_2.jpg"
import Blog3 from "../css/assets/img/blog/blog_3.jpg"
import Blog4 from "../css/assets/img/blog/blog_4.jpg"
import Blog5 from "../css/assets/img/blog/blog_5.jpg"

const NewsPage=()=> {
  return (
   
           <>
           <HeaderNews/>
           <CoverWithProps title="Blog" pageName="News"/>
         
        
  <div className="page-section">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">Covid19</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog1} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">List of Countries without Coronavirus case</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person1} alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 1 week ago
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">Dental</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog3} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">What is the impact of eating too much sugar?</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person4} alt=""/>
                      </div>
                      <span>Wizdom Jack</span>
                    </div>
                    <span className="mai-time"></span> 2 weeks ago
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">Covid19</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog3} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">Shifting goalposts: Research in the time of the coronavirus</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person3} alt=""/>
                      </div>
                      <span>Adams Collier</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">Neurology</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog4} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">What are the nonmedical factors most closely linked to death risk?</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person1} alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">Cardiology</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog5} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">Do gut bacteria contribute to ethnic health disparities</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person1} alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">Patient Services</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog1} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">The Recovery Room: News beyond the pandemic</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person1} alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 1 month ago
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">General Health</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog2} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">Racism in mental healthcare: An invisible barrier</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person1} alt=""/>
                      </div>
                      <span>Roger Adams</span>
                    </div>
                    <span className="mai-time"></span> 2 months ago
                  </div>
                </div>
              </div>
            </div>
            
            <div className="col-sm-6 py-3">
              <div className="card-blog">
                <div className="header">
                  <div className="post-category">
                    <a href="#">Covid19</a>
                  </div>
                  <a href="blog-details" className="post-thumb">
                    <img src={Blog2} alt=""/>
                  </a>
                </div>
                <div className="body">
                  <h5 className="post-title"><a href="blog-details.html">COVID-19 live updates: Total number of cases passes 11.6 million</a></h5>
                  <div className="site-info">
                    <div className="avatar mr-2">
                      <div className="avatar-img">
                        <img src={Person2} alt=""/>
                      </div>
                      <span>Diego Simmons</span>
                    </div>
                    <span className="mai-time"></span> 4 weeks ago
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 my-5">
              <nav aria-label="Page Navigation">
                <ul className="pagination justify-content-center">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">1 <span className="sr-only">(current)</span></a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">2</a>
                  </li>
                  <li className="page-item"><a className="page-link" href="#">3</a></li>
                  <li className="page-item">
                    <a className="page-link" href="#">Next</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div> 
        </div>
        <div className="col-lg-4">
          <div className="sidebar">
            <div className="sidebar-block">
              <h3 className="sidebar-title">Search</h3>
              <form action="#" className="search-form">
                <div className="form-group">
                  <input type="text" className="form-control" placeholder="Type a keyword and hit enter"/>
                  <button type="submit" className="btn"><span className="icon mai-search"></span></button>
                </div>
              </form>
            </div>
            <div className="sidebar-block">
              <h3 className="sidebar-title">Categories</h3>
              <ul className="categories">
                <li><a href="#">Food <span>12</span></a></li>
                <li><a href="#">Dish <span>22</span></a></li>
                <li><a href="#">Desserts <span>37</span></a></li>
                <li><a href="#">Drinks <span>42</span></a></li>
                <li><a href="#">Ocassion <span>14</span></a></li>
              </ul>
            </div>

            <div className="sidebar-block">
              <h3 className="sidebar-title">Recent Blog</h3>
              <div className="blog-item">
                <a className="post-thumb" href="">
                  <img src={Blog1} alt=""/>
                </a>
                <div className="content">
                  <h5 className="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h5>
                  <div className="meta">
                    <a href="#"><span className="mai-calendar"></span> July 12, 2018</a>
                    <a href="#"><span className="mai-person"></span> Admin</a>
                    <a href="#"><span className="mai-chatbubbles"></span> 19</a>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <a className="post-thumb" href="">
                  <img src={Blog2} alt=""/>
                </a>
                <div className="content">
                  <h5 className="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h5>
                  <div className="meta">
                    <a href="#"><span className="mai-calendar"></span> July 12, 2018</a>
                    <a href="#"><span className="mai-person"></span> Admin</a>
                    <a href="#"><span className="mai-chatbubbles"></span> 19</a>
                  </div>
                </div>
              </div>
              <div className="blog-item">
                <a className="post-thumb" href="">
                  <img src={Blog3} alt=""/>
                </a>
                <div className="content">
                  <h5 className="post-title"><a href="#">Even the all-powerful Pointing has no control</a></h5>
                  <div className="meta">
                    <a href="#"><span className="mai-calendar"></span> July 12, 2018</a>
                    <a href="#"><span className="mai-person"></span> Admin</a>
                    <a href="#"><span className="mai-chatbubbles"></span> 19</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="sidebar-block">
              <h3 className="sidebar-title">Tag Cloud</h3>
              <div className="tagcloud">
                <a href="#" className="tag-cloud-link">dish</a>
                <a href="#" className="tag-cloud-link">menu</a>
                <a href="#" className="tag-cloud-link">food</a>
                <a href="#" className="tag-cloud-link">sweet</a>
                <a href="#" className="tag-cloud-link">tasty</a>
                <a href="#" className="tag-cloud-link">delicious</a>
                <a href="#" className="tag-cloud-link">desserts</a>
                <a href="#" className="tag-cloud-link">drinks</a>
              </div>
            </div>

            <div className="sidebar-block">
              <h3 className="sidebar-title">Paragraph</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus itaque, autem necessitatibus voluptate quod mollitia delectus aut, sunt placeat nam vero culpa sapiente consectetur similique, inventore eos fugit cupiditate numquam!</p>
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
export default  NewsPage;