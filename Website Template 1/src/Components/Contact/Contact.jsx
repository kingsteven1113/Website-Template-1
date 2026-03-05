import React, {useContext} from 'react'
import ContactImage from '../../assets/DentalContactHeroImage.jpg'
import './Contact.css'

const Contact = () => {
    
      return (
        <div>
          <div className='ContactHero'>
            <img src={ContactImage} alt="Contact" />
            <form method="POST" action='' className='ContactForm'>
              <h1>Contact Us</h1>
              <input type="text" name="name" placeholder='Name' required />
              <input type="email" name="email" placeholder='Email' required />
              <textarea name="message" placeholder='Message' required></textarea>
              <button type="submit">Send Message</button>
              </form>
          </div>
        </div>
      );

}

export default Contact;