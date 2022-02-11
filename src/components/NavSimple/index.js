import React from 'react';
import { Nav, NavbarContainer, NavBack, NavLogo, } from './NavbarElements';
import { animateScroll as Scroll } from 'react-scroll';
const NavSimple = () => {

  const toggleHome = () => {
    Scroll.scrollToTop()
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavBack to="/" onClick={toggleHome}>  《 Back </NavBack>
          <NavLogo>CAD Projects</NavLogo>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavSimple;
