import React from "react";
import { Link } from "react-router-dom";

// Single reusable card for both the Home "Featured Work" section and the
// full /projects overview page — avoids the old pattern of one giant
// duplicated branch per project (see removed Modal.jsx).
const ProjectCard = ({ project, headingLevel = "h3" }) => {
  const { name, description, cta, tier, liveUrl } = project;
  const Heading = headingLevel;

  return (
    <article className={`project-card project-card--${tier}`}>
      <Heading className="poppins-font text-uppercase">{name}</Heading>
      <p className="open-sans-font">{description}</p>
      {(cta || liveUrl) && (
        <div className="project-card-links">
          {cta && (
            <Link to={cta.to} className="button">
              <span className="button-text">{cta.label}</span>
              <span className="button-icon fa fa-arrow-right"></span>
            </Link>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="button button-outline"
            >
              <span className="button-text">{`Visit ${name}`}</span>
              <span className="button-icon fa fa-external-link"></span>
            </a>
          )}
        </div>
      )}
    </article>
  );
};

export default ProjectCard;
