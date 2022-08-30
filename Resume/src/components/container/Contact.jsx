import React from 'react'
import { MdLocationOn, MdDateRange, MdEmail} from "react-icons/md";
import { FaMobile } from "react-icons/fa";
const Contact = () => {
   return (
    <div>
        <h2>Contact</h2>
        <div>
            <h3><MdLocationOn className='icon'/>Address</h3>
            <p>K6/36-B Mohan Garden Uttam Nagar New Delhi</p>
            <h3><MdDateRange className='icon'/>Date of birth</h3>
            <p>15 March 2002</p>
            <h3><FaMobile/>Phone</h3>
            <p>1122336674</p>
            <h3><MdEmail className='icon' />Email</h3>
            <p>sanikeshkumar14@gmail.com</p>
        </div>
    </div>
  )
}

export default Contact;