import React from "react";
import Image from "next/image";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";

const GoalContainer = styled.div`
  text-align: left;
  color: #fff;
  background: linear-gradient(
    180deg,
    rgba(255, 217, 4, 1) 0%,
    rgba(215, 188, 41, 0.5) 100%
  );

  .avatar {
    padding: 3rem;
    margin: 0 auto;
  }

  .name {
    font-size: 50px;
    font-weight: bold;
  }
  .description {
    font-size: 28px;
    padding-left: 40px;
  }

  @media (max-width: 991px) {
    text-align: center;

    .avatar {
      padding: 0;
      width: 70%;
      margin: 0 auto;
    }
    .name {
      margin-top: 20px;
      font-size: 42px;
    }
    .description {
      padding: 0;
      font-size: 22px;
    }
  }
`;

type Props = {
  person: {
    image: any;
    name: string;
    description: string;
  };
  order: "left" | "right";
};

const GoalPerson = ({ person, order }: Props) => {
  console.log({ order });
  return (
    <GoalContainer className="d-flex py-5">
      <Row>
        <Col lg={6} className={order === "left" ? "order-lg-0" : "order-lg-2"}>
          <div className="d-flex justify-content-center avatar">
            <Image
              placeholder="blur"
              src={person.image}
              alt={`Foto de ${person.name}`}
            />
          </div>
        </Col>
        <Col lg={6} className={order === "left" ? "order-lg-2" : "order-lg-0"}>
          <div className="d-flex align-items-center h-100 px-2 px-lg-5">
            <div className="d-flex flex-column">
              <p className="name">{person.name}</p>
              <p className="description">{person.description}</p>
            </div>
          </div>
        </Col>
      </Row>
    </GoalContainer>
  );
};

export default GoalPerson;
