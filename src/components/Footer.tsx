import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import facebookImage from "../../public/assets/icons/facebook.png";
import instagramImage from "../../public/assets/icons/instagram.png";
import phoneImage from "../../public/assets/icons/phone.png";

const FooterContainer = styled.footer`
  p,
  h3 {
    font-weight: 700;
  }
  h3 {
    font-family: "Livvic", sans-serif;
  }
  .social-channels {
    max-width: 380px;
    margin: 0 auto;
  }
  @media (min-width: 768px) {
    h3 {
      font-size: 42px;
    }
  }
`;

const Footer = () => {
  const channels = [
    { name: "Facebook", image: facebookImage, href: "#" },
    { name: "Instagram", image: instagramImage, href: "#" },
    { name: "Telefone", image: phoneImage, href: "#" },
  ];
  return (
    <FooterContainer className="bg-primary-bmv text-white text-center text-lg-start">
      <Container>
        <Row className="py-5">
          <Col lg={6} className="mb-4 mb-lg-0">
            <h3>ENTRE EM CONTATO</h3>
            <p>
              Para saber mais do nosso projeto e como você pode ajudar, pode
              entrar com contato através do Facebook, Instagram ou ligar pra
              gente!
            </p>
          </Col>
          <Col lg={6} className="d-flex align-items-center">
            <div className="d-flex justify-content-between social-channels w-100">
              {channels.map((channel, key) => (
                <div key={key} className="hover-scale-up">
                  <a href={channel.href} target="_blank" rel="noreferrer">
                    <Image
                      placeholder="blur"
                      width={72}
                      height={72}
                      src={channel.image}
                      alt={channel.name}
                      title={channel.name}
                    />
                  </a>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
