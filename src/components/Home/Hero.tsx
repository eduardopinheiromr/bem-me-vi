import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero-bg.png";
import logoImage from "../../../public/assets/images/logo.png";
import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  margin-bottom: 50px;

  .hero-image {
    position: absolute;
    top: 0;
    div {
      min-height: 700px;
      width: 100%;
    }
    div img {
      height: 100%;
      width: 100vw;
      object-fit: cover;
      object-position: 80% 0%;
      opacity: 0.5;
      @media (min-width: 1460px) {
        opacity: 0.8;
      }
    }
    @media (min-width: 1468px) {
      top: -5vw;
    }
  }

  .text {
    z-index: 5;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    text-align: center;
    @media (min-width: 768px) {
      padding: 0 20px;
      font-size: 28px;
      /* justify-content: center; */
    }
  }

  .headline {
    padding: 100px 0;
    font-size: 48px;
    font-family: "Livvic", sans-serif;
    @media (max-width: 768px) {
      padding: 60px 0;
      font-size: 28px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-image">
        <Image
          placeholder="blur"
          src={heroImage}
          alt="Banner com foto de alguns membros participando de um evento do Projeto Bem Me Vi"
        />
      </div>
      <div className="text container">
        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-6">
            <p className="headline">
              Juntos vamos criar uma geração capaz de ser protagonista de suas
              realidades
            </p>

            <Image
              placeholder="blur"
              objectFit="contain"
              src={logoImage}
              alt="Banner com foto de alguns membros participando de um evento do Projeto Bem Me Vi"
            />
          </div>
        </div>
      </div>
    </HeroContainer>
  );
};

export default Hero;
