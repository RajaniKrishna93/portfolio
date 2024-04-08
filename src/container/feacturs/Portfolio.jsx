import React, { useState } from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import Pageheadercontent from "../../components/content/Pageheadercontent";
import shopping from "../../assets/images/shopping.jpg";

import food from "../../assets/images/food.jpg";
import { Animate } from "react-simple-animate";

export default function Portfolio() {
  
  return (
    <section id="portfolio" className="portfolio">
      <Pageheadercontent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__main-content">
        <Animate
          play
          duration={1}
          delay={0.3}
          start={{
            transform: "translateX(-100px)",
          }}
          end={{
            transform: "translateX(400px)",
          }}
        >
          <div className="heading__text">
            <h1>MY PROJECTS</h1>
          </div>
        </Animate>
      </div>
      <div className="portfolio__content">
        <div className="image-container">
          <h2>E-COMMERCE SITE</h2>
          <a
            className="ecommerce-link"
            href="https://660be253a601e200903d5752--creative-halva-3a7a85.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="one" src={shopping} alt="Shopping" />
          </a>
        </div>
        <div className="image-container">
          <h2>FOOD DELIVERY SITE</h2>
          <a
            className="ecommerce-link"
            href="https://express90876food.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="two" src={food} alt="Food" />
          </a>
        </div>
      </div>
    </section>
  );
}
