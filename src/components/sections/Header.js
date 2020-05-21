import React, { useState } from 'react';

import 'font-awesome/css/font-awesome.min.css';

import AppLogo from '../core/AppLogo';
import MenuIcon from '../../assets/img/menu.png';
import ContactIcon from '../../assets/img/contact.png';
import NavIcon from '../container/NavIcon';
import NavMenu from '../container/NavMenu';


const Header = () => {
  const [menuStatus, setMenustatus] = useState(true);
  const toggleMenu = () => {
    setMenustatus(!menuStatus);
  }
  return (
    <header>
      <nav>
        <ul>
          <li className="direct-menu logo">
            <NavIcon onPress={toggleMenu} className="menu" image={MenuIcon} altText="Menu" />
            <AppLogo />
            <NavIcon className="contact" image={ContactIcon} altText="Contact Us" />
          </li>
          {menuStatus && <NavMenu />}
          <li className="direct-menu contact__us"><a href="/#"><span>Get In Touch</span></a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;