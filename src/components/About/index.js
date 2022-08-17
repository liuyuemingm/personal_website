import React from 'react';
import { AboutConstainer, MechEContainer, AboutMeContainer, ArtContainer, CompSciContainer, AboutMe, Skills, SkillType, SkillListItems } from './AboutElements';

const About = () => {
  return (
    <>
      <AboutConstainer id='about' >
        <AboutMeContainer>
          <AboutMe>
            <p style={{ fontSize: "32px", fontWeight: "700" }}>About me</p>
            <div style={{ marginBottom: "15px" }}>
              <p> I am a junior at Cornell University, majoring in
                <bf style={{ color: "#e6b4ff", fontWeight: "900" }}> Mechanical Engineering </bf>
                and minoring in <bf style={{ color: "#e6b4ff", fontWeight: "900" }}>Computer Science
                </bf> and <bf style={{ color: "#e6b4ff", fontWeight: "900" }}> Aerospace Engineering</bf>.  </p></div>
            <div style={{ marginBottom: "15px" }}>
              <p>I am an earnest learner and a self-motivated explorer. I'm
                constantly looking out to experience new things and challenge myself. </p></div>
            <div style={{ marginBottom: "15px" }}>
              <p>I'm currently a member of the Cornell <bf style={{ color: "#e6b4ff", fontWeight: "300" }}>Hyperloop</bf> Engineering
                Project team. We design and build Hyperloop <bf style={{ color: "#e6b4ff", fontWeight: "300" }}>train pods</bf> that are
                dedicated towards developing a new form of travel. I'm a TA and tutor-on-call
                at Cornell Engineering Learning Initiative for <bf style={{ color: "#e6b4ff", fontWeight: "300" }}>physics</bf>,
                <bf style={{ color: "#e6b4ff", fontWeight: "300" }}> math</bf>, and <bf style={{ color: "#e6b4ff", fontWeight: "300" }}>engineering</bf>.
                I am the president of Ring of Steel: Ithaca. We are a <bf style={{ color: "#e6b4ff", fontWeight: "300" }}>theatrical combat</bf> troupe and we
                play with swords! </p></div>
          </AboutMe>
        </AboutMeContainer>
        <MechEContainer>
          <Skills style={{ color: "#58A5FF" }}>
            <SkillType style={{ color: "#58A5FF", fontFamily: "initial", letterSpacing: "1px" }}>
              Engineering
            </SkillType>
            <SkillListItems>
              <li>Solidworks</li>
              <li>Fusion 360</li>
              <li>Machining</li>
              <li>Woodworking</li>
              <li>3D printing</li>
              <li>Laser cutting</li>
              <li>Ansys analysis</li>
              <li>Mechanical Sythesis</li>
              <li>Statics & Dynamics </li>
            </SkillListItems>
          </Skills>
        </MechEContainer>
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
              <li>Circuit design (logisim)</li>
            </SkillListItems>
          </Skills>
        </CompSciContainer>

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
