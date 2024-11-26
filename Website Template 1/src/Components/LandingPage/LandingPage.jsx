import React, {useContext} from 'react'
import './LandingPage.css'
import HeroVideo from '../../assets/DentalHeroVideo.mp4'
import TeamMember1 from '../../assets/TeamMember1.jpg'
import TeamMember2 from '../../assets/TeamMember2.jpg'
const LandingPage = () => {

    
      return (
        <div>
          <div className='HeroSection'>
            <div className='HeroText'>
            <h1 className='HeroH1'>Premier Dental Services of Westchester</h1>
            <p className='HeroParagraph'>We here at <span className='HeroNameSpan'>Premier Dental</span> focus solely on your smile. Helping all our patients to feel confident every time they show their beautiful smile to the world. Come meet our warm and friendly staff, prepared and equipped to make your smile the best it can be.</p>
            <a className='HeroCTA' href="/contact">Book an Appointment</a>
            <p className='HeroParagraph SecondaryCTA'> Or Give Us a Call! 123-456-7899</p>
            </div>
            <video className='HeroImage' loop autoPlay muted src={HeroVideo}></video>
            </div>

            <div className='MeetTheTeam'>
              <div className='TeamText'>
                <h2 className='TeamH2'>Meet Our Team</h2>
                <p className='TeamParagraph'>At our dental office, we pride ourselves on having a compassionate and highly skilled team dedicated to providing exceptional care for each of our patients. From our friendly front desk staff to our experienced dentists and hygienists, every member of our team is committed to creating a welcoming and comfortable environment. We believe in building lasting relationships with our patients and take the time to listen to their concerns, answer questions, and tailor treatments to meet individual needs. Whether it's a routine check-up or more complex dental work, our team is here to ensure a positive experience and help you achieve optimal oral health. Your smile is our priority, and we are here to support you every step of the way! </p>
                <a href='/contact' className='TeamCTA'>BOOK AN APPOINTMENT</a>
              </div>
              <div className='TeamMembers'>
                <div className='TeamMember'>
                  <h4>Jared</h4>
                  <img src={TeamMember2} alt="" />
                  <h5>Dentist</h5>
                </div>
                <div className='TeamMember'>
                <h4>Connie</h4>
                  <img src={TeamMember1} alt="" />
                  <h5>Dentist</h5>
                </div>
                <div className='TeamMember'>
                <h4>Prisilla</h4>
                  <img src={TeamMember1} alt="" />
                  <h5>Dental Assistant</h5>
                </div>
                <div className='TeamMember'>
                <h4>Michael</h4>
                  <img src={TeamMember2} alt="" />
                  <h5>Dental Assistant</h5>
                </div>
              </div>
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
      );

}

export default LandingPage;