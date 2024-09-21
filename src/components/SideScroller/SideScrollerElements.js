import styled from 'styled-components'
import { HashLink as LinkR } from "react-router-hash-link";
import { Link as LinkS } from 'react-scroll'

export const SideContainer = styled.div`
height: 500px;
width: 12%;
display:grid;
justify-content:center;
align-items: center;
font-size:1rem;
position:fixed;
right:0;
top: 20px;
z-index:10;
text-align: center;
justify-items: center;
grid-template-rows: 1.5fr 1fr 1fr 1fr 1fr;
`;

export const Back = styled(LinkR)`
cursor: pointer;
width: 48px; 
height: 48px;
border-radius: 24px;
background: rgb(255, 196, 148);
color: black;
text-decoration: none;
text-align: center;
font-size: 16px;
font-weight: 900;
`;

export const Bubble = styled(LinkS)`
cursor: pointer;
width: 24px; 
height: 24px;
border-radius: 24px;
background: rgb(255, 196, 148);
transition: 70ms;

&.active {
  width: 36px; 
  height: 36px;
}

&:hover{
  width: 36px; 
  height: 36px;
}
`;