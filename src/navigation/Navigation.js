import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../src/assets/svglogo.svg';
import { Link } from 'react-router-dom';

import './Navbar.css'

const Navigation = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <Link to='/' className='logo'>
                    <img src={logo} alt='logo' />
                </Link>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/about' onClick={closeMenu}>About US</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' onClick={closeMenu}>gallery</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' onClick={closeMenu}>Contact US</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navigation;