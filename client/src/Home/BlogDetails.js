import React from 'react'
import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"
import Header from "./Headers/Header"
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

const BlogDetails=()=> {
  return (
   
           <>
           <Header/>
           <CoverWithProps title="Blog" pageName="News"/>
         
           <div className="page-section pt-5">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <nav aria-label="Breadcrumb">
            <ol className="breadcrumb bg-transparent py-0 mb-5">
              <li className="breadcrumb-item"><a href="#" onClick={() => window.location.replace("/")}>Home</a></li>
              <li className="breadcrumb-item"><a href="#" onClick={() => window.location.replace("/News")}>Blog</a></li>
              <li className="breadcrumb-item active" aria-current="page">List of Countries without Coronavirus case</li>
            </ol>
          </nav>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-8">
          <article className="blog-details">
            <div className="post-thumb">
              <img src={Blog1} alt=""/>
            </div>
            <div className="post-meta">
              <div className="post-author">
                <span className="text-grey">By</span> <a href="#">Admin</a>  
              </div>
              <span className="divider">|</span>
              <div className="post-date">
                <a href="#">22 Jan, 2018</a>
              </div>
              <span className="divider">|</span>
              <div>
                <a href="#">StreetStyle</a>, <a href="#">Fashion</a>, <a href="#">Couple</a>  
              </div>
              <span className="divider">|</span>
              <div className="post-comment-count">
                <a href="#">8 Comments</a>
              </div>
            </div>
            <h2 className="post-title h1">List of Countries without Coronavirus case</h2>
            <div className="post-content">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sit amet est vel orci luctus sollicitudin. Duis eleifend vestibulum justo, varius semper lacus condimentum dictum. Donec pulvinar a magna ut malesuada. In posuere felis diam, vel sodales metus accumsan in. Duis viverra dui eu pharetra pellentesque. Donec a eros leo. Quisque sed ligula vitae lorem efficitur faucibus. Praesent sit amet imperdiet ante. Nulla id tellus auctor, dictum libero a, malesuada nisi. Nulla in porta nibh, id vestibulum ipsum. Praesent dapibus tempus erat quis aliquet. Donec ac purus id sapien condimentum feugiat.</p>

              <p>Praesent vel mi bibendum, finibus leo ac, condimentum arcu. Pellentesque sem ex, tristique sit amet suscipit in, mattis imperdiet enim. Integer tempus justo nec velit fringilla, eget eleifend neque blandit. Sed tempor magna sed congue auctor. Mauris eu turpis eget tortor ultricies elementum. Phasellus vel placerat orci, a venenatis justo. Phasellus faucibus venenatis nisl vitae vestibulum. Praesent id nibh arcu. Vivamus sagittis accumsan felis, quis vulputate</p>
            </div>
            <div className="post-tags">
              <a href="#" className="tag-link">LifeStyle</a>
              <a href="#" className="tag-link">Food</a>
              <a href="#" className="tag-link">Coronavirus</a>
            </div>
          </article> 

          <div className="comment-form-wrap pt-5">
            <h3 className="mb-5">Leave a comment</h3>
            <form action="#" className="">
              <div className="form-row form-group">
                <div className="col-md-6">
                  <label for="name">Name *</label>
                  <input type="text" className="form-control" id="name"/>
                </div>
                <div className="col-md-6">
                  <label for="email">Email *</label>
                  <input type="email" className="form-control" id="email"/>
                </div>
              </div>
              <div className="form-group">
                <label for="website">Website</label>
                <input type="url" className="form-control" id="website"/>
              </div>
  
              <div className="form-group">
                <label for="message">Message</label>
                <textarea name="msg" id="message" cols="30" rows="8" className="form-control"></textarea>
              </div>
              <div className="form-group">
                <input type="submit" value="Post Comment" className="btn btn-primary"/>
              </div>
  
            </form>
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
export default  BlogDetails;