import React from 'react';
import { ProjectConstainer } from './CADelements';

import styled from "styled-components";

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: 300px 450px 300px;
grid-template-rows: 70px 335px 310px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;


@media screen and (max-width: 1450px){
grid-template-columns: 280px 380px 280px;
grid-template-rows: 70px 285px 250px;
grid-gap: 30px;
}

@media screen and (max-width: 1280px){
grid-template-columns: 250px 350px 250px;
grid-template-rows: 70px 260px 230px;
}

@media screen and (max-width: 1150px){
grid-template-columns: 230px 320px 230px;
grid-template-rows: 70px 240px 220px;
}

@media screen and (max-width: 1080px){
grid-template-columns: 200px 280px 200px;
grid-template-rows: 90px 210px 180px;
}

@media screen and (max-width: 980px){
grid-template-columns: 300px 300px;
grid-template-rows: 115px 225px 375px 230px;
}

@media screen and (max-width: 850px){
grid-template-columns: 250px 250px;
grid-template-rows: 115px 190px 305px 190px;
}

@media screen and (max-width: 730px){
grid-template-columns: 220px 220px;
grid-template-rows: 140px 165px 270px 160px;
}

@media screen and (max-width: 650px){
grid-template-columns: 350px;
grid-template-rows: 160px 735px 265px 265px 700px;
}

@media screen and (max-width: 520px){
grid-template-columns: 250px;
grid-template-rows: 230px 530px 190px 190px 500px;
}
@media screen and (max-width: 470px){
  grid-template-columns: 250px;
grid-template-rows: 150px 525px 190px 190px 500px;
  font-size: 16px;
}

@media screen and (max-width: 410px){
  grid-template-columns: 220px;
grid-template-rows: 200px 460px 165px 165px 430px;
}
`

const Text_1 = styled.div`
grid-column: 1 / 4;
grid-row: 1 / 2;

@media screen and (max-width: 980px){
  grid-column: 1 / 3;
}

@media screen and (max-width: 650px){
  grid-column: 1 / 2;
}
`
const Img_1 = styled.img`
width: 300px;
grid-column: 1;
grid-row: 2 /4;
@media screen and (max-width: 1450px){
  width: 100%;
}

@media screen and (max-width: 980px){
  grid-column: 1;
grid-row: 2/4;
}

@media screen and (max-width: 650px){
  grid-column: 1;
grid-row: 2;
}
`
const Img_2 = styled.img`
width: 450px;
grid-column: 2;
grid-row: 2 /3;

@media screen and (max-width: 1450px){
  width: 100%;
}

@media screen and (max-width: 980px){
grid-column: 2;
grid-row: 2 /3;
}

@media screen and (max-width: 650px){
  grid-column: 1;
grid-row: 3;
}
`
const Img_3 = styled.img`
width: 450px;
grid-column: 2;
grid-row: 3 /4;

@media screen and (max-width: 1450px){
  width: 100%;
}

@media screen and (max-width: 980px){
grid-column: 1;
grid-row: 4/5;
}

@media screen and (max-width: 650px){
  grid-column: 1;
grid-row: 4;
}
`
const Img_4 = styled.img`
width: 300px;
grid-column: 3/4;
grid-row: 2 /4;

@media screen and (max-width: 1450px){
  width: 100%;
}

@media screen and (max-width: 980px){
grid-column: 2;
grid-row: 3 /5;
}

@media screen and (max-width: 650px){
  grid-column: 1;
grid-row: 5;
}
`

const SD = () => {

  return (
    <>
      <div id='SD' style={{ background: "#131211", height: "min-content" }}>
        <ProjectConstainer>
          Sword Design
          <Details>
            <Text_1 className='text_1'>
              I was extremely fanscinated by this <a target={'blank'} href='https://twitter.com/BraveRobynArt/status/1444700575522820104'>decorative sword design</a> by Sarah Morris.
              <p></p>
              I CADed and printed the frame of the sword, reinforced it with steel core,
              and laser cutted acrylic pieces to mimic the look of stained glass.
            </Text_1>
            <Img_1 src='/images/CAD/sword_1.jpg' />
            <Img_2 src='/images/CAD/sword_2.jpg' />
            <Img_3 src='/images/CAD/sword_3.jpg' />
            <Img_4 src='/images/CAD/sword_4.jpg' />

          </Details>
        </ProjectConstainer>
      </div>
    </>
  );
};

export default SD;
