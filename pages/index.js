import MainHeader from "../components/Header";
import AboutUs from "../components/Homepage/AboutUs";
import HeroSection from "../components/Homepage/HeroSection";
import NewsAndBlogs from "../components/Homepage/NewsAndBlogs";
import Partners from "../components/Homepage/Partners";
import Projects from "../components/Homepage/Projects";
import Publication from "../components/Homepage/Publication";
import Testimony from "../components/Homepage/Testimony";

export default function Home({ newsAndBlogs }) {
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
  const res = await fetch(
    "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=ce04abf35fd24923ad803b12003dfda3"
  );
  const result = await res.json();
  const filteredresult = result.articles;
  // const updatedNews = filteredresult.splice(1, 1);
  filteredresult.splice(17, 1);
  //  this because one data is not have image

  return {
    props: {
      newsAndBlogs: filteredresult,
    },
  };
}
