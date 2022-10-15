import styled from "styled-components";

export const AboutConstainer = styled.div`
background: #1E1D20;
padding: 2% 4%;
min-height: calc(100vh - 80px);
max-height: max-content;
display: grid;
grid-template-areas: "about about about" " meche cs art";
@media screen and (max-width: 768px) {
  grid-template-areas: "about about" " meche cs " " art art";
}
@media screen and (max-width: 350px) {
  grid-template-areas: "about" "meche" "cs" "art";
}
`

export const AboutMeContainer = styled.div`
grid-area: about;
/* background: red; */
padding: 20px 80px;
text-align: center;

@media screen and (max-width: 550px){
  padding: 20px 15px;
}
`
export const CompSciContainer = styled.div`
grid-area: cs;
/* background: yellow; */
padding: 20px;
align-items: center;
justify-items: center;
left: auto;
right: auto;
text-align: center;

`

export const MechEContainer = styled.div`
grid-area: meche;
/* background: blue; */
padding: 20px;
text-align: center;

`

export const ArtContainer = styled.div`
grid-area: art;
/* background: green; */
padding: 20px;
`
export const AboutMe = styled.div`
text-align: left;
padding: 20px 20px 0;
line-height: 1.75;

`

export const Skills = styled.div`
border: solid;
border-width: 2px;
border-radius: 10px;
min-height: 300px;
max-width: 250px;
width: 80%;
margin: auto;

@media screen and (max-width: 600px){
  width: 100%;
}

`

export const SkillType = styled.div`
width: 100%;
text-align: center;
margin: 20px 0 10px;
font-size: 22px;
height: 30px;
line-height: 30px;
`

export const SkillListItems = styled.ul`
margin: 15px 0 20px 30px;
min-height: 300px;
height: fit-content;
text-align: left;
line-height: 1.75;
`
