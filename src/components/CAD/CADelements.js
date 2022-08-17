import styled from "styled-components";

export const ProjectConstainer = styled.div`
padding: 75px;
font-size: 40px;

@media screen and (max-width: 768px) {
  
}

@media screen and (max-width: 500px){
  
}
`

export const ImgWrap = styled.div`

@media screen and (max-width: 768px){
  padding: 0px;
  height: 350px;
}
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
font-size: 24px;
line-height: 1.5;
max-width: 100%;

@media screen and (max-width: 768px){
  padding: 90px 50px 30px;
}
@media screen and (max-width: 500px){
  padding: 100px 50px 30px;
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
width: 450px;

@media screen and (max-width: 1080px){
  width: 50vw;
}

@media screen and (max-width: 768px){
  width: 400px;
}


`