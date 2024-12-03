import React, {useContext} from 'react'
import './Footer.css'

const Footer = () => {

  const CurrentYear = new Date().getFullYear();
    
      return (
        <div>
          <div className='Footer'>
                <div className='TopFooter'>
                  <div className='TopFooterSec1'>
                    <p className='FooterSec1Title'>Premier Dental</p>
                    <p className='FooterSec1Text'>Here to make your smile its best!</p>
                  </div>
                  <div className='TopFooterSec2'>
                    <h4>Quick Links</h4>
                    <a href="/about">About Us</a>
                    <a href="/services">Services</a>
                    <a href="/reviews">Reviews</a>
                    <a href="/contact">Contact Us</a>
                  </div>
                  <div className='TopFooterSec3'>
                  <h4>Hours of Operation</h4>
                    <p>Monday: 9:00AM - 7:00PM</p>
                    <p>Tuesday: 9:00AM - 7:00PM</p>
                    <p>Wednesday: 9:00AM - 7:00PM</p>
                    <p>Thursday: 9:00AM - 7:00PM</p>
                    <p>Friday: 9:00AM - 7:00PM</p>
                    <p>Saturday: 9:00AM - 3:00PM</p>
                    <p>Sunday: <strong>Closed</strong></p>
                  </div>
                </div>
                <div className='BottomFooter'>
                  <p>&copy; {CurrentYear} Premier Dental All rights Reserved.</p>
                </div>
              </div>
        </div>
      );

}

export default Footer;