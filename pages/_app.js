import Footer from "../components/Footer";
import Navabr from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navabr />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
