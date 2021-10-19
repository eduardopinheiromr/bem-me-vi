import styled from "styled-components";
import Image from "next/image";
import { Container, Row } from "react-bootstrap";

const BenefitedContainer = styled.section`
  .title {
    position: relative;
    height: 251px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h3,
    p {
      z-index: 10;
    }

    h3 {
      font-weight: bold;
      font-size: 36px;
    }
    p {
      color: #fff;
    }
  }
`;

import bgBenefited from "@images/benefited/bg-benefited.png";
import pedroImage from "@images/benefited/pedro.png";
import thaisImage from "@images/benefited/thais.png";
import francieleImage from "@images/benefited/franciele.png";
import CustomCarousel from "@components/CustomCarousel";
import { SwiperSlide } from "swiper/react";
import Headline from "@components/Headline";

export default function BenefitedPublic() {
  const people = [
    {
      name: "Pedro Dugaich",
      image: pedroImage,
      role: "Poeta",
      age: "19 anos",
      text: "“Muito obrigado pela oportunidade, pelo projeto de vocês, pela iniciativa muito louca, estão de parabéns de verdade! Gente da Paraíba, interior de SP, gente do Brasil inteiro mostrando arte e isso é uma coisa muito, tipo sei nem como explicar porque, ainda mais pra periferia, ninguém faz isso tá ligado?! Ninguém faz isso pra gente, ninguém da esse espaço, mas graças a Deus vocês estão fazendo esse movimento. Desejo muita sorte e força na caminhada aí, porque vocês é muito importante pra cena artística, pode ter certeza. E eu falo isso também em nome do Capturarte porque foi muito satisfatório ver também minhas irmãs, meus irmãos recitando lá, mostrando sua arte e isso não tem preço. Mas é isso, parabéns aí pra equipe, pra todo mundo e se tiver mais alguma coisa liga nóis, parceria porque vale a pena de verdade. Tamo junto! E de novo parabéns pro projeto Bem Me Vi.”",
    },
    {
      name: "Thais Alves",
      image: thaisImage,
      role: "Cantora, Compositora, Poeta e Desenhista.",
      age: "20 anos",
      text: "“Desde o início, quando conheci o projeto, ele se mostrou muito compatível com o que eu acredito e defendo. Ao ser chamada para participar do Sarau eu não esperava uma recepção tão calorosa, acolhedora de todos os lados como tive, e com tudo isso junto me senti renovada como artista, além de extremamente feliz de fazer (p)arte como vocês. Ao projeto Bem me vi toda a minha gratidão e sucesso sempre.”",
    },
    {
      name: "Francyele Alves",
      image: francieleImage,
      role: "Artista plástica e Cantora.",
      age: "20 anos",
      text: "Dividir esse espaço com vocês mesmo online foi uma experiência sensacional, me senti muito acolhida. É muito importante que a nossa juventude tenha um projeto como esse que dá e amplia a nossa voz, principalmente a voz de artistas periféricos. Gratidão eterna por conhecer o projeto Bem Me Vi, é lindo ver a força e esperança que esse projeto traz pra nossa juventude, vocês são necessários demais!",
    },
  ];
  return (
    <BenefitedContainer>
      <Headline title="PÚBLICO BENEFICIADO" />
      <div className="title">
        <h3 className="text-secondary-bmc">Jovens de 15 a 29 anos</h3>
        <p>(conforme estatuto da Juventude), sobretudo população periférica.</p>
        <Image
          src={bgBenefited}
          layout="fill"
          placeholder="blur"
          alt="Textura de fundo do título"
          objectFit="cover"
        />
      </div>
      <ul>
        <CustomCarousel>
          {people.map((person, key) => (
            <SwiperSlide key={key}>
              <li>
                <Container>
                  <Row className="my-5">
                    <div className="col-12 col-lg-6 d-flex justify-content-center">
                      <Image
                        objectFit="contain"
                        src={person.image}
                        alt={"Foto de " + person.name}
                        draggable={false}
                      />
                    </div>

                    <div className="col-12 col-lg-6 d-flex px-5 px-lg-0 pe-5 flex-column mx-auto mx-lg-0 align-items-center align-items-lg-start my-5 my-lg-0 text-white">
                      <h5 className="h1">
                        <strong>{person.name.split(" ")[0]}</strong>{" "}
                        {person.name.split(" ")[1]}
                      </h5>
                      <p>{person.role}</p>
                      <p>
                        <strong>{person.age}</strong>
                      </p>
                      <p>{person.text}</p>
                    </div>
                  </Row>
                </Container>
              </li>
            </SwiperSlide>
          ))}
        </CustomCarousel>
      </ul>
    </BenefitedContainer>
  );
}
