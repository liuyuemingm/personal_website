import React from 'react';
import { ProjectConstainer } from './CADelements';

import styled from "styled-components";

const Details = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: auto auto auto;
grid-template-rows: 120px 24px 230px 210px;
font-size: 20px;
font-weight: 100;
font-family: sans-serif;
grid-gap: 40px;
`

const Text_1 = styled.div`
grid-column: 1 / 4;
grid-row: 1 / 2;
`
const Text_2 = styled.div`
font-size: 24px;
grid-column: 1 / 4;
grid-row: 2 / 3;
`
const Text_3 = styled.div`
grid-column: 1 / 2;
grid-row: 4;
`
const Img_1 = styled.img`
height: 230px;
grid-column: 1;
grid-row: 3 /4;
`
const Img_2 = styled.img`
height: 230px;
grid-column: 2;
grid-row: 3 /4;
`
const Img_3 = styled.img`
height: 230px;
grid-column: 3;
grid-row: 3 /4;
`
const Img_4 = styled.img`
height: 210px;
grid-column: 2/4;
grid-row: 4;
`
const Img_5 = styled.div`
margin: 20px 0px;
`
const Img_6 = styled.img`
width: 300px;
grid-column: 1;
grid-row: 2 /4;
`

const MST = () => {

  return (
    <>
      <div id='MST' style={{ background: "#1E1D20", height: "1250px" }}>
        <ProjectConstainer>
          Music Sheet Turner
          <Details>
            <Text_1>
              This is an open design project for the Mechanical Synthesis class.
              We are challenged to design and build a purely mechanical system to
              help improve a small aspect of people's daily life.
              <p></p>
              My partner and I interviewed a pianist. We learned that it's inconvenient
              for her to turn the music sheet pages when both of her hands are engaged
              in playing. We designed this music sheet turner so that she can use her
              idle left foot to turn the pages while playing the piano.
            </Text_1>
            <Text_2>
              CAD model vs. Prototype
            </Text_2>

            <Img_1 src='/images/CAD/MST_1.jpg' />
            <Img_2 src='/images/CAD/MST_3.jpg' />
            <Img_3 src='/images/CAD/MST_2.jpg' />


            <Text_3>
              The parts of the turner are connected by a bead chain. To drive the Music Sheet Turner,
              the users press their feet on the pedal, which triggers the linear motion of the bead chain,
              which then rotate the scroll to present the next page.
            </Text_3>

            <Img_4 src='/images/CAD/MST_4.jpg' />


          </Details>
          <Img_5>
            <iframe width="550" height="350"
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
