import styled from 'styled-components'
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'
import { HashLink as LinkH } from 'react-router-hash-link';

export const Nav = styled.nav`
background: #000;
height: 80px;
/* margin-top:80px; */
display:flex;
justify-content:center;
align-items: center;
font-size:1rem;
position:sticky;
top:0;
z-index:10;

@media screen and (max-width:960px){
  transition: 0.8s all ease;
}
`;

export const NavbarContainer = styled.div`
display:flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width:100%;
padding:0 24px;
max-width:1100px;
`;

export const NavLogo = styled(LinkR)`
justify-self: flex-start;
cursor: pointer;
font-size: 2rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration: none;
/* font-family: ; */
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 500px) {
display: block;
position: absolute;
top: 0;
right: 0;
transform: translate(-100%, 60%);
font-size: 1.8rem;
cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: 0;

@media screen and (max-width : 500px){
  display: none;
}
`;

export const NavLinks = styled(LinkS)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid ;
}
`;

export const NavLinksH = styled(LinkH)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
  border-bottom: 3px solid ;
}
`;

export const NavItem = styled.li`
height: 80px;
`;