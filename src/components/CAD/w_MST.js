import React from 'react';
import { ProjectConstainer } from './CADelements';

import styled from "styled-components";

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: 45px 70px 24px 230px 45px 340px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;

@media screen and (max-width: 1450px){
grid-template-columns: 450px 450px;
grid-template-rows: 45px 280px 70px 24px 290px 70px 270px;
}

@media screen and (max-width: 1200px){
grid-template-columns: 400px 400px;
grid-template-rows: 70px 250px 95px 24px 260px 70px 240px;
grid-gap: 30px;
}

@media screen and (max-width: 1080px){
grid-template-columns: 350px 350px;
grid-template-rows: 70px 260px 95px 24px 230px 90px 210px;
grid-gap: 30px;
}

@media screen and (max-width: 980px){
grid-template-columns: 300px 300px;
grid-template-rows: 90px 280px 115px 24px 200px 90px 180px;
grid-gap: 30px;
}

@media screen and (max-width: 850px){
grid-template-columns: 450px;
grid-template-rows: 115px 160px 280px 24px 295px 295px 140px 130px;
grid-gap: 30px;
}

@media screen and (max-width: 650px){
grid-template-columns: 350px;
grid-template-rows: 135px 210px 220px 24px 230px 230px 160px 130px;
grid-gap: 30px;
}

@media screen and (max-width: 520px){
grid-template-columns: 300px;
grid-template-rows: 160px 190px 250px 24px 200px 200px 210px 110px;
grid-gap: 30px;
}

@media screen and (max-width: 470px){
  grid-template-columns: 250px;
  grid-template-rows: 130px 160px 170px 55px 160px 160px 150px 100px;
  font-size: 16px;
}

@media screen and (max-width: 410px){
  grid-template-columns: 220px;
  grid-template-rows: 170px 140px 250px 55px 140px 140px 190px 85px;
}

`

const Text_1 = styled.div`
grid-column: 1 / 4;
grid-row: 1 / 2;

@media screen and (max-width: 1450px){
grid-column: 1 / 3;
grid-row: 1 / 2;
}

@media screen and (max-width: 850px){
grid-column: 1;
grid-row: 1;
}
`
const Text_2 = styled.div`
grid-column: 1 / 4;
grid-row: 2 / 3;

@media screen and (max-width: 1450px){
grid-column: 1 / 3;
grid-row: 3/4;
}

@media screen and (max-width: 850px){
grid-column: 1;
grid-row: 2;
}

@media screen and (max-width: 520px){
grid-row: 3;
}
`
const Text_3 = styled.div`
font-size: 24px;
grid-column: 1 / 4;
grid-row: 3/4;

@media screen and (max-width: 1450px){
  grid-column: 1 / 2;
grid-row: 4/5;
}

`

const Text_4 = styled.div`
grid-column: 1 /4;
grid-row: 5;

@media screen and (max-width: 1450px){
  grid-column: 1 / 3;
grid-row: 6;
}

@media screen and (max-width: 850px){
  grid-column: 1;
grid-row: 7;
}
`
const Img_1 = styled.img`
height: 230px;
grid-column: 1;
grid-row: 4 /5;
@media screen and (max-width: 1450px){
  grid-column: 1;
  grid-row: 5;
  width: 100%;
  height: auto;
}
`
const Img_2 = styled.img`
height: 230px;
grid-column: 2;
grid-row: 4 /5;
@media screen and (max-width: 1450px){
  grid-column: 2;
  grid-row: 5;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 850px){
  grid-column: 1;
  grid-row: 6;
}
`
const Img_3 = styled.img`
height: 230px;
grid-column: 3;
grid-row: 4 /5;
@media screen and (max-width: 1450px){
  grid-column: 1;
  grid-row: 2/3;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 1080px){
  width: 120%;
  padding: 0 150px 0;
}

@media screen and (max-width: 980px){
  width: 150%;
  padding: 0 90px 0;
}

@media screen and (max-width: 850px){
  width: 100%;
  padding: 0;
  grid-column: 1;
  grid-row: 3;
}

@media screen and (max-width: 520px){
  grid-row: 2;
}
`
const Img_4 = styled.img`
grid-column: 1/4;
width: 100%;
grid-row: 6;
@media screen and (max-width: 1450px){
  grid-column: 1/3;
  grid-row: 7;
  width: 100%;
  height: auto;
}

@media screen and (max-width: 850px){
  grid-column: 1;
  grid-row: 8;
}

@media screen and (max-width: 650px){
  height: 130px;
}

@media screen and (max-width: 520px){
  height: 110px;
}

@media screen and (max-width: 470px){
  height: 100%;
}
`
const Img_5 = styled.div`
margin: 40px 0px 0px;
width: 550px;
height: 350px;
@media screen and (max-width: 850px){
  width: 450px;
  height: 300px;
}

@media screen and (max-width: 650px){
  width: 350px;
  height: 250px;
}

@media screen and (max-width: 520px){
  width: 300px;
  height: 220px;
}

@media screen and (max-width: 470px){
  width: 250px;
  height: 180px;
}

@media screen and (max-width: 410px){
  width: 220px;
  height: 160px;
}

`

const MST = () => {

  return (
    <>
      <div id='MST' style={{ background: "#1E1D20", height: "min-content" }}>
        <ProjectConstainer>
          Music Sheet Turner
          <Details>
            <Text_1>
              This is an open design project for the Mechanical Synthesis class.
              We are challenged to design and build a purely mechanical system to
              help improve a small aspect of people's daily life.
            </Text_1>
            <Text_2>
              My partner and I interviewed a pianist. We learned that it's inconvenient
              for her to turn the music sheet pages when both of her hands are engaged
              in playing. We designed this music sheet turner so that she can use her
              idle left foot to turn the pages while playing the piano.
            </Text_2>
            <Text_3>
              CAD model vs. Prototype
            </Text_3>

            <Img_1 src='/images/CAD/MST_1.jpg' />
            <Img_2 src='/images/CAD/MST_3.jpg' />
            <Img_3 src='/images/CAD/MST_2.jpg' />


            <Text_4>
              The parts of the turner are connected by a bead chain. To drive the Music Sheet Turner,
              the users press their feet on the pedal, which triggers the linear motion of the bead chain,
              which then rotate the scroll to present the next page.
            </Text_4>

            <Img_4 src='/images/CAD/MST_4.jpg' />


          </Details>
          <Img_5>
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/qBVfzrCr0Uk"
              title="YouTube video player"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </Img_5>

        </ProjectConstainer>
      </div>
    </>
  );
};

export default MST;
