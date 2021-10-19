import React from "react";
import Image from "next/image";
import { Headline } from "..";

import atualiza1 from "@images/conteudos/atualiza-ai.webp";
import atualiza2 from "@images/conteudos/atualiza-ai-2.webp";
import diario from "@images/conteudos/diario-de-um-educador.webp";
import ensaio from "@images/conteudos/ensaio-fotografico.webp";
import jovens from "@images/conteudos/jovens-que-inspiram.webp";
import lives from "@images/conteudos/lives.webp";
import mostra from "@images/conteudos/mostra-cultural.webp";
import referencias from "@images/conteudos/referencias.webp";
import sarau1 from "@images/conteudos/sarau-1.webp";
import sarau2 from "@images/conteudos/sarau-2.webp";
import CustomCarousel from "@components/CustomCarousel";
import { SwiperSlide } from "swiper/react";

export default function MeansOfAction() {
  const contents = [
    {
      title: (
        <h5 className="h1 mb-5">
          Programa <strong>Atualiza Aí Meu Jovem</strong> – 1ª temporada{" "}
        </h5>
      ),
      image: atualiza1,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          Programa <strong>Atualiza Aí Meu Jovem</strong> – 2ª temporada{" "}
        </h5>
      ),
      image: atualiza2,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          Programa <strong>Diário de um Arte-educador</strong>
        </h5>
      ),
      image: diario,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          <strong>Ensaio Fotográfico Onclick</strong>
        </h5>
      ),
      image: ensaio,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          Programa <strong>Jovens que inspiram Jovens </strong>
        </h5>
      ),
      image: jovens,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          <strong>Lives</strong>
        </h5>
      ),
      image: lives,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          <strong>Mostra Cultural</strong>
        </h5>
      ),
      image: mostra,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          <strong>Quais são suas Referências?</strong>
        </h5>
      ),
      image: referencias,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          <strong>Bem Me Vi no Sarau 2020</strong> - Parte 1
        </h5>
      ),
      image: sarau1,
    },
    {
      title: (
        <h5 className="h1 mb-5">
          <strong>Bem Me Vi no Sarau 2020</strong> - Parte 2
        </h5>
      ),
      image: sarau2,
    },
  ];
  return (
    <div>
      <Headline
        title="MEIOS DE ATUAÇÃO"
        description="Conteúdos digitais já desenvolvidos"
      />

      <CustomCarousel>
        {contents.map((content, key) => (
          <SwiperSlide key={key}>
            <div className="h-100 row px-3">
              <div className="h-100 col-12 col-lg-4 h3 text-white d-flex justify-content-center align-items-center flex-column text-center">
                {content.title}
                <p>
                  Para visualizar os conteúdos realizados acesse nossas redes
                </p>
              </div>
              <div className="h-100 d-flex justify-content-center align-items-center col-12 col-lg-8">
                <Image
                  src={content.image}
                  alt=""
                  height={500}
                  objectFit="contain"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </CustomCarousel>
    </div>
  );
}
