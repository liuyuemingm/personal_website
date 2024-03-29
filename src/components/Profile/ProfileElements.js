import styled from "styled-components";

export const ProfileConstainer = styled.div`
background: #131211;
padding: 2% 8%;
min-height: calc(100vh - 80px);
max-height: max-content;
display: grid;
grid-template-areas: "imgwrap textwrap";
@media screen and (max-width: 768px) {
  grid-template-areas: "textwrap" "imgwrap";
}

@media screen and (max-width: 500px){
  padding: 0;
}
`

export const ImgWrap = styled.div`
grid-area: imgwrap;
/* background: blue; */
padding: 30px 20px 20px;
max-height: min-content;
text-align: center;
max-width: 100vw;

@media screen and (max-width: 380px){
  padding: 0 0 10px;
}
`

export const TextWrap = styled.div`
grid-area: textwrap;
align-items: center;
justify-content: center;
/* background: yellow; */
padding: 30px 20px 20px;
max-height: max-content;
font-weight: 900;
font-size: 36px;
line-height: 1.5;
max-width: 100%;

@media screen and (max-width: 768px){
  padding: 30px 50px 30px;
}
@media screen and (max-width: 500px){
  padding: 30px 20px 30px;
  font-size: 32px;
}
`

export const InnerTextWrap = styled.div`
align-items: center;
justify-content: center;
/* background: yellow; */
padding: 20px 36px 0px;

`

export const Img = styled.img`
width: 375px;

@media screen and (max-width: 1080px){
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
}
`

export const BtnContainer = styled.div`
display: flex;
font-size: 18px;
font-weight: normal;
margin: 20px 0 0;

@media screen and (max-width: 500px){
font-size: 12px;
}
`

export const Button = styled.a`
height: 36px;
width: 100px;
margin: 0 20px 0 0;
padding: 8px 0 0;
text-align: center;
justify-content: center;
border-style: solid;
border-radius: 10px;
border-width: 2px;
text-decoration: none;
opacity: 80%;
transition: 0.3s;

&:hover {
  cursor: pointer;
  opacity: 100%;
  background: rgba(244, 164, 96, 0.15);
  transition: 0.3s;
}

@media screen and (max-width: 500px){
  height: 24px;
width: 64px;
margin: 0 10px 0 0;
border-width: 1px;
}
`


