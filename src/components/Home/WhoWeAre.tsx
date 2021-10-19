import Image from "next/image";
import styled from "styled-components";
import videoPlaceholder from "@images/who-we-are-placeholder.webp";
import Headline from "../Headline";

import thays from "@images/thays.webp";
import rafael from "@images/rafael.webp";
import rayssa from "@images/rayssa.webp";
import alexandre from "@images/alexandre.webp";
import lucas from "@images/lucas.webp";
import Video from "@components/Video";
import CustomCarousel from "@components/CustomCarousel";
import { SwiperSlide } from "swiper/react";

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
      <div className="container mb-5">
        <div className="row">
          <div className="col-lg-6 d-flex justify-content-center mb-5 mb-lg-0">
            <Video
              src="https://www.youtube.com/embed/tC1VQsaEXs4"
              placeholder={videoPlaceholder}
            />
          </div>
          <div className="col">
            <div className="d-flex align-items-center h-100">
              <p>
                O <strong>Bem Me Vi</strong> é um projeto social que tem como
                objetivo dar visibilidade para <strong>jovens artistas</strong>.
                Promovendo o desenvolvimento e autonomia dos jovens enquanto
                artistas periféricos, dispondo ferramentas para viver de sua
                arte e valorizando seu papel na cultura do País.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <CustomCarousel>
          {people.map((person, key) => (
            <SwiperSlide key={key}>
              <div className="row mb-5 justify-content-center">
                <div
                  className={
                    (key % 2 === 1 ? "order-lg-2" : "") + " col-12 col-lg-4"
                  }
                >
                  <div className="d-flex justify-content-center align-items-center">
                    <Image
                      placeholder="blur"
                      src={person.image}
                      alt={`Foto de ${person.name}`}
                      draggable={false}
                      objectFit="contain"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg-6 d-flex">
                  <div className="d-flex flex-column justify-content-center text-center text-lg-start">
                    <h3 className="h1">{person.name}</h3>
                    <p>
                      <strong>{person.role}</strong>
                    </p>
                    <p>{person.about}</p>
                    <p className="h2">{person.quote}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </CustomCarousel>
      </div>
    </WhoWeAreContainer>
  );
};

export default WhoWeAre;
