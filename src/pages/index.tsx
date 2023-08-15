import Head from "next/head";
import SocialIcons from "@/components/SocialIcons";
import Hero from "@/sections/Hero";
import Navbar from "@/sections/Navbar";
import Contact from "@/sections/Contact";
import Projects from "@/sections/Projects";

function Index() {

  return (
    <div className="app">
      <Head>
        <title>Emilia Buczek</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
        <>
          <Navbar />
          <SocialIcons />
          <main>
            <Hero />
            <Projects />
            <Contact />
          </main>
        </>
    </div>
  );
}

export default Index;