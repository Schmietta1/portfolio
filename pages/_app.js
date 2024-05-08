// pages/_app.js
import "../styles/tailwind.css";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default App;
