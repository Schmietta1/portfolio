// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Welcome to my personal portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to My Portfolio!
        </h1>
        <p className="mt-3 text-2xl">
          Check out my projects and blog posts.
        </p>

        {/* Add sections for projects, about me, etc. */}
      </main>

      <footer className="w-full h-12 flex justify-center items-center border-t">
        {/* You can add footer information or social links here */}
      </footer>
    </div>
  );
}
