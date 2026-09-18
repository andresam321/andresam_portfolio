import React from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import caseStudies from "../content/caseStudies";
import CaseStudySection from "../components/caseStudy/CaseStudySection";
import useDocumentTitle from "../Hooks/useDocumentTitle";

// Single reusable case-study template driven entirely by
// src/content/caseStudies.js. Propia has 7 sections, ContextFlow has 6 —
// the component renders whatever sections a given case study defines
// rather than assuming a fixed shape, so the two are not forced into an
// identical structure.
const CaseStudy = () => {
  const { slug } = useParams();
  const caseStudy = caseStudies[slug];

  useDocumentTitle(
    caseStudy ? caseStudy.name : undefined,
    caseStudy ? caseStudy.tagline : undefined
  );

  if (!caseStudy) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="portfolio case-study">
      <header className="case-study-header container">
        <Link to="/projects" className="back-link">
          &larr; All Projects
        </Link>
        <h1 className="poppins-font text-uppercase">{caseStudy.name}</h1>
        <p className="case-study-tagline open-sans-font">
          {caseStudy.tagline}
        </p>
        <p
          className={`case-study-status case-study-status--${caseStudy.statusTone}`}
        >
          {caseStudy.status}
        </p>
        {caseStudy.liveUrl && (
          <a
            href={caseStudy.liveUrl}
            target="_blank"
            rel="noreferrer"
            className="case-study-live-link"
          >
            Visit {caseStudy.name}
            <span aria-hidden="true"> &#8599;</span>
          </a>
        )}
      </header>

      <div className="case-study-body container">
        {caseStudy.sections.map((section, index) => (
          <CaseStudySection section={section} index={index} key={section.id} />
        ))}
      </div>
    </div>
  );
};

export default CaseStudy;
