import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./About.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const About = () => {
  const { personalData } = useContext(Context);

  return (
    <div className="aboutCard" id="about">
      <h2>About Me</h2>
      <p> {personalData.aboutMe} </p>
      <a href={personalData.linkedIn} target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      {/* <a href="www.linkedin.com/in/alvaro-ruiz-navarro">
        
      </a> */}
    </div>
  );
};

export default About;
