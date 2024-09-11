import React from "react";
import Hero from "./components/hero/Hero";
import Credibility from "./components/credibility/Credibility";
import Services from "./components/services/Services";
import QuickInfo from "./components/quickInfo/QuickInfo";
import Stats from "./components/stats/Stats";
import Contact from "./components/contact/Contact";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <QuickInfo />
      <Stats />
      <Contact />
    </div>
  );
};

export default Home;
