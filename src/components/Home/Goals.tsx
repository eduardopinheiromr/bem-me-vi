import React from "react";
import styled from "styled-components";
import Headline from "../Headline";

const GoalsContainer = styled.section`
  .goals-wrapper {
    width: 100vw;
  }
`;

const Goals = () => {
  return (
    <GoalsContainer id="objetivos" className="text-left my-5 mx-auto">
      <Headline
        title="NOSSO OBJETIVO"
        description="O objetivo do Bem me Vi é promover o intercâmbio de ideias, pensamentos e manifestações artísticas que fortaleçam o modo de ser e estar dos jovens no mundo. Promover práticas educacionais que contribuam para a equidade social, respeito, autonomia e protagonismo juvenil.
        Valorar arranjos culturais que fortaleçam a prática da economia criativa em diferentes territórios.
        Por meio da arte, gerar um processo de conscientização com experiências que transformaram as relações do ser no mundo por meio da sensibilidade, criatividade e poder de expressão. "
      />
    </GoalsContainer>
  );
};

export default Goals;
