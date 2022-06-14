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
import ReviewsIcon from '@mui/icons-material/Reviews';
import GradeIcon from '@mui/icons-material/Grade';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';

import Page from '../../components/Page';
import { ProductSort,  ProductFilterSidebar } from '../../sections/@dashboard/products';


const style = {
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const DoctorsList=()=> {

    const [openFilter, setOpenFilter] = useState(false);

  const handleOpenFilter = () => {
    setOpenFilter(true);
  };

  const handleCloseFilter = () => {
    setOpenFilter(false);
  };


  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
                  <p className="text-md text-start mb-0"><span>Experience :</span><span >6 years</span></p>
                  <p className="text-md text-start mb-0">Price :<strong>12000 fbu</strong></p>
                  <p className="text-md text-start mb-0">Availability :<span>Mon</span> to <span>Sun</span></p>
                  <p className="text-md text-start mb-0"><span style={{alignItems:"center"}} ><GradeIcon style={{color:"yellow"}}/><span>120</span></span>&nbsp;&nbsp;&nbsp;<ReviewsIcon /><span>120</span> </p>
                  
                 </div>
                 <p className="text-md text-center mb-0"><span><a href='#' className="text-sm text-white badge badge-primary" >view profile</a></span></p>
                  <input type='button' class='btn btn-primary' onClick={handleOpen} value='Book here'/>
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

{/* ############################################### MODAL ####################################### */}

<div>
      {/* <Button onClick={handleOpen}>Open modal</Button> */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Rendez-vous
          </Typography>
          <MaterialUIPickers/>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
         
           </>
  )
}


 {/* Date picker */}

 function MaterialUIPickers() {

  const [value, setValue] = React.useState(new Date('2014-08-18T21:11:54'));

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Stack spacing={3}>
        <DesktopDatePicker
          label="Date desktop"
          inputFormat="MM/dd/yyyy"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
    
    </>
  );
}
    
export default  DoctorsList;