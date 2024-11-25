import React, {useContext} from 'react'
import './LandingPage.css'
import HeroVideo from '../../assets/DentalHeroVideo.mp4' 
const LandingPage = () => {
    
      return (
        <div>
          <div className='HeroSection'>
            <div className='HeroText'>
            <h1 className='HeroH1'>Premier Dental Services of Westchester</h1>
            <p className='HeroParagraph'>We here at <span className='HeroNameSpan'>Premier Dental</span> focus solely on your smile. Helping all our patients to feel confident every time they show their beautiful smile to the world. Come meet our warm and friendly staff, prepared and equipped to make your smile the best it can be.</p>
            <button className='HeroCTA'>Book an Appointment</button>
            <p className='HeroParagraph SecondaryCTA'> Or Give Us a Call! 123-456-7899</p>
            </div>
            <video className='HeroImage' loop autoPlay muted src={HeroVideo}></video>
            </div>
        </div>
      );

}

export default LandingPage;