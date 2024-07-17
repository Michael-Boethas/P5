import React from "react";
import Banner from "../../components/Banner/Banner";
import Collapse from "../../components/Collapse/Collapse";
import aboutList from "../../data/about.json";

export default function About() {
  return (
    <>
      <Banner page="about" />
      <section className="about-section">
        {aboutList.map((aboutSection) => (
          <Collapse
            key={aboutSection.heading}
            heading={aboutSection.heading}
            text={aboutSection.text}
          />
        ))}
      </section>
    </>
  );
}
