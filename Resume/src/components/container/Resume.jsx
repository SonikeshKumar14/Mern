import React from 'react'
import Achievements from './Achievements';
import image from '../../images/photo.jpg'
import Contact from './Contact';
import Eductaion from './Educations';
import ProfileDetails from './ProfileDetails';


function Resume() {
  return (
    <div className='main'>
        <div className='leftBox'>
          <div className='lContainer'>
            <div className='photo'>
              <img src={image} className="img" alt="" />
              <h3>Sonikesh Kumar</h3>
              <p>Web Developer</p>
            </div>
           <Contact />
          </div>
        </div>
       
        <div className='rightBox'>
          <div className='rContainer'>
           <ProfileDetails />
           <Achievements />
           <Eductaion />
          </div>
        </div>
      
    </div>
  )
}

export default Resume;