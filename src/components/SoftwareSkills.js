import React from "react";
// import { skillsData } from "../ResumeData";
import { SoftwareSkillsData } from "../ResumeData1";
import Title from "./Shared/Title";

export const SoftwareSkills = () => {
  return (
    <section className="skills section" id="softwareSkills">
    <Title title={SoftwareSkillsData.title}></Title>
    <div className="skills__content bd-grid">
      {SoftwareSkillsData.skills.map((skill, i) => (
        <ul className="skills__data" key={i}>
          {skill.map((subSkill, k) => (
            <li className="skills__name" key={k}>
              <span className="skills__circle"> </span>
              {subSkill}
            </li>
          ))}
        </ul>
      ))}
    </div>
  </section>
  )
}



