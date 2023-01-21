import React from "react";
import "./PersonalData.scss";

const PersonalData = ({ personalData }) => {
  return (
    <div className="asideData">
      <div className="asideCard">
        <p>🗺️{personalData.city}</p>
        <p>🗓️{personalData.birthDate}</p>
        <p>📱{personalData.phone}</p>
        <p>
          📧
          <a href={"Email: " + personalData.email}>alvaro@gmail.com</a>
        </p>
        <p>
          💾<a href={personalData.gitHub}>Github</a>
        </p>
      </div>
    </div>
  );
};

export default PersonalData;
