import Button from "@/components/Button";
import Link from "next/link";
import React from "react";

function Hero() {
  return (
    <div className="hero">
      <h1
        className="hero-title"
      >
        Hi my name is
      </h1>
      <h2
        className="hero-title-large"

      >
        Emilia.
      </h2>
      <h3
        className="hero-title-large hero-title-sub"

      >
        I craft things for the web.
      </h3>
      <p
        className="hero-text"
      >
        I&apos;m a software tester. My current focus is on developing products that are
        accessible and centered around user needs. I would love to foucus on the development as a &nbsp;
        <Link href="https://rapidops.com" target="_blank" className="link">
        Front-End developer.
        </Link>
      </p>
      <div
        className="hero-button"
      >
        <Button
          text="Check out my projects"
          link="#projects"
        />
      </div>
    </div>
  );
}

export default Hero;