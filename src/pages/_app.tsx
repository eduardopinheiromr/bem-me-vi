import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "components/Layout";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.bg-primary{
  background: #2F80ED;
}
.text-primary{
  color: #2F80ED;
}
  .bmv-primary-btn {
    /* background: linear-gradient(90deg, #fbd408 0%, #ffefa0 50%, #fbd408 100%); */
    background: linear-gradient(90deg, #2F80ED 0%, #7ab3fe 50%, #2F80ED 100%);
    border: 5px solid #fff;
    border-radius: 9px;
    padding: 25px 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }
  .bmv-primary-btn:hover{
    color: #fff;
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
