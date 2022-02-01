import React from 'react';
import { ResumeConstainer, TextWrap, PDFwrap, Button, BtnContainer, PDFresume } from './ResumeElements';

const Resume = () => {
  return (
    <ResumeConstainer id='resume'>
      <p style={{ fontSize: "32px", fontWeight: "900" }}>Resume</p>
      <PDFwrap>
        <PDFresume src='/images/Yueming_Liu_CV.pdf' />
      </PDFwrap>
      <BtnContainer>
        <Button href='/images/Yueming_Liu_CV.pdf' target="_blank">Open file</Button>
      </BtnContainer>
    </ResumeConstainer >
  );
};

export default Resume;
