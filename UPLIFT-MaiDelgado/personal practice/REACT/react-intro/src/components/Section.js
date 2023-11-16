import Button from "./Button";

function Section() {
  return (
    <section className={"BannerBottom"}>
      <div>
        <p>Ready to reach for your dreams?</p>
        <p style={{ color: "blueviolet" }}>Start today. 🚀</p>
      </div>
      <Button buttonText="Apply Now!" />
    </section>
  );
}

export default Section;
