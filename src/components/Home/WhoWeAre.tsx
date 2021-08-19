import React from "react";
import Image from "next/image";
import styled from "styled-components";
import videoPlaceholder from "../../../public/assets/images/who-we-are-placeholder.webp";
import { Container, Row, Col } from "react-bootstrap";
import Headline from "../Headline";

import thays from "../../../public/assets/images/thays.webp";
import rafael from "../../../public/assets/images/rafael.webp";
import rayssa from "../../../public/assets/images/rayssa.webp";
import alexandre from "../../../public/assets/images/alexandre.webp";
import lucas from "../../../public/assets/images/lucas.webp";
import Video from "components/Video";

const WhoWeAreContainer = styled.section`
  display: flex;
  flex-direction: column;
  color: #fff;
`;

const WhoWeAre = () => {
  const people = [
    {
      image: thays,
      name: (
        <span>
          <strong>Thays</strong> Moraes
        </span>
      ),
      role: "Fundadora e Coordenadora Geral",
      about:
        "Assistente Social. Experiência de mais de 10 anos em eventos, contato com público e áreas administrativas. Fundou o projeto Bem Me Vi com intuito de criar oportunidades para que jovens possam escolher caminhos que levem à realização dos seus sonhos e assim transformem suas realidades.",
      quote:
        "“O Bem Me Vi é uma missão de vida! E o contato com os jovens fortalece a cada dia o quanto esse caminho é possível e realizador.”",
    },
    {
      image: rafael,
      name: (
        <span>
          <strong>Rafael</strong> Rocha
        </span>
      ),
      role: "Gestão Administrativa/Financeira",
      about:
        "Formado em Administração de empresas. Com mais de 15 anos de experiência na área financeira.",
      quote:
        "“Fazer parte do projeto Bem Me Vi é saber que há possibilidades de apoiar e valorizar a arte e cultura no nosso País.”",
    },
    {
      image: rayssa,
      name: (
        <span>
          <strong>Rayssa</strong> Winnie
        </span>
      ),
      role: "Apoio pedagógico e cultura",
      about:
        "Pedagoga especializada nas áreas da infância, juventude, empreendedorismo social e políticas públicas.  Experiências relacionadas à consultoria pedagógica, gestão de projetos e programas sociais, formação de jovens, educadores e demais profissionais atuantes na área da educação.",
      quote:
        "“O Bem Me Vi é um espaço onde eu posso me conectar com jovens que trazem a arte como horizonte para suas vidas.”",
    },
    {
      image: alexandre,
      name: (
        <span>
          <strong>Alexandre Kiabo</strong> Nunes
        </span>
      ),
      role: "Jornalista e Apresentador",
      about:
        "“Pra quem não me conhece sou o Alexandre Nunes, mais conhecido como Kiabo. Também o cara da comunicação do projeto Bem Me Vi e também quem apresenta o Atualiza Aí Meu Jovem. Estamos aqui com esse projeto que é incrível e você que tem a perspectiva de mudar a sua quebrada, mudar a sociedade e ao seu redor, seja pela arte, pela música, pela poesia e sempre com a educação, então vem com a gente porque nós somos o futuro da nação, se a ideia é essa, tamo junto meu irmão. Vem com nós, projeto Bem Me Vi, tamo junto!”",
      // quote: "",
    },
    {
      image: lucas,
      name: (
        <span>
          <strong>Lucas</strong> Santana
        </span>
      ),
      role: "Social Media",
      about:
        "“Olá, sou pisciano e adoro sorrisos, jovem e curioso adoro conhecer pessoas novas e me aventurar nessa sociedade diversa que temos. Amante de jogos, filmes e livros. Nesse projeto lindo que tenho muito orgulho de fazer parte eu sou social media que está na minha arte de profissão! Prazer em conhecê-los!”",
      // quote: "",
    },
  ];
  return (
    <WhoWeAreContainer id="quem-somos">
      <Headline title="QUEM SOMOS" />
      <Container>
        <Row>
          <Col lg={6} className="d-flex justify-content-center mb-5 mb-lg-0">
            <Video
              src="https://www.youtube.com/embed/tC1VQsaEXs4"
              placeholder={videoPlaceholder}
            />
          </Col>
          <Col>
            <div className="d-flex align-items-center h-100">
              <p>
                O <strong>Bem Me Vi</strong> é um projeto social que tem como
                objetivo dar visibilidade para <strong>jovens artistas</strong>.
                Promovendo o desenvolvimento e autonomia dos jovens enquanto
                artistas periféricos, dispondo ferramentas para viver de sua
                arte e valorizando seu papel na cultura do País.
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5 pt-5">
        {people.map((person, key) => (
          <Row key={key} className="mb-5">
            <Col lg={6} className={key % 2 === 1 ? "order-lg-2" : ""}>
              <div className="d-flex justify-content-center align-items-center">
                <Image
                  placeholder="blur"
                  src={person.image}
                  alt={`Foto de ${person.name}`}
                />
              </div>
            </Col>
            <Col lg={6} className="d-flex">
              <div className="d-flex flex-column justify-content-center">
                <h3 className="h1">{person.name}</h3>
                <p>
                  <strong>{person.role}</strong>
                </p>
                <p>{person.about}</p>
                <p className="h2">{person.quote}</p>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
