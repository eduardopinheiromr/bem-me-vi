import React from "react";
import styled from "styled-components";

const HeadlineContainer = styled.section`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;
  text-shadow: 0px 5px 3px #082641;
  padding: 0 20px;

  color: #fff;
  h3 {
    font-size: 52px;
    font-family: "Livvic", sans-serif;
  }
  @media (max-width: 768px) {
    margin: 0 auto;

    h3 {
      font-size: 42px;
    }
  }

  p {
    font-size: 24px;
  }
`;

type Props = {
  title: string;
  description?: string;
};

const Headline = ({ title, description }: Props) => {
  return (
    <HeadlineContainer>
      <h3 className="fw-bold my-5">{title}</h3>
      <p>{description}</p>
    </HeadlineContainer>
  );
};

export default Headline;
