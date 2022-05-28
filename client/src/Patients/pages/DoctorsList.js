import React from 'react'
import { useState } from 'react';
import "../../css/assets/css/maicons.css"
import "../../css/assets/css/bootstrap.css"
import "../../css/assets/vendor/animate/animate.css"
import "../../css/assets/css/theme.css"
import "../../css/assets/vendor/owl-carousel/css/owl.carousel.css"


import Doctor_1 from "../../css/assets/img/doctors/doctor_1.webp";
import Doctor_2 from "../../css/assets/img/doctors/doctor_2.jpg";
import Doctor_3 from "../../css/assets/img/doctors/doctor_3.jpg";
import Doctor_4 from "../../css/assets/img/doctors/doctor_4.webp";
import Doctor_5 from "../../css/assets/img/doctors/doctor_5.png";
import Doctor_6 from "../../css/assets/img/doctors/doctor_6.jpg";
import Doctor_7 from "../../css/assets/img/doctors/doctor_7.jpg";
import Doctor_8 from "../../css/assets/img/doctors/doctor_8.jpg";
import Doctor_9 from "../../css/assets/img/doctors/doctor_9.jpg";

import { Container, Stack, Typography } from '@mui/material';
import Page from '../../components/Page';
import { ProductSort,  ProductFilterSidebar } from '../../sections/@dashboard/products';

const DoctorsList=()=> {

    const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };

  return (
   
           <>
            <Page title="Dashboard: Products">
      <Container>
        <Typography variant="h4" sx={{mb: 1}}>
          Doctors
        </Typography>

        <Stack direction="row" flexWrap="wrap-reverse" alignItems="center" justifyContent="flex-end" sx={{ mb: 5 }}>
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            {/* <ProductFilterSidebar
              isOpenFilter={openFilter}
              onOpenFilter={handleOpenFilter}
              onCloseFilter={handleCloseFilter}
            /> */}
            <ProductSort />
          </Stack>
        </Stack>
          
           <div className="page-section bg-light">
           
          <div className="container">
           <div className="row justify-content-center">
      
        <div className="col-lg-10">

          <div className="row">
          <div class="col-sm-12 py-2  wow fadeInLeft" style={{justifyContent:'center'}} >
          
          <input type="text" id="fullName" class="form-control" placeholder="Search for your preferred doctor.."/>
        </div>
            
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_1} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Albert Gahungu</p>
                  <span className="text-sm text-white badge badge-danger">Cardiology</span>
                  <div>
                    <div>
                  <p className="text-md text-start mb-0"><span>Experience :</span><span>6 years</span></p>
                  <p className="text-md text-start mb-0">Price :<span>12000 fbu</span></p>
                  <p className="text-md text-start mb-0">Availability :<span>Monday</span> to <span>Sunday</span></p>
                  <p className="text-md mb-0"><span>view profile</span></p>
                  <p className="text-md mb-0">Rate :<span>12000 fbu</span></p>
                  <p className="text-md mb-0">Reviews :<span>12000 fbu</span></p>
                 </div>
                  <input type='button' class='btn btn-primary' value='Book here'/>
                  </div>
                 
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_2} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Alain Butoyi</p>
                  <span className="text-sm text-grey">Dental</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_3} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Aline Kaneza</p>
                  <span className="text-sm text-grey">General Health</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_4} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Armel Kaze</p>
                  <span className="text-sm text-grey">Cardiology</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_5} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Estella Irakoze</p>
                  <span className="text-sm text-grey">Dental</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_6} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Christa Bella Keza</p>
                  <span className="text-sm text-grey">General Health</span>
                </div>
              </div>
            </div>

            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_7} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Alphonse Bukuru</p>
                  <span className="text-sm text-grey">Cardiology</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_8} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Emelyne Ingabire</p>
                  <span className="text-sm text-grey">Dental</span>
                </div>
              </div>
            </div>
    
            <div className="col-md-6 col-lg-4 py-3 wow zoomIn">
              <div className="card-doctor">
                <div className="header">
                  <img src={Doctor_9} alt=""/>
                  <div className="meta">
                    <a href="#"><span className="mai-call"></span></a>
                    <a href="#"><span className="mai-logo-whatsapp"></span></a>
                  </div>
                </div>
                <div className="body">
                  <p className="text-xl mb-0">Dr. Gilbert Harera</p>
                  <span className="text-sm text-grey">General Health</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div> 
  </div> 
  </Container>
    </Page> 
          
           </>
  )
}
export default  DoctorsList;