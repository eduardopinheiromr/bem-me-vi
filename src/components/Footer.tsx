import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";
import facebookImage from "../../public/assets/icons/facebook.png";
import instagramImage from "../../public/assets/icons/instagram.png";
import phoneImage from "../../public/assets/icons/phone.png";

const FooterContainer = styled.footer``;

const Footer = () => {
  const channels = [
    { name: "Facebook", image: facebookImage, href: "#" },
    { name: "Instagram", image: instagramImage, href: "#" },
    { name: "Telefone", image: phoneImage, href: "#" },
  ];
  return (
    <FooterContainer className="bg-primary-bmv text-white">
      <Container>
        <Row className="py-5">
          <Col lg={7}>
            <h3>ENTRE EM CONTATO</h3>
            <p>
              Para saber mais do nosso projeto e como você pode ajudar, pode
              entrar com contato através do Facebook, Instagram ou ligar pra
              gente!
            </p>
          </Col>
          <Col lg={5}>
            <div className="d-flex justify-content-between">
              {channels.map((channel, key) => (
                <div key={key}>
                  <a href={channel.href} target="_blank" rel="noreferrer">
                    <Image
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
