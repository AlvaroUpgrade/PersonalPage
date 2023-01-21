import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./Experience.scss";

const Experience = () => {
  const { experience } = useContext(Context);

  return (
    <div>
      <h2>Experience</h2>
      <div className="experience-cards">
        {experience.map((items) => {
          return (
            <div key={items.name} className="experience-cards-eachCard">
              <h1>{items.name}</h1>
              <h3>{items.where}</h3>
              <p>{items.description}</p>
              <h5>{items.date}</h5>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;
