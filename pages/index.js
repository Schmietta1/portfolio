// pages/index.js
import Head from "next/head";
import Banner from "../component/Banner.js";
import Footer from "../component/Footer.js";
import Projects from "../component/Projects.js";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Schmietta&apos;s portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website."
        />
        <link rel="icon" href="/iconFirst.ico" />
      </Head>

      <main>
        <Banner />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
