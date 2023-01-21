import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./HabilitiesAndLanguages.scss";

const HabilitiesAndLanguages = () => {
  const { habilities, languages } = useContext(Context);

  return (
    <div className="container" id="habilities&languages">
      <div className="container-habilities">
        <h2>Habilities</h2>
        {habilities.map((items) => {
          return (
            <div key={items} className="container-habilities-each">
              <p>{items}</p>
            </div>
          );
        })}
      </div>
      <div className="container-languages">
        {languages.map((items) => {
          return (
            <div key={items.language} className="container-languages-each">
              <h2>{items.language}</h2>
              <p>Level: {items.level}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HabilitiesAndLanguages;
