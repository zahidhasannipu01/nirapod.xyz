import React from "react";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import QuickInfo from "./components/quickInfo/QuickInfo";
import Stats from "./components/stats/Stats";
import Contact from "./components/contact/Contact";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

const Home = () => {
  const {
    site_title,
    site_tagline,
    meta_title,
    meta_description,
    meta_keywords,
  } = useSelector((state) => state.website);
  return (
    <>
      <Helmet>
        <title>
          {site_title} | {site_tagline}
        </title>
        <meta name="title" content={meta_title} />
        <meta name="description" content={meta_description} />
        <meta name="keywords" content={meta_keywords} />
        <link rel="canonical" href="/" />
      </Helmet>
      <div>
        <Hero />
        <Services />
        <QuickInfo />
        <Stats />
        <Contact />
      </div>
    </>
  );
};

export default Home;
