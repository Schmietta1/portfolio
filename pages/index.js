import Head from "next/head";
import About from "../component/About";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import LinkToPdf from "../component/Links.tsx";
import Projects from "../component/Projects";

// pages/index.js

export default function Home() {
  return (
    <div className="bg-gray-500 min-h-screen">
      <Head>
        <title>Schmietta&apos;s portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website."
        />
        <link rel="icon" href="/iconFirst.ico" />
      </Head>
      <div className="flex">
        <div className="absolute font-bold items-center justify-start text-white">
          <LinkToPdf pdfUrl="/pdfs/thomasCVFrancais.pdf" linkText="CV(FR)" />
          <LinkToPdf pdfUrl="/pdfs/thomasCVEnglish.pdf" linkText="CV(EN)" />
        </div>
        <div className="text-white text-center py-8 lg:py-16 mx-auto">
          <Banner />
        </div>
      </div>
      <div className="text-white text-center py-6 lg:py-12 mx-auto">
        <About />
      </div>
      <div className="text-white text-center py-6 lg:py-12">
        <Projects />
      </div>
      <Footer />
    </div>
  );
}
