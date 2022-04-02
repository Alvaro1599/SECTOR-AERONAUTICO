import React from 'react';
import logo from '../assets/Nav/logo-sm.svg';
import hamburguer from '../assets/Nav/hamburger.svg';
function NavBar() {
    return (
        <nav className=' flex  justify-between py-[12.32px] px-[30px]'>
            <img src={logo} alt='' className=' ' />
            <img src={hamburguer} alt='' />
        </nav>
    );
}

export default NavBar;
