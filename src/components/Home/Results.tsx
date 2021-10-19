import Headline from "@components/Headline";
import React from "react";
import styled from "styled-components";

const Root = styled.div`
  color: white;
  margin-bottom: 60px;
  .number {
    color: #f5d400;
    font-weight: 900;
    font-size: 102.4px;
    line-height: 0.8;
    text-shadow: 0px 32.4931px 32.4931px rgba(0, 0, 0, 0.25);
  }
`;

export default function Results() {
  const results = [
    {
      number: "3",
      title: "Ações presenciais",
    },
    {
      number: "+100",
      title:
        "Conteúdos virtuais, entre programas, sarau virtual, videoclipe, lives, vídeos e posts informativos, através das redes sociais ",
    },
    {
      number: "+100",
      title:
        "Jovens e convidados envolvidos nas ações do projeto, de São Paulo(Capital e interior), Rio de Janeiro, Salvador-BA e Paraíba ",
    },
    {
      number: "8.646",
      title:
        "Contas no Instagram alcançadas, nossa principal rede de comunicação.",
    },
  ];
  return (
    <Root className="container">
      <Headline title="RESULTADOS ATÉ O MOMENTO" />

      <div className="row">
        {results.map((result, key) => (
          <div
            key={key}
            className="col-12 col-lg-6 d-flex flex-column justify-content-center align-items-center text-center px-5 mb-5"
          >
            <p className="number">{result.number}</p>
            <p className="px-5">{result.title}</p>
          </div>
        ))}
      </div>
    </Root>
  );
}
