import React from 'react';
import { ProjectConstainer } from './CADelements';

import styled from "styled-components";

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: 450px auto;
grid-template-rows: 90px 70px 70px 370px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;
`

const Details1 = styled.div`
margin-top: 40px;
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: auto;
grid-gap: 40px;
`

const Img_1 = styled.img`
width: 450px;
grid-column: 1;
grid-row: 1 / 5;
`
const Img_2 = styled.img`
height: 370px;
grid-column: 2;
grid-row: 4 / 5;
`
const Img_3 = styled.img`
width: 100%;
grid-column: 1;
grid-row: 1;
`
const Img_4 = styled.img`
width: 100%;
grid-column: 2;
grid-row: 1;
`
const Img_5 = styled.img`
width: 100%;
grid-column: 3;
grid-row: 1;
`
const Text_1 = styled.div`
grid-column: 2;
grid-row: 1 / 2;
`
const Text_2 = styled.div`
grid-column: 2;
grid-row: 2;
`
const Text_3 = styled.div`
grid-column: 2;
grid-row: 3;
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
