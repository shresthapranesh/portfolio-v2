import * as React from "react";
import {
  Alignment,
  Button,
  Classes,
  Navbar,
  NavbarGroup,
  NavbarHeading, H1, Tabs, Tab
} from "@blueprintjs/core";
import {useRouter} from "next/router";
import * as navStyle from '../styles/navbar.module.css'


const navContainer = {
  maxWidth: "50vw",
  margin: "auto",
}

export default function Navigationbar() {
  const router = useRouter()
  const [iconOnly,setIconOnly] = React.useState(false)
  React.useEffect(() => {
    if (window.innerWidth<700)
      setIconOnly(true)
    window.addEventListener('resize', () => {
      if (window.innerWidth < 700)
        setIconOnly(true)
      else
        setIconOnly(false)
    })
  }, [])

  return (
      <div style={navContainer}>
        <Navbar className={navStyle.default.btn}>
          <NavbarGroup align={Alignment.CENTER}>
              <Button role="tab" minimal icon="home" onClick={() => router.push("/")} > {!iconOnly && "Home"} </Button>
              <Button role="navigation" minimal icon="chat" onClick={() => router.push("/contact")} > {!iconOnly && "Contact"} </Button>
              <Button role="navigation" minimal icon="build" onClick={() => router.push("/skills")} > {!iconOnly && "Skills"} </Button>
              <Button role="navigation" minimal icon="projects" onClick={() => router.push("/projects")} > {!iconOnly && "Projects"} </Button>
          </NavbarGroup>
        </Navbar>
      </div>
  );
};
