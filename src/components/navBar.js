import React from "react";
import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import {
  FaTwitter
} from 'react-icons/fa'

const NavBar = ({skillsRef, bannerRef, projectsRef, contactRef}) => {

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth'
    })
  }

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, onScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        onScrolled(true);
      } else {
        onScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          {/* <img src={logo} alt="logo" /> */}
          <div style={{color: 'white'}} >ADETOMI</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navBar-toggle-icon"> </span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              href="/"
              className={
                activeLink === "home" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => setActiveLink("home")}
            >
              Home
            </Nav.Link>
            <Nav.Link
              // href="#skills"
              className={
                activeLink === "skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {setActiveLink("skills"); handleScroll(skillsRef.current)}}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              // href="#projects"
              className={
                activeLink === "projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={() => {setActiveLink("projects"); ; handleScroll(projectsRef.current)}}
            >
              Projects
            </Nav.Link>
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://linkedin.com/in/adetomi-aderibigbe">
                {" "}
                <img src={navIcon1} alt="" />{" "}
              </a>
              <a href="https://twitter.com/adetomii_">
                {" "}
                {/* <img src={navIcon2} alt="" />{" "} */}
                <FaTwitter style={{color: 'white'}} />
              </a>
              {/* <a href="#">
                {" "}
                <img src={navIcon3} alt="" />{" "}
              </a> */}
            </div>
            <button className="vvd" onClick={() => handleScroll(contactRef.current)}>
              <span> Let's Connect</span>
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
