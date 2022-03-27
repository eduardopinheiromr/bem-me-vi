import Image from "next/image";
import Link from "next/link";
import questionario from "@images/questionario.png";
import queroApoiar from "@images/quero-apoiar.png";
import queroContribuir from "@images/quero-contribuir.png";
import bg from "@images/bg-wall-3.png";

import styled from "styled-components";

const Root = styled.div`
  position: relative;

  .container {
    z-index: 10;
  }

  .title {
    font-weight: 900;
    font-size: 45px;
    align-items: center;
    text-align: center;
    letter-spacing: 0.025em;
    color: #f5d400;
    text-shadow: 0 0 5px darkblue;

    @media (min-width: 1024px) {
      font-size: 85px;
      line-height: 107px;
    }
  }

  .description {
    color: white;
    font-weight: 900;
    font-size: 28px;
    line-height: 35px;
    letter-spacing: 0.025em;
    border: 3px solid #0a3256;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

    @media (min-width: 1024px) {
      font-size: 36px;
      line-height: 45px;
    }
  }
`;

export default function Participate() {
  return (
    <Root id="quero-apoiar">
      <Image
        src={bg}
        alt=""
        layout="fill"
        objectFit="cover"
        draggable={false}
      />

      <div className="container py-5">
        <p className="title">QUERO PARTICIPAR!</p>

        <div className="row">
          <div className="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-5">
            <p className="description p-5 text-center">
              Vamos juntos criar a MAIOR REDE DE JOVENS ARTISTAS PERIFÉRICOS do
              Brasil! Venha fazer parte, preencha o questionário:
            </p>
          </div>
          <Link href="https://forms.gle/aibrkQ9BQsKXQ9SX7" passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-5 hover-scale-up"
            >
              <Image src={questionario} alt="questionario" />
            </a>
          </Link>
          <Link href="https://forms.gle/PWwaAKmEoWHwTtaN6" passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-5 hover-scale-up"
            >
              <Image src={queroApoiar} alt="queroApoiar" />
            </a>
          </Link>
          <Link href="https://forms.gle/goA7f7xSJ8bgV1YE7" passHref>
            <a
              target="_blank"
              rel="noreferrer"
              className="col-12 col-lg-6 d-flex justify-content-center align-items-center mb-5 hover-scale-up"
            >
              <Image src={queroContribuir} alt="queroContribuir" />
            </a>
          </Link>
        </div>
      </div>
    </Root>
  );
}
