import React from 'react';
import { PortfolioContainer, ProjectContainer, ProjectDetails, ProjectImg, ProjectsGrid, ProjectName, ProjectDescription, InternalLink, ExternalLink } from './PortfolioElements';
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
              key={item.id}>

              {item.hasInternalLink ?

                <InternalLink
                  to="/CADcollection">
                  <ProjectDetails>
                    <div>
                      <ProjectName font={item.font} color={item.color}>
                        {item.name}
                      </ProjectName>
                      <ProjectDescription
                        font={item.font}
                        color={item.color}>
                        {item.text}
                      </ProjectDescription>
                    </div>
                  </ProjectDetails>
                  <ProjectImg src={item.img} />
                </InternalLink>
                :
                <ExternalLink
                  hasLink={item.hasLink}
                  href={item.Link}
                  to={item.internalLink}
                  target="_blank">
                  <ProjectDetails>
                    <div>
                      <ProjectName font={item.font} color={item.color}>
                        {item.name}
                      </ProjectName>
                      <ProjectDescription
                        font={item.font}
                        color={item.color}>
                        {item.text}
                      </ProjectDescription>
                    </div>
                  </ProjectDetails>
                  <ProjectImg src={item.img} />
                </ExternalLink>
              }

            </ProjectContainer>
          ))}
        </ProjectsGrid>
      </PortfolioContainer>
    </>
  );
};

export default Portfolio;
