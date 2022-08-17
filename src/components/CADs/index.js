import React from 'react';
import { CADConstainer, ImgWrap, Img, TextWrap, InnerTextWrap, BtnContainer, Button } from './CADelements';

const CADs = () => {
  return (
    <div>
      <CADConstainer id='WP' color="#131211">
        <ImgWrap>
          <Img src='/images/CAD/pump_real.jpg' />
        </ImgWrap>
        <TextWrap>
          <img height="300" src='/images/CAD/pump_CAD.jpg'></img>
          <p>_</p>
          Water Pump
          <p>_</p>
          <div style={{ fontSize: "18px", fontWeight: "300" }}>
            <p>
              This was a group project by our team of 7.
              For the project we designed, machined, and tested a piston-shaft water pump.
            </p>
            <p>
              Each of us actively participated in the entire design and manufacture process.
              Although in the testing phase the pump did not turn out to work,
              we were able to learn a lot from the process, especially teamworking, machining, and failure analysis.
            </p>
          </div>
        </TextWrap>
      </CADConstainer >

      <CADConstainer id="MST" color="#1E1D20">
        <ImgWrap>
          <Img src='/images/CAD/ODP.jpg' />
        </ImgWrap>
        <TextWrap>
          Music Sheet Turner
          <p>_</p>
          <div style={{ fontSize: "18px", fontWeight: "300" }}>
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

      <CADConstainer id="RM" color="#131211">
        <ImgWrap>
          <Img src='/images/CAD/Reuleaux.jpg' />
        </ImgWrap>
        <TextWrap>
          Reuleaux Machine
          <p>_</p>
          <p style={{ fontSize: "18px", fontWeight: "300" }}>
            See <a href='https://digital.library.cornell.edu/catalog/ss:372612'>Cornell University Library Digital Collections</a>. </p>
          <p>_</p>
          <p style={{ fontSize: "18px", fontWeight: "300" }}>
            This device consists of a cam actuated lever, a crank with a small two-tooth cam wheel, and a larger 42 tooth gear wheel.
            When the crank turns through one cycle, one tooth of the cam wheel raises the lever while the other tooth advances the gear by one tooth.
          </p>
        </TextWrap>
      </CADConstainer >

      <CADConstainer id="FP" color="#1E1D20">
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

      <CADConstainer id="SD" color="#131211">
        <ImgWrap>
          <Img src='/images/CAD/peeler.jpg' />
        </ImgWrap>
        <TextWrap>
          Sword Design
          <p>_</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>Kitchen object modeled with Fusion 360. </p>
          <Img src='/images/CAD/peeler.gif' />
        </TextWrap>
      </CADConstainer >


    </div>

  );
};

export default CADs;
