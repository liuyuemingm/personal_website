import React from 'react';
import { ProjectConstainer } from './CADelements';

import styled from "styled-components";

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: 450px auto;
grid-template-rows: 70px 395px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;

@media screen and (max-width: 1290px){
  grid-template-columns: 400px 400px;
grid-template-rows: 125px 290px;
grid-gap:30px;
}

@media screen and (max-width: 1080px){
  grid-template-columns: 350px 350px;
grid-template-rows: 160px 260px;
}
@media screen and (max-width: 950px){
  grid-template-columns: 300px 300px;
grid-template-rows: 180px 220px;
}
@media screen and (max-width: 850px){
  grid-template-columns: 450px;
grid-template-rows: 505px 110px 330px;
}

@media screen and (max-width: 650px){
  grid-template-columns: 350px;
grid-template-rows: 390px 160px 260px;
}

@media screen and (max-width: 520px){
  grid-template-columns: 300px;
grid-template-rows: 340px 180px 220px;
}

@media screen and (max-width: 470px){
  grid-template-columns: 250px;
grid-template-rows: 280px 130px 190px;
  font-size: 16px;
}

@media screen and (max-width: 410px){
  grid-template-columns: 220px;
grid-template-rows: 250px 170px 160px;
}
`

const Img_1 = styled.img`
width: 450px;
grid-column: 1;
grid-row: 1 /3;
@media screen and (max-width: 1290px){
width: 100%;
}

@media screen and (max-width: 850px){
  grid-row: 1;
}
`
const Img_2 = styled.img`
height: 395px;
grid-column: 2;
grid-row: 2;

@media screen and (max-width: 1290px){
width: 100%;
height: auto;
}

@media screen and (max-width: 850px){
  grid-row: 3;
  grid-column: 1;
}
`

const Text_1 = styled.div`
grid-column: 2;
grid-row: 1 / 2;

@media screen and (max-width: 850px){
  grid-row: 2;
  grid-column: 1;
}
`

const FP = () => {

  return (
    <>
      <div id='FP' style={{ background: "#1E1D20", height: "min-content" }}>
        <ProjectConstainer>
          Fruit Peeler
          <Details>
            <Img_1 src='/images/CAD/peeler.jpg' className='img_1' />
            <Text_1 className='text_1'>
              This was my first Fusion 360 model. For this project we were
              modeling a kitchen object of our choices. I challenged myself by choosing
              this fruit peeler that requires features that I was less familiar with.
            </Text_1>
            <Img_2 src='/images/CAD/peeler.gif' className='img_2' />
          </Details>
        </ProjectConstainer>
      </div>
    </>
  );
};

export default FP;
