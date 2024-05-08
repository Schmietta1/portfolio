// pages/index.js
import Head from "next/head";
import Banner from "../component/Banner.js";
import Footer from "../component/Footer.js";
import Projects from "../component/Projects.js";

export default function Home() {
  return (
    <div>
      <div className="App pb-20 min-h-screen bg-custom-image bg-fixed bg-center bg-cover bg-no-repeat">
        <Head>
          <title>Schmietta&apos;s portfolio</title>
          <meta
            name="description"
            content="Welcome to my personal portfolio website."
          />
          <link rel="icon" href="/iconFirst.ico" />
        </Head>
        <Banner />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}
