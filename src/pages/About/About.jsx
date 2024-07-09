import Banner from "../../components/Banner/Banner.jsx";
import Collapse from "../../components/Collapse/Collapse.jsx";
import aboutList from "../../data/about.json";

export default function About() {
  return (
    <>
      <Banner page="about" />
      <section className="about-section">
        {aboutList.map((aboutInfo) => (
          <Collapse key={aboutInfo.heading} data={aboutInfo} />
        ))}
      </section>
    </>
  );
}
