import React from 'react';
import { PortfolioContainer, ProjectContainer, ProjectDetails, ProjectImg, ProjectsGrid, ProjectName, ProjectDescription } from './PortfolioElements';
import { animateScroll as Scroll } from 'react-scroll';
import { Projects } from './ProjectData';


const Portfolio = () => {

  return (
    <>
      <PortfolioContainer id='portfolio'>
        <p style={{ fontSize: "32px", fontWeight: "900", margin: "20px 0 30px" }}>Portfolio</p>
        <ProjectsGrid>
          {/* <ProjectContainer inputColor={Project1}> {Project1.Name} </ProjectContainer>
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer />
          <ProjectContainer /> */}
          {Projects.map(item => (
            <ProjectContainer
              color={item.color}
              hasLink={item.hasLink}
              href={item.Link}
              target="_blank"
              key={item.id}>
              <ProjectDetails>
                <ProjectName font={item.font} color={item.color}>
                  {item.name}
                </ProjectName>
                <ProjectDescription
                  font={item.font}
                  color={item.color}>
                  {item.text}
                </ProjectDescription>
              </ProjectDetails>
              <ProjectImg src={item.img} />
            </ProjectContainer>
          ))}
        </ProjectsGrid>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
