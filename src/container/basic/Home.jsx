import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";

export default function Home() {
  const navigate = useNavigate();
  console.log(navigate);

  // const handleNavigateToContactMePage = () => {
  //   navigate("/contact");
  // };

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello I'm Rajani
          <br />
          Front End Developer
        </h1>
      </div>
      {/* <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
        </div>
      </Animate> */}
    </section>
  );
}
