import Footer from "../components/Footer";
import MainHeader from "../components/Header";
import AboutUs from "../components/Homepage/AboutUs";
import HeroSection from "../components/Homepage/HeroSection";
import Partners from "../components/Homepage/Partners";
import Projects from "../components/Homepage/Projects";
import Publication from "../components/Homepage/Publication";
import Testimony from "../components/Homepage/Testimony";
export default function Home() {
  return (
    <>
      <MainHeader title="ECFF Home" />
      <HeroSection />
      <Projects />
      <AboutUs />
      <Publication />
      <Testimony />
      <Partners />
    </>
  );
}
