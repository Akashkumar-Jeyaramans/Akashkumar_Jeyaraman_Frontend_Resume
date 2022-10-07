import React from 'react'
import Main from "./components/HOC/Main";
import Left from "./components/HOC/Left";
import Right from "./components/HOC/Right";
import Home from "./components/Home/Home";
import "./index.css";
import Social from "./components/Social/Social";
import Profile from "./components/Profile";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Languages from "./components/Languages";
import Interests from "./components/Interests";
import { Projects } from "./components/Projects";
import { SoftwareSkills } from "./components/SoftwareSkills";

export const Layout = () => {
  return (
   <>
    <Main  >
        <Left>
          <Home />
          <Social />
          <Profile />
          <Certificates />
          <Skills />
          <SoftwareSkills/>
          <Languages />
          <Interests />
        </Left>
        <Right>
          <Experience />
          <Projects />
          <Education />
        </Right>
      </Main>
   
   </>
  )
}
