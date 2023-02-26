import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { NavBarList } from "./NavBar/NavBarList";
import { NavItem } from "./NavBar/NavBarItem";

export default function Navigationbar() {
  return (
      <NavBar>
        <NavBarList>
          <NavItem routes="/">Home</NavItem>
          <NavItem routes="contact">Contact</NavItem>
          <NavItem routes="skills">Skills</NavItem>
          <NavItem routes="projects">Project</NavItem>
          <NavItem routes="resume">Resume</NavItem>
        </NavBarList>
      </NavBar>
  );
};
