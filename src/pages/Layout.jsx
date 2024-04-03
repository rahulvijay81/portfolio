import React from "react";
import Header from "../components/Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Footer from "../components/Footer";
import Project from "./Project";
import { Element } from "react-scroll";

function Layout() {
  return (
    <>
      <Header />
      <Element name="Home-section">
        <Home />
      </Element>
      <Element name="About-section">
        <About />
      </Element>
      <Element name="Project-section">
        <Project />
      </Element>
      <Element name="Contact-section">
        <Contact />
      </Element>
      <Footer />
    </>
  );
}

export default Layout;
