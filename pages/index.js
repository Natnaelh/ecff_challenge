import Footer from "../components/Footer";
import MainHeader from "../components/Header";
import AboutUs from "../components/Homepage/AboutUs";
import HeroSection from "../components/Homepage/HeroSection";
import Projects from "../components/Homepage/Projects";
import Publication from "../components/Homepage/Publication";
export default function Home() {
  return (
    <>
      <MainHeader title="ECFF Home" />
      <HeroSection />
      <Projects />
      <AboutUs />
      <Publication />
    </>
  );
}
