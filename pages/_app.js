// pages/_app.js
import "../styles/App.css";
import "../styles/index.css"; // Path to your global CSS file
import "../styles/projects.css";
import "../styles/tailwind.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
