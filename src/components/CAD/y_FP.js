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
`

const Img_1 = styled.img`
width: 450px;
grid-column: 1;
grid-row: 1 /3;
`
const Img_2 = styled.img`
height: 395px;
grid-column: 2;
grid-row: 2;
`

const Text_1 = styled.div`
grid-column: 2;
grid-row: 1 / 2;
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
