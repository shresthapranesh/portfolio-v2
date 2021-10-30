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

const navContainer = {
  maxWidth: "50vw",
  margin: "auto",
}

export default function Navigationbar() {
  const router = useRouter()
  const hasWindow = typeof window !== 'undefined';
  const getWidth = () => {
    return hasWindow ? window.innerWidth : null
  }
  let iconOnly = true
  const [width,setWidth] = React.useState(getWidth())
  React.useEffect(() => {
    if (hasWindow){ 
      const handleResize = () => setWidth(getWidth())
      window.addEventListener('resize', handleResize)
      return ()  => window.removeEventListener('resize',handleResize)
    }
  }, [hasWindow])

  if (width !== 'null' && width <= 700) {
    iconOnly = true
  } else {
    iconOnly = false
  }

  return (
      <div style={navContainer}>
        <Navbar>
          <NavbarGroup align={Alignment.CENTER}>
              <Button className={Classes.MINIMAL} icon="home" onClick={() => router.push("/")} > {!iconOnly && "Home"} </Button>
              <Button className={Classes.MINIMAL} icon="chat" onClick={() => router.push("/contact")} > {!iconOnly && "Contact"} </Button>
              <Button className={Classes.MINIMAL} icon="build" onClick={() => router.push("/skills")} > {!iconOnly && "Skills"} </Button>
              <Button className={Classes.MINIMAL} icon="projects" onClick={() => router.push("/projects")} > {!iconOnly && "Projects"} </Button>
          </NavbarGroup>
        </Navbar>
      </div>
  );
};
