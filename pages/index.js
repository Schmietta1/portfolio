// pages/index.js

import Head from "next/head";
import React from "react";
import About from "../component/About";
import Banner from "../component/Banner";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import LinkToPdf from "../component/Links.tsx";
import Projects from "../component/Projects";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-500">
      <Head>
        <title>Schmietta&apos;s portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website."
        />
        <link rel="icon" href="/iconFirst.ico" />
      </Head>
      <main className="flex-grow">
        <div className="text-white text-center py-8 lg:py-16 mx-auto">
          <Banner />
        </div>
        <div className="text-white text-center py-6 lg:py-12 mx-auto">
          <About />
        </div>
        <div className="text-white text-center py-6 lg:py-12 mx-auto">
          <Contact />
          <div className="flex-none font-bold text-center text-white">
            <LinkToPdf pdfUrl="/pdfs/thomasCVFrancais.pdf" linkText="CV(FR)" />
            <LinkToPdf pdfUrl="/pdfs/thomasCVEnglish.pdf" linkText="CV(EN)" />
          </div>
        </div>
        <div className="text-white text-center py-6 lg:py-12">
          <Projects />
        </div>
      </main>
      <span className="flex-none">
        <Footer />
      </span>
    </div>
  );
}
