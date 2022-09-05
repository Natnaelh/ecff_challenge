import MainHeader from "../components/Header";
import AboutUs from "../components/Homepage/AboutUs";
import HeroSection from "../components/Homepage/HeroSection";
import Projects from "../components/Homepage/Projects";
export default function Home() {
  return (
    <>
      <MainHeader title="ECFF Home" />
      <HeroSection />
      <Projects />
      <AboutUs />
    </>
  );
}
