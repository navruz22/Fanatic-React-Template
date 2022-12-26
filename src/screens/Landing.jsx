import React from "react";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Services from "../components/Sections/Services";
import Projects from "../components/Sections/Projects";
import Blog from "../components/Sections/Blog";
import Pricing from "../components/Sections/Pricing";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer";
import "../style/index.css";
import "../style/flexboxgrid.min.css";
import Partners from "../components/Sections/Partners";
import Benefits from "../components/Sections/Benefits";

export default function Landing() {
  return (
    <>
      <TopNavbar />
      <Header />
      <Benefits />
      <Projects />
      <Services />
      <Partners />
      {/* <Blog />
            <Pricing /> */}
      <Contact />
      <Footer />
    </>
  );
}
