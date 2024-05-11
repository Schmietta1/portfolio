// pages/index.js
import Head from "next/head";
import Banner from "../component/Banner";
import Footer from "../component/Footer";
import LinkToPdf from "../component/Links.tsx";
import Projects from "../component/Projects";

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
      <Banner />
      <LinkToPdf pdfUrl="/pdfs/thomasCVFrancais.pdf" linkText="CV" />
      <Projects />
      <Footer />
    </div>
  );
}
