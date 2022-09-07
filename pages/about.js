import MainHeader from "../components/Header";
import Hero from "../components/AboutPage/Hero";
import AboutECFF from "../components/AboutPage/AboutECFF";
import MissionAndVision from "../components/AboutPage/MissionAndVision";
import Story from "../components/AboutPage/Story";

export default function About({ Aboutdata }) {
  return (
    <div className="w-full h-full">
      <MainHeader title="ECFF About" />
      <Hero />
      <AboutECFF Aboutdata={Aboutdata} />
      <MissionAndVision />
      <Story />
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://fakerapi.it/api/v1/custom?_quantity=4&count=number&title=word"
  );
  const data = await res.json();
  return {
    props: {
      Aboutdata: data.data,
    },
  };
}
