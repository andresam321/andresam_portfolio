import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../assets/img/hero/am_pic.jpg";

// Locked Phase 4 hero copy. Do not edit wording here without going back
// through the positioning process.
//
// This is a self-contained, normal-flow responsive section — no
// position:fixed portrait (that was the root cause of the portrait
// overlapping Featured Work on scroll). The portrait scrolls away with
// the rest of the hero like everything else on the page.
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-shard" aria-hidden="true"></div>
      <div className="hero-portrait">
        <img src={heroImg} alt="Andres Mercado" />
      </div>
      <div className="hero-content">
        <p className="hero-identity open-sans-font text-uppercase">
          Andres Mercado — Software Engineer
        </p>
        <h1 className="poppins-font">
          I start with a real problem, then build the software to solve
          it.
        </h1>
        <p className="open-sans-font">
          I'm a software engineer who mostly lives in the backend —
          Python, FastAPI, PostgreSQL — but I build the frontend too when
          a project calls for it. Lately that's meant OCR pipelines,
          AI-assisted workflows, and the infrastructure that keeps them
          running.
        </p>
        <div className="hero-cta-group">
          <a href="#featured-work" className="button">
            <span className="button-text">View Featured Work</span>
            <span className="button-icon fa fa-arrow-right"></span>
          </a>
          <Link to="/contact" className="button button-outline">
            <span className="button-text">Get in Touch</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
