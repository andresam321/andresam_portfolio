import React from "react";
import PersonalInfo from "../components/about/PersonalInfo";
import Education from "../components/about/Education";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import cv from "../assets/img/AndresMercado_resume.pdf";

// Locked Phase 4 About copy (3 blocks). Do not edit wording without going
// back through the positioning process.
const About = () => {
  useDocumentTitle(
    "About",
    "A bit of context on where this comes from — six years in aviation operations, independent real estate investing, and what led into software."
  );

  return (
    <div className="about">
      <div className="title-section text-left text-sm-center">
        <h1>
          ABOUT <span>ME</span>
        </h1>
      </div>

      <section className="main-content container">
        <div className="row">
          <div className="col-xl-6 col-lg-5 col-12">
            <PersonalInfo />
            <a className="button mt-3" href={cv} download>
              <span className="button-text">Resume</span>
              <span className="button-icon fa fa-download"></span>
            </a>
          </div>

          <div className="col-xl-6 col-lg-7 col-12 mt-5 mt-lg-0">
            <p className="open-sans-font">
              A bit of context on where this comes from.
            </p>
            <p className="open-sans-font">
              For six years, I worked as a line service technician at Rabbit
              Aviation — fueling aircraft, working directly with pilots, and
              keeping a small, busy operation running day to day. Around the
              same time, I was investing in real estate on my own, dealing
              with tenants, contractors, and everything else that comes
              with managing property myself. None of that involved software
              — it was judgment, phone calls, and showing up. Learning to
              build software later gave me a new way to build solutions for
              problems I was already used to facing directly.
            </p>
            <p className="open-sans-font">
              What I'm looking for now is a team that solves hard problems
              together — where I can contribute meaningfully, learn from
              other engineers, and keep growing over time.
            </p>
          </div>
        </div>

        <hr className="separator" />

        <div className="row">
          <div className="col-12">
            <h2 className="text-uppercase pb-5 mb-0 text-left text-sm-center custom-title ft-wt-600">
              Education
            </h2>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="resume-box">
              <Education />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
