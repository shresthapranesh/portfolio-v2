import Link from "next/link";
import { useRouter } from "next/router";

const handleClick = (x) => {
  const navigation = document.querySelector(".nav-content");
  document.querySelector(x).classList.toggle("change");
  if (
    navigation.querySelector("nav").style.display == "none" ||
    navigation.querySelector("nav").style.display == ""
  )
    navigation.querySelector("nav").style.display = "flex";
  else navigation.querySelector("nav").style.display = "none";
};

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="navigation">
      <div className="nav-content">
        <Link href="/">
          <a className="myName">
            <span>Pranesh Shrestha</span>
          </a>
        </Link>

        <nav>
          <Link href="/">
            <a className={router.pathname == "/" ? "active" : ""}> Home </a>
          </Link>
          <Link href="/skills">
            <a className={router.pathname == "/skills" ? "active" : ""}>
              {" "}
              Skills{" "}
            </a>
          </Link>
          <Link href="/projects">
            <a className={router.pathname == "/projects" ? "active" : ""}>
              {" "}
              Projects{" "}
            </a>
          </Link>
          <Link href="/contact">
            <a className={router.pathname == "/contact" ? "active" : ""}>
              {" "}
              Contact{" "}
            </a>
          </Link>
          <Link href="/resume">
            <a className={router.pathname == "/resume" ? "active" : ""}>
              Resume
            </a>
          </Link>
        </nav>
        <div className="ham" onClick={() => handleClick(".ham")}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
