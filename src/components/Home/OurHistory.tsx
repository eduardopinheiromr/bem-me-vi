import Image from "next/image";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";
import Headline from "../Headline";
import logoImage from "@images/logo.webp";
import ourHistoryPlaceholder from "@images/our-history-placeholder.webp";
import Video from "@components/Video";

const OurHistoryContainer = styled.section`
  color: #fff;
`;

const OurHistory = () => {
  return (
    <OurHistoryContainer id="objetivos" className="text-left mx-auto">
      <Headline title="NOSSA HISTÓRIA" />
      <Container>
        <Row>
          <Col
            lg={6}
            className="col-lg-6 d-flex align-items-center justify-content-center"
          >
            <Image
              placeholder="blur"
              objectFit="contain"
              src={logoImage}
              alt="Logo Bem Me Vi"
            />
          </Col>
          <Col>
            <div className="d-flex flex-column h-100">
              <p>
                O primeiro contato de <strong>Thays</strong>, a fundadora do
                projeto, com a área social foi na adolescência, obtendo a
                oportunidade de desenvolver e colocar em prática um projeto
                social, passando por uma experiência transformadora e com
                grandes aprendizados, expandindo seu olhar para o meio social.
                Após algum tempo envolvida em causas sociais como voluntária e
                por ter passado por um processo de autoconhecimento percebeu o
                quanto aquela experiência inicial foi realizadora, então optou
                por dedicar-se à área social como profissão, para assim utilizar
                de suas experiências e conhecimento para desenvolver com os
                jovens o mesmo processo pelo qual passou.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <p>
              O Bem Me Vi surgiu em 2016 a partir do desejo de criar
              oportunidades para que jovens pudessem ter a oportunidade de
              refletir sobre suas vidas e conseguissem escolher caminhos que
              levassem a realização dos seus sonhos. Em Julho de 2019 o Bem me
              Vi em parceria com o Atados, conquistou alguns voluntários e
              orientações preciosas para que o projeto fosse se estruturando. Em
              Janeiro de 2020 firmou-se a parceria com a Vozes da Periferia, uma
              Organização Social que atua na região da Vila Prudente, Zona Leste
              de São Paulo capital. Em março foi formado o primeiro grupo de
              jovens que participaram das ações do Projeto. Foram desenvolvidas
              algumas atividades presenciais e remotas que impactaram
              diretamente 9 jovens. Foram trabalhadas algumas temáticas como
              desenvolvimento socioemocional e cidadania.
              <br /> <br />
              <br /> Durante o período de pandemia o Bem me Vi passou por uma
              reformulação, já que as atividades presenciais não foram mais
              possíveis de serem realizadas. Contudo, abriu-se outras frentes de
              atuação por meio das redes sociais. A comunicação com os jovens
              passou a ser virtual numa proposta de informar e sensibilizar o
              público do projeto para aspectos relevantes quanto aos temas de
              Direitos e Deveres, questões sociais, compartilhamento de
              experiências vivenciadas por jovens, entre outras outras
              temáticas. Em Setembro de 2020 o Bem Me Vi percebe que tem muito a
              colaborar com a vida de jovens artistas, e dar visibilidade a
              tantos talentos se transformou no grande propósito desta
              iniciativa realizada a muitas mãos.
            </p>
          </Col>
        </Row>
      </Container>

      <Container className="mt-5">
        <Video
          src="https://www.youtube.com/embed/UkElnu1IuIc"
          placeholder={ourHistoryPlaceholder}
        />
      </Container>
    </OurHistoryContainer>
  );
};

export default OurHistory;
