import React, {useContext} from 'react'
import './Header.css'

const Header = () => {
    
      return (
        <div className='Header'>
            <a href='/' className='Logo'>Dental Office</a>
          <ul className='HeaderList'>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/about">About Us</a>
                <div className='AccentAnimation'></div>
            </li>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/services">Services</a>
            </li>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/reviews">Reviews</a>
            </li>
          </ul>
                <a className='MenuItemB' href="/contact">Contact</a>
        </div>
      );

}

export default Header;