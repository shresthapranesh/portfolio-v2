import * as React from "react";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading, H1
} from "@blueprintjs/core";
import {useRouter} from "next/router";



export default function Navigationbar() {
  const router = useRouter()

  return (
      <Navbar>
        <NavbarGroup align={Alignment.LEFT}>
          <NavbarHeading> <h2> Pranesh Shrestha </h2></NavbarHeading>
        </NavbarGroup>
        <NavbarGroup align={Alignment.RIGHT}>  
            <Button className={Classes.MINIMAL} icon="home" text="Home" onClick={() => router.push("/")} />
            <Button className={Classes.MINIMAL} icon="chat" text="Contact" onClick={() => router.push("/contact")} />
            <Button className={Classes.MINIMAL} icon="build" text="Skills" onClick={() => router.push("/skills")} />
            <Button className={Classes.MINIMAL} icon="projects" text="Projects" onClick={() => router.push("/projects")} />
        </NavbarGroup>
      </Navbar>
  );
};
