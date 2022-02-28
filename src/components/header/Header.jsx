import React, { useState } from "react";
import NavBar from "./NavBar";
import CartWidget from "./CartWidget";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import NavButton from "./NavButton";
import logo from "../../assets/logo/majula.png";

const Header = ({ title }) => {
  const [nav, setNav] = useState(false);
  const [catOpen, setCatOpen] = useState(false);

  const navegation = () => {
    setNav(!nav);
    setCatOpen(false);
  };

  const closeAll = () => {
    setNav(false);
    setCatOpen(false);
  };

  return (
    <>
      <header className="header">
        <NavButton nav={nav} navegation={navegation} />
        <div className="title">
          <Link to="/">
            <h1 className="title__h1" onClick={() => closeAll()}>
              {" "}
              {title}{" "}
            </h1>
          </Link>
          <img src={logo} alt="majulaLogo" />
        </div>

        <div className="header__assets">
          <NavBar
            nav={nav}
            setNav={setNav}
            catOpen={catOpen}
            setCatOpen={setCatOpen}
            closeAll={closeAll}
          />
          <CartWidget closeAll={closeAll} />
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
