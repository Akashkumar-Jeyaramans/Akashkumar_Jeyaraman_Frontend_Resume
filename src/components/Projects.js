import React from 'react'
import { projectData } from "../ResumeData1";
import Title from "./Shared/Title";
export const Projects = () => {
  return (
    <section className="experience section" id="projects">
      <Title title={projectData.title} />
      <div className="experience__container bd-grid">
        {projectData.experiences.map((experience, i) => (
          <div className="experience__content" key={i}>
            <div className="experience__time">
              <span className="experience__rounder" />

              {experience.line && <span className="experience__line"></span>}
            </div>
            <div className="experience__data bd-grid">
              <h3 className="experience__title">{experience.title}</h3>
              <span className="experience__company">{experience.company}</span>
              <p className="experience__description">{experience.describe}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}


