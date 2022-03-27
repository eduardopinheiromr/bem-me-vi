import React from "react";
import Image from "next/image";
import heroImage from "../../../public/assets/images/hero-bg.webp";
import logoImage from "../../../public/assets/images/logo.webp";
import buildingImage from "../../../public/assets/images/predios.svg";

import styled from "styled-components";

const HeroContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 75vh;
  color: #f5d400;

  @media (min-width: 1124px) {
    margin-bottom: 150px;
  }

  .hero-image {
    width: 100%;
    height: 83vh;
    position: absolute;
    .bg-filter {
      opacity: 0.6;
    }
  }

  .buildings {
    img {
      top: 80vh !important;
    }
  }

  .text {
    z-index: 5;
    font-style: normal;
    font-weight: bold;
    letter-spacing: 0.025em;
    text-transform: uppercase;
    text-align: center;
  }

  .headline {
    padding: 70px 0 25px;
    font-size: 48px;
    font-family: "Livvic", sans-serif;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    text-shadow: rgb(10, 50, 86) 3px 0px 0px,
      rgb(10, 50, 86) 2.83487px 0.981584px 0px,
      rgb(10, 50, 86) 2.35766px 1.85511px 0px,
      rgb(10, 50, 86) 1.62091px 2.52441px 0px,
      rgb(10, 50, 86) 0.705713px 2.91581px 0px,
      rgb(10, 50, 86) -0.287171px 2.98622px 0px,
      rgb(10, 50, 86) -1.24844px 2.72789px 0px,
      rgb(10, 50, 86) -2.07227px 2.16926px 0px,
      rgb(10, 50, 86) -2.66798px 1.37182px 0px,
      rgb(10, 50, 86) -2.96998px 0.42336px 0px,
      rgb(10, 50, 86) -2.94502px -0.571704px 0px,
      rgb(10, 50, 86) -2.59586px -1.50383px 0px,
      rgb(10, 50, 86) -1.96093px -2.27041px 0px,
      rgb(10, 50, 86) -1.11013px -2.78704px 0px,
      rgb(10, 50, 86) -0.137119px -2.99686px 0px,
      rgb(10, 50, 86) 0.850987px -2.87677px 0px,
      rgb(10, 50, 86) 1.74541px -2.43999px 0px,
      rgb(10, 50, 86) 2.44769px -1.73459px 0px,
      rgb(10, 50, 86) 2.88051px -0.838247px 0px;
    @media (max-width: 768px) {
      font-size: 28px;
    }
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="hero-image">
        <Image
          className="bg-filter"
          placeholder="blur"
          src={heroImage}
          alt="Banner com foto de alguns membros participando de um evento do Projeto Bem Me Vi"
          objectFit="cover"
          layout="fill"
        />
      </div>
      <div className="text container">
        <div className="row">
          <div className="col-12">
            <p className="headline">
              Vamos juntos criar a MAIOR REDE DE JOVENS ARTISTAS PERIFÉRICOS do
              Brasil!
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
      <div className="buildings">
        <Image
          className="bg-filter"
          src={buildingImage}
          alt="Construções simbolizando a cidade"
          layout="fill"
        />
      </div>
    </HeroContainer>
  );
};

export default Hero;
