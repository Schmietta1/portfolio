// pages/index.js
import Head from "next/head";
import Banner from "../component/Banner.js";
import Footer from "../component/Footer.js";
import Projects from "../component/Projects.js";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <Banner />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}
