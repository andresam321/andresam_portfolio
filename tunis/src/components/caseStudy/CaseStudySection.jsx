import React from "react";

// Renders one case-study section from the locked content model
// (src/content/caseStudies.js). Handles the three shapes a section can
// take: plain paragraphs, an architecture flow line + paragraphs, or a set
// of engineering-decision blocks. One component, reused for every section
// of both case studies — no per-project duplication.
const CaseStudySection = ({ section, index }) => {
  const { heading, paragraphs, flow, decisions } = section;

  return (
    <section className="case-study-section" id={section.id}>
      <h2 className="poppins-font text-uppercase">
        <span className="section-number" aria-hidden="true">
          {String(index + 1).padStart(2, "0")}
        </span>
        {heading}
      </h2>

      {flow && (
        <div className="architecture-flow" role="img" aria-label={flow}>
          {flow.split("→").map((stage, i, arr) => (
            <React.Fragment key={i}>
              <span className="architecture-flow-node">{stage.trim()}</span>
              {i < arr.length - 1 && (
                <span className="architecture-flow-arrow" aria-hidden="true">
                  &#8594;
                </span>
              )}
            </React.Fragment>
          ))}
        </div>
      )}

      {paragraphs &&
        paragraphs.map((paragraph, i) => (
          <p className="open-sans-font" key={i}>
            {paragraph}
          </p>
        ))}

      {decisions && (
        <div className="decision-blocks">
          {decisions.map((decision, i) => (
            <div className="decision-block" key={i}>
              <h3 className="open-sans-font text-uppercase">
                {decision.title}
              </h3>
              <p className="open-sans-font">{decision.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default CaseStudySection;
