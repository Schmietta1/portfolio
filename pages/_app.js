// pages/_app.js
import "../styles/index.css"; // Path to your global CSS file
import "../styles/projects.css";
import "../styles/tailwind.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
