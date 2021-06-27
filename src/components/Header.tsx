import Image from "next/image";
import Link from "next/link";
import logoImage from "../../public/assets/images/logo.png";
import styled from "styled-components";

const HeaderContainer = styled.header`
  font-family: "Livvic", sans-serif;
  text-transform: uppercase;

  nav {
    z-index: 10;
    display: flex;
    position: relative;
    justify-content: center;
    min-height: 120px;
    padding: 0 25%;

    .logo {
      position: absolute;
      left: 0;
      height: 100%;
      padding: 10px;
      display: flex;
    }

    ul {
      padding: 0;
      list-style: none;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 980px;

      li a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
      }
    }

    .menu-mobile-btn {
      position: absolute;
      right: 25px;
      top: 30px;
    }

    .bmv-primary-btn {
      position: absolute;
      top: 90px;
    }
    li .bmv-primary-btn {
      position: relative;
      top: 0;
    }

    .menu-btn {
      filter: invert(100);
    }
  }
`;

type Props = {
  toggleMenu: boolean;
  setToggleMenu: (show: boolean) => void;
};

const Header = ({ toggleMenu, setToggleMenu }: Props) => {
  const links = [
    { label: "Quem somos", href: "#quem-somos" },
    { label: "Objetivos", href: "#objetivos" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <HeaderContainer>
      <nav className="bg-primary-bmv">
        <Link href="/" passHref>
          <div
            className="logo align-items-start align-items-md-center ps-lg-5 ms-lg-5"
            onClick={() => setToggleMenu(false)}
          >
            <Image
              placeholder="blur"
              height={100}
              width={150}
              src={logoImage}
              alt="Logo Bem Me Vi"
            />
          </div>
        </Link>
        <div
          className="menu-mobile-btn d-md-none"
          onClick={() => setToggleMenu(!toggleMenu)}
        >
          <Image
            className="menu-btn"
            src="/assets/icons/menu.svg"
            alt="Menu hamburguer para dispositivos móveis"
            height={50}
            width={50}
          />
        </div>
        <ul
          className={`flex-column flex-md-row pt-5 mt-5 pt-md-0 mt-md-0 d-md-flex ${
            toggleMenu ? "d-flex" : "d-none"
          }`}
        >
          {links.map((link, key) => (
            <li
              key={key}
              className="py-5 hover-scale-up cursor-pointer"
              onClick={() => setToggleMenu(false)}
            >
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
          <li className="d-block d-md-none">
            <a
              className="bmv-primary-btn"
              href="#"
              onClick={() => setToggleMenu(false)}
            >
              QUERO AJUDAR!
            </a>
          </li>
        </ul>
        <a
          className="bmv-primary-btn hover-scale-up d-none d-md-block"
          href="#"
        >
          QUERO AJUDAR!
        </a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
