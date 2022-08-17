import React from 'react';
import { PortfolioContainer, ProjectContainer, ProjectDetails, ProjectImg, ProjectsGrid, ProjectName, ProjectDescription, InternalLink, ExternalLink } from './PortfolioElements';
import { animateScroll as Scroll } from 'react-scroll';
import { EngineeringResearch, GameWeb, ArtOther } from './ProjectData';


const Portfolio = () => {

  return (
    <>
      <PortfolioContainer id='portfolio'>
        <p style={{ fontSize: "32px", fontWeight: "900", margin: "20px 0 30px" }}>Portfolio</p>
        <p style={{ fontSize: "22px", fontWeight: "300", margin: "0 0 10px", color: "#58A5FF", fontFamily: "initial", letterSpacing: ".5px" }}>Engineering & Research </p>
        <ProjectsGrid>
          {
            EngineeringResearch.map(item => (
              <ProjectContainer
                color={item.color}
                key={item.id}>

                {item.hasInternalLink ?
                  <InternalLink
                    to={item.dest}
                    smooth="true">
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

        <p style={{ fontSize: "20px", fontWeight: "300", margin: "30px 0 10px", color: "white", fontFamily: "monospace", letterSpacing: "-1px" }}> Games & Websites & Coding </p>
        <ProjectsGrid>
          {
            GameWeb.map(item => (
              <ProjectContainer
                color={item.color}
                key={item.id}>

                {item.hasInternalLink ?
                  <InternalLink
                    to={item.dest}>
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

        <p style={{ fontSize: "20px", fontWeight: "300", margin: "30px 0 10px", color: "palevioletred", fontFamily: "Charmonman" }}> Art & Other </p>
        <ProjectsGrid>
          {
            ArtOther.map(item => (
              <ProjectContainer
                color={item.color}
                key={item.id}>

                {item.hasInternalLink ?
                  <InternalLink
                    to={item.dest}>
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
