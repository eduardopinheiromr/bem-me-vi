import React from "react";
import styled from "styled-components";
import GoalPerson from "components/GoalPerson";
import firstPersonImage from "../../../public/assets/images/julia.png";
import secondPersonImage from "../../../public/assets/images/vinicius.png";
import thirdPersonImage from "../../../public/assets/images/fernanda.png";
import Headline from "../Headline";

const GoalsContainer = styled.section`
  .goals-wrapper {
    width: 100vw;
  }
`;

const Goals = () => {
  const goalPeople = [
    {
      image: firstPersonImage,
      name: "JULIA",
      description: `“É uma forma descontraída de aprender mais sobre nós mesmos, aprendendo novas alternativas para resolvermos nossas crises pessoais”`,
    },
    {
      image: secondPersonImage,
      name: "VINÍCIUS",
      description: `“Participei de atividades que me ajudaram a pensar no futuro, pensar em outras pessoas, no que sou hoje e repensar minhas escolhas daqui pra frente!”`,
    },
    {
      image: thirdPersonImage,
      name: "FERNANDA",
      description: `“Simplesmente me plantou uma semente de luz, me mostrou como ser uma pessoa melhor. Provavelmente muitos aqui pensaram em desistir, mas uma boa ação começa a mudar essa ideia”`,
    },
  ];
  return (
    <GoalsContainer id="objetivos" className="text-center my-5 mx-auto">
      <Headline
        title="OBJETIVOS"
        description="O objetivo do Projeto Bem Me Vi é suscitar nos jovens suas
          potencialidades e autonomia através de oficinas de formação, que
          trabalharão o engajamento e o protagonismo juvenil, intencionando o
          desenvolvimento de uma nova geração mais responsável, consciente e
          altruísta."
      />
      <div className="goals-wrapper bg-primary-bmv py-5">
        <div className="container">
          {goalPeople.map((person, key) => (
            <GoalPerson
              person={person}
              key={key}
              order={key % 2 === 0 ? "left" : "right"}
            />
          ))}
        </div>
      </div>
    </GoalsContainer>
  );
};

export default Goals;
