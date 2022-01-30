import React from 'react';
import { ProfileConstainer, ImgWrap, Img, TextWrap, InnerTextWrap, BtnContainer, Button } from './ProfileElements';

const Profile = () => {
  return (
    <ProfileConstainer>
      <ImgWrap>
        <Img src='/images/profile_pic.JPEG' />
      </ImgWrap>
      <TextWrap>
        <p>Hi! I'm Yueming.</p>
        {/* <p style={{ lineHeight: "0.5" }}> _</p> */}
        <p >I'm a </p>
        <InnerTextWrap>
          <p style={{ color: "#58A5FF", fontFamily: "initial" }}>  Mechanical Engineer ,</p>
          <p style={{ color: "whitesmoke", fontFamily: "monospace", fontWeight: "500" }}>  Programmer,</p>
          <p style={{ color: "palevioletred", fontFamily: "Charmonman" }}>  Artist .</p>
        </InnerTextWrap>
        <p> _</p>
        <div style={{ fontSize: "16px", fontWeight: "normal", opacity: "80%" }}>
          <p > Sophomore studying at Cornell University,</p>
          <p > Mechanical subteam member at Cornell Hyperloop,</p>
          <p > Vice president of Ring of Steel: Ithaca.</p>
        </div>
        <BtnContainer>
          <Button href='mailto: yl3436@cornell.edu' >Email me</Button>
          <Button href='https://github.com/liuyuemingm' target="_blank">GitHub</Button>
          <Button href='https://www.linkedin.com/in/yueming-liu-9aba84196/' target="_blank">LinkedIn</Button>
        </BtnContainer>
      </TextWrap>
    </ProfileConstainer >
  );
};

export default Profile;
