import React from 'react';
import cvPic from '../../../src/cv.png'
import { Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink} from './NavbarElements'

const Navbar = () => {
    return (
      <>
        <Nav>
          <NavLink to='/'>
            <img src={cvPic} style={{"height" : "80px", "width" : "auto"}} alt="Logo"/>
          </NavLink>
          <Bars />
          <NavMenu>
            <NavLink to='/about' activeStyle>
              About
            </NavLink>
            <NavLink to='/services' activeStyle>
              Services
            </NavLink>
            <NavLink to='/contact-us' activeStyle>
              Contact Us
            </NavLink>
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };

export default Navbar;