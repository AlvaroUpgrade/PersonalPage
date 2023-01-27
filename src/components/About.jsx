import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const { personalData } = useContext(Context);

  return (
    <div className="aboutCard" id="about">
      <div className="aboutInfo-box">
        <div className="aboutInfo-content">
          <div className="image">
            <img src={personalData.image} alt="Foto de Perfil" />
          </div>
          <div className="text">
            <h2>
              {personalData.name} {personalData.lastName}
            </h2>
            <p> {personalData.aboutMe} </p>
            <a href={personalData.linkedIn} target="_blank" rel="noreferrer">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
