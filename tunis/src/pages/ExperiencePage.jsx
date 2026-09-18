import React from "react";
import Experience from "../components/about/Experience";
import useDocumentTitle from "../Hooks/useDocumentTitle";

const ExperiencePage = () => {
  useDocumentTitle(
    "Experience",
    "Backend Engineer contract work at Stacksync, and six years as a Line Service Technician at Rabbit Aviation."
  );

  return (
    <div className="about">
      <div className="title-section text-left text-sm-center">
        <h1>
          EXPERIENCE
        </h1>
      </div>
      <section className="main-content container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 m-15px-tb">
            <div className="resume-box">
              <Experience />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
