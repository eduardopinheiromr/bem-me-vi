import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import styled from "styled-components";

import Headline from "../Headline";
import CustomCarousel from "../CustomCarousel";

import projectOneImage from "../../../public/assets/images/projeto-1.png";
import adolescentesImage from "../../../public/assets/images/adolescentes.png";
import jovensImage from "../../../public/assets/images/jovens.png";
import participantesImage from "../../../public/assets/images/participantes.png";
import ligationImage from "../../../public/assets/images/ligation.png";
import { SwiperSlide } from "swiper/react";

const ProjectsContainer = styled.section`
  .benefited-public {
    margin: 60px 0;
  }
  .number-container {
    width: 150px;
    height: 150px;
  }
  .green-circle {
    height: 50px;
    width: 50px;
    border-radius: 100%;
  }
  .h-33 {
    height: 33%;
    @media (max-width: 991px) {
      height: fit-content;
    }
  }
  .ligation {
    @media (max-width: 991px) {
      transform: rotate(90deg);
      height: 225px;
      margin-bottom: 50px;
      div {
        /* transform: scaleX(0.5); */
        transform: scale(0.5, 1.22);
      }
    }
  }
`;

const Projects = () => {
  const projects = [
    { src: projectOneImage, alt: "" },
    { src: projectOneImage, alt: "" },
  ];

  const benefitedPublic = [
    {
      image: adolescentesImage,
      text: (
        <p>
          Adolescentes de <strong>12 a 17 anos</strong>
        </p>
      ),
    },
    {
      image: jovensImage,
      text: (
        <p>
          Jovens a partir de <strong>18 anos</strong>
        </p>
      ),
    },
    {
      image: participantesImage,
      text: (
        <p>
          Participantes de <strong>instituições parceiras</strong>
        </p>
      ),
    },
  ];

  const benefitedQuantity = [
    { title: "14 adolescentes", subtitle: "com idades entre 12 a 17 anos." },
    { title: "14 adolescentes", subtitle: "com idades entre 12 a 17 anos." },
    { title: "14 adolescentes", subtitle: "com idades entre 12 a 17 anos." },
  ];

  return (
    <ProjectsContainer id="projetos">
      <Headline
        title="PROJETOS"
        description="Os nosso projetos são focados em jovens e grupos que atendem diretamente esse público, nosso desafio é o da transformação e moldar uma mentalidade nos jovens onde eles possam enxergar esse mesmo poder de transformação em suas vidas"
      />
      <CustomCarousel>
        {projects.map((project, key) => (
          <SwiperSlide key={key}>
            <div className="d-flex justify-content-center fade-appear">
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
          </SwiperSlide>
        ))}
      </CustomCarousel>

      <div className="benefited-public">
        <Container>
          <h3 className="text-secondary-bmc my-5 text-center">
            PÚBLICO BENEFICIADO
          </h3>
          <Row>
            {benefitedPublic.map((benefited, key) => (
              <Col
                md
                key={key}
                className="d-flex flex-column justify-content-center align-items-center"
              >
                <Image
                  src={benefited.image}
                  height={150}
                  width={150}
                  placeholder="blur"
                  alt=""
                />
                <div className="mt-4">{benefited.text}</div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <div className="people-numbers">
        <Container>
          <h3 className="text-secondary-bmc my-5 text-center">
            QUANTIDADE DE PESSOAS ATENDIDOS ATÉ O MOMENTO
          </h3>
          <Row className="my-5">
            <Col
              lg={4}
              className="d-flex justify-content-center justify-content-lg-end align-items-center"
            >
              <div className="number-container mb-5 mb-sm-0 bg-primary-bmv rounded-circle d-flex justify-content-center align-items-center">
                <div className="text-white">
                  <p>total</p>
                  <p className="h2">52</p>
                </div>
              </div>
            </Col>
            <Col
              lg={4}
              className="ligation d-none d-sm-flex justify-content-center justify-content-lg-end align-items-center my-lg-5 py-lg-4"
            >
              <Image src={ligationImage} alt="" />
            </Col>
            <Col
              lg={4}
              className="d-flex flex-column flex-sm-row align-items-center flex-lg-column justify-content-between align-items-start"
            >
              {benefitedQuantity.map((benefited, key) => (
                <div
                  className="d-flex flex-column flex-lg-row h-33 align-items-center mb-5 mb-sm-0 px-3 px-lg-0"
                  key={key}
                >
                  <div className="green-circle bg-secondary-bmv mb-3 mb-sm-0" />
                  <div className="ms-lg-3 text-center text-lg-start">
                    <h4>{benefited.title}</h4>
                    <p className="mb-0">{benefited.subtitle}</p>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </ProjectsContainer>
  );
};

export default Projects;
