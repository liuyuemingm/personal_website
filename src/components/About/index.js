import React from 'react';
import { AboutConstainer, MechEContainer, AboutMeContainer, ArtContainer, CompSciContainer, AboutMe, Skills, SkillType, SkillListItems } from './AboutElements';

const About = () => {
  return (
    <>
      <AboutConstainer id='about' >
        <AboutMeContainer>
          <AboutMe>
            <p style={{ fontSize: "32px", fontWeight: "900" }}>About me</p>
            <div style={{ marginBottom: "15px" }}>
              <p> I am a sophmore at Cornell University double majoring in
                Mechanical Engineering and Computer Science, and planning to
                minor in Aerospace Engineering.  </p></div>
            <div style={{ marginBottom: "15px" }}>
              <p>I am an earnest learner and a self-motivated explorer. I'm
                constantly looking out to experience new things and challenge myself. </p></div>
            <div style={{ marginBottom: "15px" }}>
              <p>I'm currently a member of the Cornell Hyperloop Engineering
                Project team. We design and build Hyperloop train pods that are
                dedicated towards developing a new form of travel. I'm a tutor-on-call
                at Cornell Engineering Learning Initiative for physics, math, and statics.
                I'm a member of Ring of Steel: Ithaca. We are a theatrical combat and we
                play with sowrds! </p></div>
          </AboutMe>
        </AboutMeContainer>
        <CompSciContainer>
          <Skills style={{ color: "whitesmoke" }}>
            <SkillType style={{ color: "whitesmoke", fontFamily: "monospace", fontWeight: "500" }}>
              Programming
            </SkillType>
            <SkillListItems>
              <li>Web Dev</li>
              <li>App Dev</li>
              <li>Game Dev</li>
              <li>React, Android Studio, Unity, Logism</li>
              <li>Python, Matlab, Java, JavaScript, C#</li>
              <li>Discrete math, Linear Algebra</li>
              <li>Circuit design</li>
            </SkillListItems>
          </Skills>
        </CompSciContainer>
        <MechEContainer>
          <Skills style={{ color: "#58A5FF" }}>
            <SkillType style={{ color: "#58A5FF", fontFamily: "initial", letterSpacing: "1px" }}>
              Engineering
            </SkillType>
            <SkillListItems>
              <li>Solidworks</li>
              <li>Fusion 360</li>
              <li>Woodworking</li>
              <li>3D printing</li>
              <li>Laser cutting</li>
              <li>CNC machining</li>
              <li>Ansys analysis</li>
              <li>Mechanical Sythesis</li>
              <li>Statics & Dynamics </li>
            </SkillListItems>
          </Skills>
        </MechEContainer>
        <ArtContainer>
          <Skills style={{ color: "palevioletred" }}>
            <SkillType style={{ color: "palevioletred", fontFamily: "Charmonman" }}>
              Art @ Other
            </SkillType>
            <SkillListItems>
              <li>Blender 3D modeling</li>
              <li>Digital painting</li>
              <li>2D and 3D animations</li>
              <li>Video editing</li>
              <li>Photography</li>
              <li>Kalimba</li>
              <li>Mandarin Chinese</li>
              <li>Technical writing</li>
              <li>Microsoft Office</li>
            </SkillListItems>
          </Skills>
        </ArtContainer>
      </AboutConstainer>
    </>
  );
};

export default About;
