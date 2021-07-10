import React from "react";
import Headline from "../Headline";
import styled from "styled-components";

const LinksContainer = styled.section`
  background: #fcd704;

  .public-info {
    border: 4px solid black;
    height: 230px;
    width: 230px;
    text-align: center;
    font-weight: bold;
    font-size: 22px;
    margin: 0 auto;
    background: #fff;
  }
`;

const Links = () => {
  return (
    <LinksContainer>
      <Headline
        title="LINKS"
        description="O Projeto Bem me Vi tem como objetivo nossa transparência e deixar bem clara nossa prestação de contas e nossos comprimentos da legislação clique abaixo para mais informações"
      />
      <div className="py-5 bg-black">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-items-center rounded-circle public-info">
                DEMONSTRATIVO FINANCEIRO
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-items-center rounded-circle public-info">
                BALANÇO ANUAL
              </div>
            </div>
            <div className="col-12 col-md-4">
              <div className="d-flex justify-content-center align-items-center rounded-circle public-info">
                +INFORMAÇÕES
              </div>
            </div>
          </div>
        </div>
      </div>
    </LinksContainer>
  );
};

export default Links;
