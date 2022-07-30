import * as React from "react";
import styled from '@emotion/styled'


import {NavBar,NavBarList,NavItem} from './NavBar'

const NavBarContainer = styled('div')({
  display: 'flex',
  justifyContent: 'center'
})

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
