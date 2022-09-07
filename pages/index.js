import MainHeader from "../components/Header";
import AboutUs from "../components/Homepage/AboutUs";
import HeroSection from "../components/Homepage/HeroSection";
import NewsAndBlogs from "../components/Homepage/NewsAndBlogs";
import Partners from "../components/Homepage/Partners";
import Projects from "../components/Homepage/Projects";
import Publication from "../components/Homepage/Publication";
import Testimony from "../components/Homepage/Testimony";
export default function Home({ newsAndBlogs }) {
  console.log(newsAndBlogs);
  return (
    <>
      <MainHeader title="ECFF Home" />
      <HeroSection />
      <Projects />
      <AboutUs />
      <Publication />
      <Testimony />
      <NewsAndBlogs newsAndBlogs={newsAndBlogs} />
      <Partners />
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos");
  const result = await res.json();

  return {
    props: {
      newAndBlogs: result.data,
    },
  };
}
