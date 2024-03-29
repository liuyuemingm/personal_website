import React from 'react';
import { ProjectConstainer } from './CADelements';
import styled from 'styled-components';

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: 400px auto auto;
grid-template-rows: 70px 90px 105px 225px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;

@media screen and (max-width: 1300px){
grid-template-columns: 300px auto auto;
grid-template-rows: 90px 110px 0px 180px;
}

@media screen and (max-width: 1200px){
grid-template-columns: 400px 400px;
grid-template-rows: 140px 165px 225px 300px;
}

@media screen and (max-width: 1080px){
grid-template-columns: 350px 350px;
grid-template-rows: 140px 125px 20px 200px 200px;
}

@media screen and (max-width: 960px){
grid-template-columns: 300px 300px;
grid-template-rows: 180px 40px 150px 40px 170px;
}

@media screen and (max-width: 850px){
grid-template-columns: 450px;
grid-template-rows: 390px 110px 340px 340px 140px 250px;
grid-gap: 30px;
}

@media screen and (max-width: 650px){
grid-template-columns: 350px;
grid-template-rows: 300px 135px 260px 260px 180px 200px;
}

@media screen and (max-width: 520px){
grid-template-columns: 300px;
grid-template-rows: 260px 180px 225px 225px 230px 170px;
}

@media screen and (max-width: 470px){
  grid-template-columns: 250px;
  grid-template-rows: 215px 150px 185px 185px 170px 140px;
  font-size: 16px;
}

@media screen and (max-width: 410px){
  grid-template-columns: 220px;
  grid-template-rows: 190px 170px 165px 165px 210px 120px;
}
`
const Img_1 = styled.img`
width: 400px;
grid-column: 1;
grid-row: 1 / 5;

@media screen and (max-width: 1300px){
width: 100%;
}

@media screen and (max-width: 1200px){
grid-row: 1 / 3;
}

@media screen and (max-width: 850px){
grid-row: 1;
}
`
const Img_2 = styled.img`
width: 400px;
grid-column: 1;
grid-row: 4 / 5;

@media screen and (max-width: 1300px){
width: 100%;
}

@media screen and (max-width: 1200px){
grid-row: 3/4;
}

@media screen and (max-width: 1080px){
grid-row: 5;
}

@media screen and (max-width: 850px){
grid-row: 6;
}
`
const Img_3 = styled.img`
width: 100%;
grid-column: 2;
grid-row: 3;

@media screen and (max-width: 1200px){
grid-column: 2;
grid-row: 3;
}

@media screen and (max-width: 1080px){
grid-row: 3;
grid-column: 1;
}

@media screen and (max-width: 850px){
grid-row: 3;
}
`
const Img_4 = styled.img`
width: 100%;
grid-column: 3;
grid-row: 3;

@media screen and (max-width: 1200px){
grid-column: 1;
grid-row: 4;
}

@media screen and (max-width: 1080px){
grid-column: 2;
grid-row: 4;
}

@media screen and (max-width: 850px){
grid-row: 4;
grid-column: 1;
}
`
const Text_1 = styled.div`
grid-column: 2/4;
grid-row: 1;

@media screen and (max-width: 1200px){
grid-column: 2/3;
grid-row: 1;
}

@media screen and (max-width: 850px){
grid-row: 2;
grid-column: 1;
}
`
const Text_2 = styled.div`
grid-column: 2/4;
grid-row: 2;

@media screen and (max-width: 1200px){
grid-column: 2/3;
grid-row: 2;
}

@media screen and (max-width: 850px){
grid-row: 5;
grid-column: 1;
}
`
const RM = () => {

  return (
    <>
      <div id='RM' style={{ background: "#131211", height: "min-content" }}>
        <ProjectConstainer>
          Reuleaux Machine
          <Details>
            <Img_1 src='/images/CAD/RM_real.jpg' className='img_1' />
            <Img_2 src='/images/CAD/RM.gif' className='img_2' />
            <Text_1 className='text_1'>
              The goal of this project was to create a 3D model of a conceptual
              design in the Reuleaux collection that captured the kinematic motion
              of the original machine. I chose to model and animate Machine N12.
            </Text_1>
            <Text_2>
              This device consists of a cam actuated lever, a crank with a small
              two-tooth cam wheel, and a larger 42 tooth gear wheel. When the crank
              revolves one cycle, one tooth of the cam wheel raises the lever while
              the other tooth advances the gear by one step.
            </Text_2>
            <Img_3 src='/images/CAD/RM_1.jpg' className='img_3' />
            <Img_4 src='/images/CAD/RM_2.jpg' className='img_4' />
          </Details>
        </ProjectConstainer>
      </div>
    </>
  );
};

export default RM;
