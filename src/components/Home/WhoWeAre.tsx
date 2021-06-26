import React from "react";
import Image from "next/image";
import styled from "styled-components";
import whoWeAreImage from "../../../public/assets/images/quem-somos.png";
import founderImage from "../../../public/assets/images/fundadora.png";
import { Container, Row, Col } from "react-bootstrap";
import Headline from "../Headline";

const WhoWeAreContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const WhoWeAre = () => {
  return (
    <WhoWeAreContainer id="quem-somos">
      <Headline title="QUEM SOMOS" />
      <Image
        placeholder="blur"
        className="mx-auto"
        src={whoWeAreImage}
        alt="Foto dos colaboradores do Projeto Bem Me Vi"
      />

      <Container>
        <Row className="my-5">
          <Col lg={6} className="order-2 order-lg-0">
            <Image
              placeholder="blur"
              src={founderImage}
              alt="Foto da fundadora do Projeto Bem Me Vi"
            />
          </Col>
          <Col className="text-md-left mb-5">
            <p>
              O primeiro contato de <strong>Thays</strong>, a fundadora do
              projeto, com a área social foi na adolescência, obtendo a
              oportunidade de desenvolver e colocar em prática um{" "}
              <strong>projeto social</strong>, passando por uma experiência
              transformadora e com grandes aprendizados, expandindo seu olhar
              para o meio social. Após algum tempo envolvida em causas sociais
              como voluntária e por ter passado por um processo de
              autoconhecimento percebeu o quanto aquela experiência inicial foi
              realizadora, então optou por dedicar-se à{" "}
              <strong>área social</strong> como profissão, para assim utilizar
              de suas experiências e conhecimento para desenvolver com os{" "}
              <strong>jovens</strong> o mesmo processo pelo qual passou.
            </p>

            <p>
              Por isso buscaremos oferecer oportunidade para que o jovem possa
              desenvolver maior entendimento sobre si nessa fase que é cercada
              por desafios, transformações, expectativas, e necessidade de
              escolhas.
            </p>

            <p>
              Queremos proporcionar para os jovens novas formas de olhar para
              si, a vida, o futuro e a sociedade, orientando-os para que possam
              despertar a capacidade de transformar sua realidade.
            </p>
          </Col>
        </Row>
      </Container>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
