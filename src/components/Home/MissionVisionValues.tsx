import { Container } from "react-bootstrap";
import styled from "styled-components";

// import Image from 'next/image'
const StyledContainer = styled.section`
  ul li {
    margin: 70px 0;
  }
  h4 {
    font-weight: 900;
    font-size: 48.0776px;
    line-height: 58px;

    @media (min-width: 768px) {
      font-size: 78.0776px;
      line-height: 98px;
    }
  }

  p {
    font-weight: 600;
    font-size: 29.0388px;
    line-height: 29px;
    letter-spacing: 0.025em;

    color: #ffffff;

    @media (min-width: 768px) {
      font-size: 39.0388px;
      line-height: 49px;
    }
  }
`;

export default function MissionVisionValues() {
  return (
    <StyledContainer>
      <Container>
        <ul>
          <li>
            <h4 className="text-secondary-bmc">MISSÃO</h4>
            <p>
              Contribuir para o reconhecimento das manifestações culturais de
              jovens e suas práticas artísticas
            </p>
          </li>
          <li className="text-end">
            <h4 className="text-secondary-bmc">VISÃO</h4>
            <p>
              Ser uma referência nas mídias e redes sociais como a maior rede de
              jovens artistas periféricos.{" "}
            </p>
          </li>
          <li>
            <h4 className="text-secondary-bmc">VALORES</h4>
            <p>Respeito, Ética e Auteridade</p>
          </li>
        </ul>
      </Container>
    </StyledContainer>
  );
}
