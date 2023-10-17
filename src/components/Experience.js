import React from "react";
import { experienceData } from "../ResumeData1";
import Title from "./Shared/Title";
const Experience = () => {
  return (
    <section className="experience section" id="experience">
      <Title title={experienceData.title} />
      <div className="experience__container bd-grid">
        {experienceData.experiences.map((experience, i) => (
          <div className="experience__content" key={i}>
            <div className="experience__time">
              <span className="experience__rounder" />

              {experience.line && <span className="experience__line"></span>}
            </div>
            <div className="experience__data bd-grid">
              <h3 className="experience__title">{experience.title}</h3>
              <span className="experience__company">{experience.company}</span>
              {/* {experience.describe.map((point,i)=>(
                <p key={i}>{point.data}</p>
              ))} */}
              {/* <p className="experience__description">{experience.describe}</p> */}
              {
                experience.describe.map((ex,i)=>(
                  <ul key={i}>
                    <li>{ex.p1}</li>
                    <li>{ex.p2}</li>
                    <li>{ex.p3}</li>
                    <li>{ex.p4}</li>
                    <li>{ex.p5}</li>
                    <li>{ex.p6}</li>
                    <li>{ex.p7}</li>
                  </ul>
                ))
              }
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
