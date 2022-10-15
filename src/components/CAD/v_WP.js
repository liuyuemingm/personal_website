import React from 'react';
import { ProjectConstainer } from './CADelements';

import styled from "styled-components";

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: 450px 700px;
grid-template-rows: 90px 70px 70px 370px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;

@media screen and (max-width: 1450px){
  grid-template-columns: 450px 550px;
  grid-template-rows: 140px 90px 90px 370px;
  grid-gap: 30px;
}

@media screen and (max-width: 1300px){
  grid-template-columns: 450px 500px;
  grid-template-rows: 140px 90px 90px 320px;
}

@media screen and (max-width: 1230px){
  grid-template-columns: 400px 400px;
  grid-template-rows: 160px 110px 90px 190px;
}

@media screen and (max-width: 1080px){
  grid-template-columns: 300px 350px;
  grid-template-rows: 180px 130px 110px 280px;
}

@media screen and (max-width: 890px){
  grid-template-columns: 500px;
  grid-template-rows: 800px 135px 70px 280px 90px;
}

@media screen and (max-width: 690px){
  grid-template-columns: 400px;
  grid-template-rows: 640px 160px 90px 230px 110px;
}

@media screen and (max-width: 590px){
  grid-template-columns: 300px;
  grid-template-rows: 480px 250px 140px 170px 160px;
}

@media screen and (max-width: 470px){
  grid-template-columns: 250px;
  grid-template-rows: 400px 270px 140px 140px 210px;
}
`

const Details1 = styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
grid-gap: 40px;

@media screen and (max-width: 1230px){
  grid-template-columns: 400px 400px;
  grid-template-rows: 30px 240px 30px 190px;
  grid-gap: 30px;
}

@media screen and (max-width: 1080px){
  grid-template-columns: 300px 300px;
  grid-template-rows: 230px 230px;
  grid-gap: 30px;
}

@media screen and (max-width: 890px){
  grid-template-columns: 500px;
  grid-template-rows: 360px 360px 360px;
  grid-gap: 30px;
}

@media screen and (max-width: 690px){
  grid-template-columns: 400px;
  grid-template-rows: 300px 300px 300px;
  grid-gap: 30px;
}

@media screen and (max-width: 590px){
  grid-template-columns: 300px;
  grid-template-rows: 230px 230px 230px;
  grid-gap: 30px;
}

@media screen and (max-width: 470px){
  grid-template-columns: 250px;
  grid-template-rows: 200px 200px 200px;
  grid-gap: 30px;
}
`

const Img_1 = styled.img`
width: 450px;
grid-column: 1;
grid-row: 1 / 5;

@media screen and (max-width: 1230px){
  width: 400px;
}

@media screen and (max-width: 1080px){
  width: 300px;
}

@media screen and (max-width: 890px){
grid-column: 1;
grid-row: 1;
width: 100%;
}
`
const Img_2 = styled.img`
height: 370px;
grid-column: 2;
grid-row: 4 / 5;

@media screen and (max-width: 1450px){
  max-height: 310px;
  max-width: 550px;
}

@media screen and (max-width: 1300px){
  max-height: 300px;
  max-width: 500px;
}

@media screen and (max-width: 1230px){
  width: 400px;
  height: auto;
}

@media screen and (max-width: 1080px){
  grid-column: 1/3;
  width: 600px;
  height: auto;
  padding: 0 80px 0;
}

@media screen and (max-width: 890px){
grid-column: 1;
grid-row: 4;
width: 100%;
padding:0;
}
`
const Img_3 = styled.img`
width: 100%;
grid-column: 1;
grid-row: 1;

@media screen and (max-width: 1230px){
  grid-column: 1;
grid-row: 1/3;
}

@media screen and (max-width: 1080px){
  grid-column: 1;
grid-row: 1;
width: 300px;
}

@media screen and (max-width: 980px){
  grid-column: 1;
grid-row: 1;
width: 100%;
}
`
const Img_4 = styled.img`
width: 100%;
grid-column: 2;
grid-row: 1;

@media screen and (max-width: 1230px){
  grid-column: 2;
grid-row: 2/4;
}

@media screen and (max-width: 1080px){
  grid-column: 2;
grid-row: 1;
width: 300px;
}

@media screen and (max-width: 890px){
  grid-column: 1;
grid-row: 2;
width: 100%;
}
`
const Img_5 = styled.img`
width: 100%;
grid-column: 3;
grid-row: 1;

@media screen and (max-width: 1230px){
  grid-column: 1;
grid-row: 3/5;
}

@media screen and (max-width: 1080px){
  grid-column: 1;
grid-row: 2;
width: 300px;
margin:0 160px 0;
}

@media screen and (max-width: 890px){
  grid-column: 1;
grid-row: 3;
width: 100%;
margin: 0;
}
`
const Text_1 = styled.div`
grid-column: 2;
grid-row: 1 / 2;

@media screen and (max-width: 890px){
grid-column: 1;
grid-row: 2;
}
`
const Text_2 = styled.div`
grid-column: 2;
grid-row: 2;

@media screen and (max-width: 890px){
grid-column: 1;
grid-row: 5;
}
`
const Text_3 = styled.div`
grid-column: 2;
grid-row: 3;

@media screen and (max-width: 890px){
grid-column: 1;
grid-row: 3;
}
`

const WP = () => {

  return (
    <>
      <div id='WP' style={{ background: "#131211", height: "min-content" }}>
        <ProjectConstainer>
          Water Pump
          <Details>
            <Img_1 src='/images/CAD/pump_real.jpg' className='img_1' />
            <Text_1 className='text_1'>
              The goal of this project was to develop a prototype of an
              efficient water pump that could pump water at least 1 meter tall
              and at a rate of at least 1 liter/min. The constraints of this
              project included a list of materials/components we could choose
              from and a budget limit.
            </Text_1>
            <Text_2 className='text_2'>
              Our pump was a dual piston pump actuated by a slider crank.
              It is comprised of three main assemblies: the two piston cylinder
              assemblies, the crank shaft, and supporting hardware.
            </Text_2>
            <Text_3 className='text_3'>
              My role in this project was to manage our team budget,
              order materials, help with designing the model, and machine some
              of the components.
            </Text_3>

            <Img_2 src='/images/CAD/pump.gif' className='img_2' />
          </Details>
          <Details1>
            <Img_3 src='/images/CAD/pump_perspective_1.jpg' className='img_3' />
            <Img_4 src='/images/CAD/pump_perspective_2.jpg' className='img_4' />
            <Img_5 src='/images/CAD/pump_perspective_3.jpg' className='img_5' />
          </Details1>
        </ProjectConstainer>
      </div>
    </>
  );
};

export default WP;
