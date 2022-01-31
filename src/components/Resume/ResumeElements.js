import styled from "styled-components";

export const ResumeConstainer = styled.div`
background: #131211;
padding: 50px 0 20px;
text-align: center;
min-height: 500px;
max-height: max-content;
`

export const PDFwrap = styled.div`
grid-area: PDFwrap;
/* background: blue; */
padding: 30px 20px 20px;
max-height: min-content;
text-align: center;
max-width: 100vw;

@media screen and (max-width: 380px){
  padding: 0 0 10px;
}
`

export const PDFresume = styled.iframe`
height: 432px;
width: 308px;

/* @media screen and (max-width: 1080px){
  width: 36vw;
}

@media screen and (max-width: 768px){
  width: 300px;
}

@media screen and (max-width: 550px){
  width: 200px;
}

@media screen and (max-width: 350px){
  width: 60vw;
} */
`
export const BtnContainer = styled.div`
height: 50px;
margin: 20px;
`

export const Button = styled.a`
height: 50px;
width: 100px;
padding: 10px;
border-style: solid;
border-radius: 10px;
border-width: 2px;
text-decoration: none;
opacity: 80%;
font-size: 16px;
font-weight: normal;

&:hover {
  cursor: pointer;
  opacity: 100%;
}
`


