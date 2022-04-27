import React from 'react';
import { CADConstainer, ImgWrap, Img, TextWrap, InnerTextWrap, BtnContainer, Button } from './CADelements';

const CADs = () => {
  return (
    <div>

      <CADConstainer >
        <ImgWrap>
          <Img src='/images/CAD/peeler.jpg' />
        </ImgWrap>
        <TextWrap>
          Fruit Peeler
          <p>_</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>Kitchen object modeled with Fusion 360. </p>
          <Img src='/images/CAD/peeler.gif' />
        </TextWrap>
      </CADConstainer >
      <CADConstainer>
        <ImgWrap>
          <Img src='/images/CAD/Reuleaux.jpg' />
        </ImgWrap>
        <TextWrap>
          Reuleaux Machine
          <p>_</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            See <a href='https://digital.library.cornell.edu/catalog/ss:372612'>Cornell University Library Digital Collections</a>. </p>
          <p>_</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>
            This device consists of a cam actuated lever, a crank with a small two-tooth cam wheel, and a larger 42 tooth gear wheel.
            When the crank turns through one cycle, one tooth of the cam wheel raises the lever while the other tooth advances the gear by one tooth.
          </p>
        </TextWrap>
      </CADConstainer >
      <CADConstainer id='home'>
        <ImgWrap>
          <Img src='/images/CAD/ODP.jpg' />
        </ImgWrap>
        <TextWrap>
          Music Sheet Turner
          <p>_</p>
          <div style={{ fontSize: "18px", fontWeight: "500" }}>
            <p>
              The music sheet tuerner is designed for music players to turn the page without using their hands.
            </p>
            <p>
              The player steps on the foot pedal, which activates the motor that translates the bead chain in continuous motion.
              The bead chain transfers motion to the scrollers. The scroller rotates and presents the next page to you.
            </p>
          </div>
          <p>_</p>
          <img width="350" height="250" src='/images/CAD/ODP_1.jpg'></img>
          <iframe width="350" height="250"
            src="https://www.youtube.com/embed/qBVfzrCr0Uk"
            title="YouTube video player"
            frameborder="0"
            allowfullscreen></iframe>

        </TextWrap>
      </CADConstainer >

    </div>

  );
};

export default CADs;
