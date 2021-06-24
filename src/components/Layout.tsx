import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
