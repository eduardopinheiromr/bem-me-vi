import Image from "next/image";
import styled from "styled-components";

const HeaderContainer = styled.header`
  font-family: "Livvic", sans-serif;
  text-transform: uppercase;

  nav {
    z-index: 10;
    display: flex;
    position: relative;
    justify-content: center;
    min-height: 80px;
    padding: 0 25%;

    .logo {
      position: absolute;
      left: 0;
      height: 100%;
      padding: 5px 10px;
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
      right: 15px;
      top: 15px;
    }

    .bmv-primary-btn {
      position: absolute;
      top: 70px;
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
    { label: "Público Beneficiado", href: "#publico-beneficiado" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <HeaderContainer>
      <nav className="bg-primary-bmv pb-3 pb-lg-0">
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
          className={`mb-0 flex-column flex-md-row pt-5 pt-md-0 mt-md-0 d-md-flex ${
            toggleMenu ? "d-flex" : "d-none"
          }`}
        >
          {links.map((link, key) => (
            <li
              key={key}
              className="py-3 py-lg-4 hover-scale-up cursor-pointer"
              onClick={() => setToggleMenu(false)}
            >
              <a draggable="false" href={link.href}>
                {link.label}
              </a>
            </li>
          ))}
          <li className="d-block d-md-none">
            <a
              className="bmv-primary-btn"
              href="#quero-apoiar"
              onClick={() => setToggleMenu(false)}
            >
              <span>QUERO APOIAR!</span>
            </a>
          </li>
        </ul>
        <a
          className="bmv-primary-btn hover-scale-up d-none d-md-block"
          href="#quero-apoiar"
        >
          <span>QUERO APOIAR!</span>
        </a>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
