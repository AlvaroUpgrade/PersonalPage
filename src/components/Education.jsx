import React, { useContext } from "react";
import { Context } from "../shared/Contexts/Context";
import "./Education.scss";

const Education = () => {
  const { education } = useContext(Context);
  // console.log(education);
  return (
    <div>
      <h2>Education</h2>
      <div className="education-cards">
        {education.map((items) => {
          return (
            <div key={items.name} className="education-cards-eachCard">
              <h3>{items.name}</h3>
              <p>
                {items.date} / {items.where}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Education;
