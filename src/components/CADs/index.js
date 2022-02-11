import React from 'react';
import { CADConstainer, ImgWrap, Img, TextWrap, InnerTextWrap, BtnContainer, Button } from './CADelements';

const CADs = () => {
  return (
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
  );
};

export default CADs;
