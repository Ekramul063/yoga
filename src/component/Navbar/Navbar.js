import React from 'react';
import logo from '../../logo.png'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='bg-blue-400'>
            <nav className='flex items-center nav_content '>
                <img className='h-[80px] w-[80px] px-2' src={logo} alt="logo" />
            </nav>
        </div>
    );
};

export default Navbar;