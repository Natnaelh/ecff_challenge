import Navabr from "../components/NavBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navabr />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
