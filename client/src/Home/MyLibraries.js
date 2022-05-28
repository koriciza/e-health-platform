import React from 'react'
import { useEffect } from 'react';
import $ from 'jquery';


const MyLibraries=()=> {
  useEffect(() => {

    const jqry = document.createElement('script');
    jqry.src = "../css/assets/js/jquery-3.5.1.min.js";
    jqry.async = true;

    const btstrap = document.createElement('script');
    btstrap.src = "../css/assets/js/bootstrap.bundle.min.js";
    btstrap.async = true;

    const owl = document.createElement('script');
    owl.src = "../css/assets/vendor/owl-carousel/js/owl.carousel.min.js";
    owl.async = true;

    const wow = document.createElement('script');
    wow.src = "../css/assets/vendor/wow/wow.min.js";
    wow.async = true;

    const thm = document.createElement('script');
    thm.src = "../css/assets/js/theme.js";
    thm.async = true;


    document.getElementById("idLibraries").appendChild(jqry);
    document.getElementById("idLibraries").appendChild(btstrap);
    document.getElementById("idLibraries").appendChild(owl);
    document.getElementById("idLibraries").appendChild(wow);
    document.getElementById("idLibraries").appendChild(thm);
   
}, [])
  return (
    <>
    <h1>My libraries</h1>
    <div id="idLibraries">
   
        
    </div>
    
    </>
  )
}
 export default MyLibraries

