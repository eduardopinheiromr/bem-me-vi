import Head from "next/head";
import Header from "components/Header";
import Footer from "components/Footer";
import { useState } from "react";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
      <div onClick={() => toggleMenu && setToggleMenu(false)}>
        <main className="overflow-hidden">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
