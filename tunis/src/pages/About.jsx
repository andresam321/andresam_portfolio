import React from "react";
import { Link } from "react-router-dom";
import PersonalInfo from "../components/about/PersonalInfo";
import Education from "../components/about/Education";
import useDocumentTitle from "../Hooks/useDocumentTitle";
import cv from "../assets/img/AndresMercado_resume.pdf";

// About copy: headline + two story paragraphs, ending on the Propia
// paragraph. Story copy was revised in the positioning review
// (foreclosure/family finances deliberately kept off the site). Do not edit
// wording without going back through the positioning process.
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
            <h2 className="custom-title ft-wt-600 mb-0">
              I learned ownership before I learned software.
            </h2>
            <p className="open-sans-font">
              By 2018, I was buying rental property and eventually owned and
              managed three properties while working full-time as a line
              service technician at Rabbit Aviation. Tenants, maintenance,
              and the decisions and problems that came with them were mine
              to handle, often remotely.
            </p>
            <p className="open-sans-font">
              I learned to build software later.{" "}
              <Link to="/projects/propia" className="text-link">
                Propia
              </Link>{" "}
              came from that experience: it lets you ask questions about a
              lease and flags terms that may conflict with California rental
              rules — because I knew what it was like to dig through a lease
              trying to find one clause.
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
