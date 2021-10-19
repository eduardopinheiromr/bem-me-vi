import Image from "next/image";
import styled from "styled-components";

import bg from "@images/bg-wall-2.png";

const Root = styled.div`
  position: relative;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;

  .container {
    z-index: 10;
  }
  .title {
    color: #f5d400;
    font-weight: 900;
    font-size: 48px;
    text-shadow: 0 0 7px darkblue;
  }

  @media (min-width: 768px) {
    .title {
      font-size: 60px;
    }
  }
`;

export default function Mentorships() {
  return (
    <Root>
      <Image src={bg} alt="" layout="fill" objectFit="cover" />
      <div className="container">
        <p className="title">MENTORIAS ONLINE</p>
        <p className="title">AÇÕES DE INTERVENÇÃO ARTÍSTICA</p>
      </div>
    </Root>
  );
}
