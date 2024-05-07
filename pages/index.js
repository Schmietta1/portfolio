// pages/index.js
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta
          name="description"
          content="Welcome to my personal portfolio website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to My Portfolio!</h1>
        <p className={styles.description}>
          Check out my projects and blog posts.
        </p>

        {/* Add sections for projects, about me, etc. */}
      </main>

      <footer className={styles.footer}>
        {/* You can add footer information or social links here */}
      </footer>
    </div>
  );
}
