import React, { useState } from 'react';

const Menu = ({ className, name, link, submenu, index } ) => {
    let children = '';
    const subMenuCount = submenu.length;
    const [menuStatus, setMenustatus] = useState(true);

    const toggleSubMenu = () => {
      setMenustatus(!menuStatus);
    }
    
    if (Array.isArray(submenu) && subMenuCount > 0) {
        className = `has-children ${className}`;
        children = submenu.map(({ name, link, className }, index) => (
            <li key={index} className={className}><a href={link}>{name}</a></li>
        ));
    }
    return (
        <li className={className} key={index}>
            <a href={link} onClick={ toggleSubMenu}>
                {name}
                <span className={subMenuCount > 0 ? (menuStatus ? "arrow arrow-down": "arrow arrow-right"): "" }></span>
            </a>
            {(subMenuCount > 0  && menuStatus )&&
                <ul key={index}>
                    {children}
                </ul>
            }
        </li>
    )
}

export default Menu;