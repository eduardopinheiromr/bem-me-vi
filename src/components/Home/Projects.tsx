import React from "react";
import Headline from "../Headline";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import projectOneImage from "../../../public/assets/images/projeto-1.png";
import styled from "styled-components";

const StyledCarousel = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  .react-multiple-carousel__arrow {
    height: 60px;
    width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .react-multiple-carousel__arrow--right::before {
    content: "▲";
    font-size: 25px;
    transform: rotate(90deg);
  }
  .react-multiple-carousel__arrow--left::before {
    content: "▲";
    font-size: 25px;
    transform: rotate(270deg);
  }
`;

const Projects = () => {
  const projects = [
    { src: projectOneImage, alt: "" },
    { src: projectOneImage, alt: "" },
    { src: projectOneImage, alt: "" },
    { src: projectOneImage, alt: "" },
    { src: projectOneImage, alt: "" },
    { src: projectOneImage, alt: "" },
  ];
  const responsive = {
    desktop: {
      breakpoint: {
        max: 30000,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 40,
    },
  };
  return (
    <div id="projetos">
      <Headline
        title="PROJETOS"
        description="Os nosso projetos são focados em jovens e grupos que atendem diretamente esse público, nosso desafio é o da transformação e moldar uma mentalidade nos jovens onde eles possam enxergar esse mesmo poder de transformação em suas vidas"
      />
      <StyledCarousel>
        <Carousel
          infinite
          draggable={false}
          pauseOnHover={false}
          arrows
          responsive={responsive}
        >
          {projects.map((project, key) => (
            <div
              key={key}
              className="d-flex justify-content-center fade-appear"
            >
              <Image
                title={project.alt}
                src={project.src}
                alt={project.alt}
                objectFit="contain"
                draggable="false"
                placeholder="blur"
                loading="eager"
              />
            </div>
          ))}
        </Carousel>
      </StyledCarousel>
    </div>
  );
};

export default Projects;
