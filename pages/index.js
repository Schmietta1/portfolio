// pages/index.js
import Head from "next/head";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import Projects from "../component/Projects";

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
      <Banner />
      <Projects />
      <Footer />
    </div>
  );
}
