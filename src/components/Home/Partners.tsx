import Headline from "@components/Headline";
import Image from "next/image";

import atados from "@images/parceiros/atados.webp";
import ceu from "@images/parceiros/ceu.webp";
import legume from "@images/parceiros/legume.webp";
import vozes from "@images/parceiros/vozes.webp";
import styled from "styled-components";

const Root = styled.div`
  .name {
    color: white;
  }

  .h-300 {
    height: 300px;
  }
`;

export default function Partners() {
  const partners = [
    {
      name: "Atados",
      image: atados,
    },
    {
      name: "CEU JAÇANÃ",
      image: ceu,
    },
    {
      name: "Jornal Legume News",
      image: legume,
    },
    {
      name: "Vozes das Periferias",
      image: vozes,
    },
  ];
  return (
    <Root className="container my-5">
      <Headline title="NOSSOS PARCEIROS:" />

      <div className="row my-5">
        {partners.map((partner, key) => (
          <div
            key={key}
            className="h-300 col-12 col-md-6 d-flex justify-content-center align-items-center flex-column mb-5"
          >
            <p className="name">{partner.name}</p>

            <Image
              src={partner.image}
              alt={partner.name}
              width={300}
              objectFit="contain"
            />
          </div>
        ))}
      </div>
    </Root>
  );
}
