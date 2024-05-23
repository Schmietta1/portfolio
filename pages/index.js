// pages/index.js

import Head from "next/head";
import React from "react";
import About from "../component/About";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import Projects from "../component/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-blue-500 to-purple-500">
      <Head>
        <title>Schmietta&apos;s portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website."
        />
        <link rel="icon" href="/iconFirst.ico" />
      </Head>
      <main className="flex-grow">
        <div className="text-white text-center py-12 lg:py-20 mx-auto mb-[5%]">
          <Banner />
        </div>
        <div className="text-white text-center py-10 lg:py-18 mx-auto mb-[5%]">
          <About />
        </div>
        <div className="text-white text-center py-10 lg:py-18 mx-auto mb-[5%]">
          <Contact />
        </div>
        <div className="text-white text-center py-10 lg:py-18 mb-[5%]">
          <Projects />
        </div>
      </main>
      <span className="flex-none">
        <Footer />
      </span>
    </div>
  );
}
