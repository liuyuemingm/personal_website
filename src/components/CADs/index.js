import React from 'react';
import { CADConstainer, ImgWrap, Img, TextWrap, InnerTextWrap, BtnContainer, Button } from './CADelements';

const CADs = () => {
  return (
    <div>
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
          <Img src='/images/CAD/peeler.jpg' />
        </ImgWrap>
        <TextWrap>
          Fruit Peeler
          <p>_</p>
          <p style={{ fontSize: "18px", fontWeight: "500" }}>Kitchen object modeled with Fusion 360. </p>
        </TextWrap>
      </CADConstainer >
    </div>

  );
};

export default CADs;
