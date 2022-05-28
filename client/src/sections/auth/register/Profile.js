import React from 'react'
import { useState,useEffect } from 'react';
import './Profile.css';

 function Profile() {

	  const [profileImg, setProfile] = useState('https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png')

	const  imageHandler = (e) => {
		const reader = new FileReader();
		reader.onload = () =>{
		  if(reader.readyState === 2){
			setProfile(reader.result)
		
		  }
		}
		reader.readAsDataURL(e.target.files[0])
	  };

  return (


	<div className="page_p">
				<div className="container_p">
				
					<div className="img-holder">
						<img src={profileImg} alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons"></i>
						Choose your Photo
					</label>
          </div>
				</div>
			</div>
  )
}

export default Profile