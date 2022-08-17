import styled from "styled-components";
//import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";

export const PortfolioContainer = styled.div`
background: #131211;
padding: 2% 4%;
min-height: calc(100vh - 80px);
max-height: max-content;
text-align: center;
`

export const ProjectsGrid = styled.div`
display: grid;
max-width: 1200px;
margin: auto;
width: 90vw;
height: max-content;
grid-template-columns: 1fr 1fr 1fr 1fr;

@media screen and (max-width: 960px){
  grid-template-columns: auto auto auto;
}
@media screen and (max-width: 650px){
  grid-template-columns: auto auto;
}
@media screen and (max-width: 420px){
  grid-template-columns: 1fr;
}
`

export const ProjectDetails = styled.div`
width: fill-available;
height: fill-available;
text-align: center;
line-height: 1.25rem;
display: flex;
align-items: center;
padding: 5px 5px 15px;
justify-content: center;
align-items: center;
background: black;
`

export const ProjectName = styled.div`
font-family: ${props => props.font};
color: ${props => props.color};
font-size: 18px;
padding: 10px 5px 10px;
`

export const ProjectDescription = styled.div`
font-family: ${props => props.font};
color: ${props => props.color};
/* font-size: 14px; */
`

export const ProjectImg = styled.img`
width: fill-available;
transform: translate(0,-100%);
z-index: -1;
`

export const ProjectContainer = styled.div`
height: 240px;
width: 240px;
padding: 0px;
margin: 10px auto 10px;
border: solid;
border-width: 5px;
color: ${props => props.color};
background-image: ${props => props.img};
transition: 0.3s;
cursor: default;
text-decoration: none;

${ProjectImg} {
opacity: 100%;
transition: 0.3s;
}

&:hover ${ProjectImg} {
opacity: 15%;
transition: 0.3s;
cursor: ${props => (props.hasLink ? "pointer" : "default")};
}

@media screen and (max-width: 1250px){
  height: 200px;
  width: 200px;
}
@media screen and (max-width: 1050px){
  height: 180px;
  width: 180px;
}
@media screen and (max-width: 960px){
  height: 200px;
  width: 200px;
}
@media screen and (max-width: 960px){
  height: 180px;
  width: 180px;
}
@media screen and (max-width: 730px){
  height: 160px;
  width: 160px;
}
@media screen and (max-width: 650px){
  height: 180px;
  width: 180px;
}
@media screen and (max-width: 490px){
  height: 150px;
  width: 150px;
}
@media screen and (max-width: 420px){
  height: 180px;
  width: 180px;
}
`

export const InternalLink = styled(Link)`
text-decoration: none;
`
export const ExternalLink = styled.a`
text-decoration: none;
`