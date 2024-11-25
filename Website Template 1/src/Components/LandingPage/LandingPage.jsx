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

            <div className='MeetTheTeam'>
              <h2 className='TeamH2'>Meet Our Team</h2>
              <div className='TeamMember'>
                Name
                <img src="" alt="" />
                Team Member
              </div>
              <div className='TeamMember'>
                Name
                <img src="" alt="" />
                Team Member
              </div>
              <div className='TeamMember'>
                Name
                <img src="" alt="" />
                Team Member
              </div>
              <div className='TeamMember'>
                Name
                <img src="" alt="" />
                Team Member
              </div>
              <div className='WhoWeAre'>
                <img src="" alt="" />
                <h2>Who We Are</h2>
                <p>Something about what makes Premier Dental Different from the other dental offices you see in the area.</p>
                <button>Reviews</button>
              </div>
              <div className='ContactForm'>
                  <form action="">
                    <h3>Name</h3>
                    <input type="text" />
                    <h3>Reason For Your Visit</h3>
                    <input type="text" />
                    <h3>Email</h3>
                    <input type="email" name="" id="" />
                    <h3>Phone Number</h3>
                    <input type="tel" name="" id="" />
                    <h3>Last Dental Visit</h3>
                    <input type="date" name="" id="" />
                  </form>
              </div>
            </div>
        </div>
      );

}

export default LandingPage;