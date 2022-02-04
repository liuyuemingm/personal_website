import React from 'react';
import { FaBars } from 'react-icons/fa'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem } from './NavbarElements';
import { animateScroll as Scroll } from 'react-scroll';
const Navbar = ({ toggle }) => {

  const toggleHome = () => {
    Scroll.scrollToTop()
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>U'Ming</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to='about'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='resume'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Resume</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to='portfolio'
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}>Porfolio</NavLinks>
            </NavItem>
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
