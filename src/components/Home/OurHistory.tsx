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
          <Col lg={6}>
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
              Com o início da pandemia em 2020, o <strong>Bem Me Vi</strong>{" "}
              passou por uma reformulação, já que as atividades presenciais não
              foram mais possíveis de serem realizadas. Contudo, abriu-se outras
              frentes de atuação por meio das redes sociais e a comunicação com
              os jovens passou a ser virtual. Percebe-se então que há muito a
              colaborar com a vida de jovens artistas, e dar visibilidade a
              tantos talentos se transformou no grande propósito desta
              iniciativa. Ficando claro o quanto o caminho pelas artes é um
              transformador social, pois há jovens talentosos esperando apenas
              por uma oportunidade de poder desenvolver seu talento e através da
              sua arte dar voz a seus sonhos, sem deixar de contar sobre suas
              realidades. Do desejo de acreditar que há caminhos para a
              realização dos sonhos. Surgiu o sonho de voar alto e assim como o
              Bem Te Vi, anunciar. O propósito do{" "}
              <strong>Bem Me Vi é dar asas para jovens artistas!</strong> O Bem
              Me Vi acredita na visão de mundo da juventude através de suas
              expressões artísticas e culturais. E assim mostrar o quanto essa
              juventude é criativa, do bem e tem muito a dizer por meio da sua
              arte!
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
