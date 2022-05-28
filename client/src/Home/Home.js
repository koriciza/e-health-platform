import React from 'react'

import "../css/assets/css/maicons.css"
import "../css/assets/css/bootstrap.css"
import "../css/assets/vendor/animate/animate.css"
import "../css/assets/css/theme.css"
import "../css/assets/vendor/owl-carousel/css/owl.carousel.css"

import Header from "./Headers/Header"
import Cover from './Cover'
import Doctor from './Doctor'
import LastNews from './LatestNews'
import Banner from './Banner'
import Footer from './Footer'

const Home=()=> {

  return (
   
           <>
           <Header/>
           <Cover/>
            <Doctor/>  
           <LastNews/>
           <Banner/>
           <Footer/>
         
           </>
  )
}
export default  Home;