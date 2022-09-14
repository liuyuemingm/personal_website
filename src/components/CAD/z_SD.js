import React from 'react';
import { ProjectConstainer } from './CADelements';

import styled from "styled-components";

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: 300px 450px 300px;
grid-template-rows: 70px 335px 230px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;
`

const Text_1 = styled.div`
grid-column: 1 / 4;
grid-row: 1 / 2;
`
const Img_1 = styled.img`
width: 300px;
grid-column: 1;
grid-row: 2 /4;
`
const Img_2 = styled.img`
width: 450px;
grid-column: 2;
grid-row: 2 /3;
`
const Img_3 = styled.img`
width: 450px;
grid-column: 2;
grid-row: 3 /4;
`
const Img_4 = styled.img`
width: 300px;
grid-column: 3/4;
grid-row: 2 /4;
`

const SD = () => {

  return (
    <>
      <div id='SD' style={{ background: "#131211", height: "1000px" }}>
        <ProjectConstainer>
          Sword Design
          <Details>
            <Text_1 className='text_1'>
              I was extremely fanscinated by this decorative sword design by Sarah Morris.
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
