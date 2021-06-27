import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Layout from "components/Layout";
import { GlobalStyle } from "styles/global";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  );
}
