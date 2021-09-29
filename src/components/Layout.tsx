import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";
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
        <main className="overflow-hidden d-flex flex-column">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
