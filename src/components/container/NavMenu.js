import React from 'react';
import Menu from '../core/Menu';
import { Inputs } from '../../constants/data';

const NavMenu = () => {
    const menus = Inputs['menu'];
    const NavMenus = menus.map(({ className, name, link, submenu }, index) => (
        <Menu key={index} className={className} name={name} link={link} submenu={submenu}/>
    ));
    return NavMenus
}

export default NavMenu;     