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
                <h3>{items.name}</h3>
                <h3>{items.level}</h3>
                <img src={items.image} alt={items.name}></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Technologies;
