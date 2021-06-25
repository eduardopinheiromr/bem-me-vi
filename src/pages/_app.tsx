import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "components/Layout";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.bg-primary-bmv{
  background: #000;
}
.text-primary{
  color: #000;
}
  .bmv-primary-btn {
    background: linear-gradient(90deg, #000 0%, #2f2f2f 50%, #000 100%);
    border: 5px solid #fff;
    border-radius: 9px;
    padding: 25px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
    text-align: center;
  }
  .bmv-primary-btn:hover{
    color: #fff;
  }
  .hover-scale-up{
    transition: .3s;
  }
  .hover-scale-up:hover{
    transform: scale(1.2)
  }
`;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
