import * as React from "react";
import {NavBar,NavBarList,NavItem} from './NavBar'

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
