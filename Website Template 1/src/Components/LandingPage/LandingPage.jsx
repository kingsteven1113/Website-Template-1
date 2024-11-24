import React, {useContext} from 'react'
import './LandingPage.css'
import DentalHeroImage from '../../assets/DentalHeroImage.jpg'

const LandingPage = () => {
    
      return (
        <div>
          <div className='HeroSection'>
            <div className='HeroText'>
            <h1 className='HeroH1'>Premier Dental Services of Westchester</h1>
            <p className='HeroParagraph'>We here at The Dental Office focus solely on your smile. Helping all our patients to feel confident every time they show their beautiful smile to the world. Come meet our warm and friendly staff, prepared and equipped to make your smile the best it can be.</p>
            <button className='HeroCTA'>Book an Appointment</button>
            </div>
            <div className='HeroImage'></div>
            </div>
        </div>
      );

}

export default LandingPage;