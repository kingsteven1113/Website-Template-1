import React, {useContext} from 'react'
import './Header.css'
import { IoIosMenu } from "react-icons/io";

const Header = () => {
    
      return (
        <>
        <div className='Header'>
            <a href='/' className='Logo'>Dental Office</a>
          <ul className='HeaderList'>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/about">About Us
                <div className='AccentAnimation'></div>
                </a>
                
            </li>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/services">Services
                <div className='AccentAnimation'></div>
                </a>
            </li>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/reviews">Reviews
                <div className='AccentAnimation'></div>
                </a>
            </li>
          </ul>
            <div className='MobileContact'>
            <a className='MenuItemB' href="/contact">Contact</a>
            <IoIosMenu className="Burger" />
            </div>     
        </div>
        <div>
        <ul className='HeaderListMobile'>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/about">About Us</a>
                <div className='AccentAnimation'></div>
            </li>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/services">Services</a>
                <div className='AccentAnimation'></div>
            </li>
            <li className='ListItemA'>
                <a className='MenuItemA' href="/reviews">Reviews</a>
                <div className='AccentAnimation'></div>
            </li>
          </ul>
        </div>
        </>
      );

}

export default Header;