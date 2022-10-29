import React from 'react';
import { NavLink,Link } from 'react-router-dom';
import { ReactComponent as homePic } from '../../../src/home.png'
import './header.css'

const Header = () => {
    return(
            <nav>
                <div>
                    <NavLink to='/'>
                        <h1>logo</h1>
                    </NavLink>
                    <Bars />
                    <NavMenu>
                        <NavLink to='/about'>
                            About
                        </NavLink>
                        <NavLink to='/contact-us'>
                            Contact Us
                        </NavLink>
                        <NavLink to='/sign-up'>
                            Sign Up
                        </NavLink>
                    </NavMenu>
                </div>
            </nav>
    )
}

export default Header;