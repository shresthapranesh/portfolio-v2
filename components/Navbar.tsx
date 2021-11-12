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
import navStyle from '../styles/navbar.module.css'


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
        <Navbar>
          <NavbarGroup align={Alignment.CENTER}>
              <Button className={navStyle.navbtn} minimal icon="home" onClick={() => router.push("/")} > {!iconOnly && "Home"} </Button>
              <Button className={navStyle.navbtn} minimal icon="chat" onClick={() => router.push("/contact")} > {!iconOnly && "Contact"} </Button>
              <Button className={navStyle.navbtn} minimal icon="build" onClick={() => router.push("/skills")} > {!iconOnly && "Skills"} </Button>
              <Button className={navStyle.navbtn} minimal icon="projects" onClick={() => router.push("/projects")} > {!iconOnly && "Projects"} </Button>
          </NavbarGroup>
        </Navbar>
      </div>
  );
};
