import Button from "@/components/Button";


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
        Emilia
      </h2>
      <h3
        className="hero-title-large hero-title-sub"
      >
        I am software developer and QA tester.
      </h3>
      <p
        className="hero-text"
      >
        I&apos;m a software tester looking for my first professional job as a Front-End developer. Over the last year, I have been working as a QA constantly developing. Of course, I always known that programming is something which every tester must know, this is why I started learn the very basics of what I test, so Front-End. I did not even notced when i fall in love with coding so much that I finished a course and developed my first website. I believe that being Front-End developer would be know the best for mysefl and enjoy. &nbsp;

      </p>
      <div
        className="hero-button"
      >
        <Button
          text="My projects"
          link="#projects"
        />
      </div>
    </div>
  );
}

export default Hero;