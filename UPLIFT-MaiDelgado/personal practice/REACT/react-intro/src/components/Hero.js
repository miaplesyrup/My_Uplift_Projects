import Button from "./Button";

function Hero() {
  return (
    <section className={"hero"}>
      <h1>
        Launch your career in <span>software development</span>
      </h1>
      <h2>
        Affordable, high-quality web development code camp. Learn to code
        full-stack with one-on-one coaching and the support of career mentors.
      </h2>
      <Button buttonText="Enroll Today!" />
    </section>
  );
}

export default Hero;
