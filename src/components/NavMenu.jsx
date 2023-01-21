import React, { useContext } from "react";
import { Link } from "react-scroll";
import { Context } from "../shared/Contexts/Context";
import "./NavMenu.scss";

const NavMenu = ({ personalData }) => {
  return (
    <div className="data">
      <div className="imageAndname">
        <img src={personalData.image} alt="Foto de Perfil" />
        <h2>
          {personalData.name} {personalData.lastName}
        </h2>
      </div>
      <div className="options">
        <Link to="about" spy={true} smooth={true} offset={50} duration={500}>
          About Me
        </Link>
        <Link to="education" spy={true} smooth={true} offset={50} duration={500}>
          Education
        </Link>
        <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>
          Experience
        </Link>
        <Link to="habilities&languages" spy={true} smooth={true} offset={50} duration={500}>
          Habilities & Languages
        </Link>
      </div>
    </div>
  );
};

export default NavMenu;
