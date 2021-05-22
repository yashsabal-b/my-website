import React, { useState } from "react";
import AboutMe from "../components/AboutMe/AboutMe";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import HeroSection from "../components/HeroSection/HeroSection";
import Navbar from "../components/Navbar/Navbar";
import Projects from "../components/Projects/Projects";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  const [isOpen, setIsopen] = useState(false);

  const toggle = () => {
    setIsopen(!isOpen);
  };
  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <AboutMe />
      <Projects />
      <Cards />
      <Footer />
    </>
  );
}

export default Home;
