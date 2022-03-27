import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const PageTags = () => {
  const router = useRouter();
  const url = "https://www.bemmevi.com.br";
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />

      <meta name="robots" content="follow, index" />
      <meta
        name="author"
        content="Eduardo Pinheiro - https://edupinheiro.dev/"
      />
      <meta property="og:url" content={url + router.asPath} />

      <link rel="canonical" href={url + router.asPath} />

      <title>
        Bem Me Vi - Vamos juntos criar a maior rede de jovens artistas
        periféricos do Brasil!
      </title>
      <meta
        name="title"
        content="Bem Me Vi - Vamos juntos criar a maior rede de jovens artistas periféricos do Brasil!"
      />
      <meta
        name="description"
        content="O Bem Me Vi é um projeto social que tem como objetivo dar visibilidade para jovens artistas. Promovendo o desenvolvimento e autonomia dos jovens enquanto artistas periféricos, dispondo ferramentas para viver de sua arte e valorizando seu papel na cultura do País."
      />
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.bemmevi.com.br/" />
      <meta
        property="og:title"
        content="Bem Me Vi - Vamos juntos criar a maior rede de jovens artistas periféricos do Brasil!"
      />
      <meta
        property="og:description"
        content="O Bem Me Vi é um projeto social que tem como objetivo dar visibilidade para jovens artistas. Promovendo o desenvolvimento e autonomia dos jovens enquanto artistas periféricos, dispondo ferramentas para viver de sua arte e valorizando seu papel na cultura do País."
      />
      <meta
        property="og:image"
        content="https://bemmevi.com.br/assets/images/capa.png"
      />
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.bemmevi.com.br/" />
      <meta
        property="twitter:title"
        content="Bem Me Vi - Vamos juntos criar a maior rede de jovens artistas periféricos do Brasil!"
      />
      <meta
        property="twitter:description"
        content="O Bem Me Vi é um projeto social que tem como objetivo dar visibilidade para jovens artistas. Promovendo o desenvolvimento e autonomia dos jovens enquanto artistas periféricos, dispondo ferramentas para viver de sua arte e valorizando seu papel na cultura do País."
      />
      <meta
        property="twitter:image"
        content="https://bemmevi.com.br/assets/images/capa.png"
      />
    </Head>
  );
};

export default PageTags;
