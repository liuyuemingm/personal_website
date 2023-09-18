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
              <p> I am a senior at Cornell University, double majoring in
                <bf style={{ color: "#ffffff", fontWeight: "900" }}> Mechanical Engineering </bf>
                and <bf style={{ color: "#ffffff", fontWeight: "900" }}>Computer Science
                </bf>.  </p></div>
            <div style={{ marginBottom: "15px" }}>
              <p>I am an earnest learner and a self-motivated explorer. I'm
                constantly looking out to experience new things and challenge myself. </p></div>
            <div style={{ marginBottom: "15px" }}>
              <p>I interned at <bf style={{ color: "#ffffff", fontWeight: "900" }}> SpaceX </bf>
                during summer 2023, working on Starship production at Starbase, TX.
                I'm currently a member of the Cornell <bf style={{ color: "#ffffff", fontWeight: "900" }}>
                  Hyperloop</bf> Engineering Project team. We design and build Hyperloop train pods that are
                dedicated towards developing a new form of travel. I'm a
                <bf style={{ color: "#ffffff", fontWeight: "900" }}> Teaching Assistant</bf> at Cornell Engineering
                Learning Initiative for upperclassmen engineering courses.
                I am the president of Ring of Steel: Ithaca. We are a <bf style={{ color: "#ffffff", fontWeight: "900" }}>Theatrical Combat</bf> club and we
                play and perform with swords! </p></div>
          </AboutMe>
        </AboutMeContainer>
        <MechEContainer>
          <Skills style={{ color: "#58A5FF" }}>
            <SkillType style={{ color: "#58A5FF", fontFamily: "initial", letterSpacing: "1px" }}>
              Engineering
            </SkillType>
            <SkillListItems>
              <li>CAD (NX, SW, Fusion)</li>
              <li>Matlab</li>
              <li>Machining</li>
              <li>Woodworking</li>
              <li>3D printing</li>
              <li>Laser cutting</li>
              <li>Ansys analysis</li>
              <li>Fluids design</li>
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
              <li>Arduino</li>
              <li>Circuit design (EPlan)</li>
              <li>Website Developement</li>
              <li>Game Development</li>
              <li>React, Unity</li>
              <li>Python, C, Java</li>
              <li>JavaScript, C#</li>
              <li>Algorithm</li>
              <li>Machine Learning</li>
            </SkillListItems>
          </Skills>
        </CompSciContainer>

        <ArtContainer>
          <Skills style={{ color: "palevioletred" }}>
            <SkillType style={{ color: "palevioletred", fontFamily: "Charmonman" }}>
              Art @ Other
            </SkillType>
            <SkillListItems>
              <li>Mandarin, French</li>
              <li>Blender 3D modeling</li>
              <li>Digital painting</li>
              <li>2D and 3D animations</li>
              <li>Video editing</li>
              <li>Photography</li>
              <li>Piano, Guitar, Kalimba</li>
              <li>Technical writing</li>
              <li>Microsoft Office Suite</li>
            </SkillListItems>
          </Skills>
        </ArtContainer>
      </AboutConstainer>
    </>
  );
};

export default About;
