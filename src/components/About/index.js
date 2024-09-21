import React from 'react';
import { AboutConstainer, MechEContainer, AboutMeContainer, ArtContainer, CompSciContainer, AboutMe, Skills, SkillType, SkillListItems } from './AboutElements';

const About = () => {
  return (
    <>
      <AboutConstainer id='about' >
        <AboutMeContainer>
        <AboutMe>
          <p style={{ fontSize: "32px"}}>About me</p>
            <div style={{ marginBottom: "15px" }}>
              <p>I am an MEng student in Mechanical Engineering at <span style={{ color: "#ffffff"}}>Cornell University</span>, where I also completed undergraduate degrees in 
                <span style={{ color: "#ffffff"}}> Mechanical Engineering </span> 
                and <span style={{ color: "#ffffff"}}> Computer Science</span>.
              </p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <p>I am a dedicated learner and self-motivated explorer, always seeking new experiences and challenges to push my boundaries.</p>
            </div>
            <div style={{ marginBottom: "15px" }}>
              <p>In the summers of 2023 and 2024, I interned at 
                <span style={{ color: "#ffffff" }}> SpaceX</span>, where I <s> blew up stuff around rockets</s> contributed to Starship production and testing at Starbase, TX. 
                Currently, I am part of Cornell’s 
                <span style={{ color: "#ffffff"}}> Space Systems Design Studio</span>, redesigning a ChipSat for Sandia National Labs. 
                My favorite time outside of work is stage combat; I served as the president of
                <span style={{ color: "#ffffff"}}> Ring of Steel: Ithaca</span>, where we do theatrical combat and perform sword fights!
              </p>
            </div>
        </AboutMe>

        </AboutMeContainer>
        <MechEContainer>
          <Skills style={{ color: "#58A5FF" }}>
            <SkillType style={{ color: "#58A5FF", fontFamily: "initial", letterSpacing: "1px" }}>
              Engineering
            </SkillType>
            <SkillListItems>
              <li>Robotics</li>
              <li>Space Systems</li>
              <li>Feedback Control</li>
              <li>CAD (NX, SW, Fusion)</li>
              <li>Finite Element Analysis</li>
              <li>Fluids Simulation</li>
              <li>Mechantronics</li>
              <li>Machining</li>
              <li>3D printing</li>
              <li>Laser cutting</li>

            </SkillListItems>
          </Skills>
        </MechEContainer>
        <CompSciContainer>
          <Skills style={{ color: "whitesmoke" }}>
            <SkillType style={{ color: "whitesmoke", fontFamily: "monospace", fontWeight: "500" }}>
              Programming
            </SkillType>
            <SkillListItems>
              <li>Embedded Operating Systems</li>
              <li>Machine Learning</li>
              <li>Automation</li>
              <li>Circuit Design (EPlan)</li>
              <li>Website Developement</li>
              <li>Game Development</li>
              <li>Matlab, Python, C, Java</li>
              <li>Algorithms</li>
              <li>Arduino</li>
            </SkillListItems>
          </Skills>
        </CompSciContainer>

        <ArtContainer>
          <Skills style={{ color: "palevioletred" }}>
            <SkillType style={{ color: "palevioletred", fontFamily: "Charmonman" }}>
              Art & Other
            </SkillType>
            <SkillListItems>
              <li>Mandarin, French</li>
              <li>Digital Painting</li>
              <li>3D Modeling (Blender)</li>
              <li>2D and 3D animations</li>
              <li>Video Editing</li>
              <li>Photography</li>
              <li>Stage Combat</li>
              <li>Piano, Guitar, Kalimba</li>
              <li>Technical Writing</li>
              <li>Microsoft Office Suite</li>
            </SkillListItems>
          </Skills>
        </ArtContainer>
      </AboutConstainer>
    </>
  );
};

export default About;
