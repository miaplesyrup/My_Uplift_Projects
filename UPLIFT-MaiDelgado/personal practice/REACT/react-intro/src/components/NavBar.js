import React from "react";

function NavBar() {
  const upliftLogo =
    "https://www.upliftcodecamp.com/_next/image?url=%2Fimages%2Fuplift-nav.png&w=3840&q=75";
  return (
    <nav>
      <img src={upliftLogo} alt="uplift-logo" />
    </nav>
  );
}

export default NavBar;
