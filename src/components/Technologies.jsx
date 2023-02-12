import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./Technologies.scss";

const Technologies = () => {
  const { technologies } = useContext(Context);
  return (
    <div id="technologies" className="technologies">
      <div className="technologies-box">
        <h1>Technologies</h1>
        <div className="technologies-cards">
          {technologies.map((items) => {
            return (
              <div key={items.name} className="technologies-cards-eachCard">
                <div className="front">
                  <img src={items.image} alt={items.name}></img>
                </div>
                <div className="back">
                  <h2>{items.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
