import React, {useContext} from 'react'
import './Header.css'
import { IoIosMenu, IoIosClose } from "react-icons/io";

const Header = () => {

  const OpenMenu = () => {
    const ToggleMenu = document.getElementById("MobileList");
    const OpenNav = document.getElementById("Burger")
    const CloseButton = document.getElementById("CloseButton")
    if (ToggleMenu.classList.contains("closed")) {
      ToggleMenu.classList.remove("closed");
      ToggleMenu.classList.add("open");
      OpenNav.classList.add("closed");
      OpenNav.classList.remove("open");
      CloseButton.classList.add("open");
      CloseButton.classList.remove("closed");

      
      
      
    }
    else {
      ToggleMenu.classList.add("closed");
      ToggleMenu.classList.remove("open");
      OpenNav.classList.add("open");
      CloseButton.classList.add("closed");
      CloseButton.classList.remove("open");
    }
  }
    
      return (
        <>
        <div className='Header'>
            <a href='/' className='Logo'>Premier Dental</a>
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
            <a className='MenuItemB' href="/contact">Book an Appointment</a>
            <IoIosMenu className="Burger" id='Burger' onClick={OpenMenu} />
            <IoIosClose id='CloseButton' className='CloseIcon closed' onClick={OpenMenu}></IoIosClose>
            
            </div>     
        </div>
        <div className='MobileList closed' id='MobileList'>
        <ul  className='HeaderListMobile'>
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