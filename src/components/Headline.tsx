import React from "react";
import styled from "styled-components";

const HeadlineContainer = styled.section`
  max-width: 800px;
  margin: 0 auto 3rem;
  text-align: center;

  h3 {
    font-size: 48px;
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
