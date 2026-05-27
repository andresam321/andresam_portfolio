import React from "react";

const experienceContent = [
  {
    year: "2026 – Present",
    position: "Full-Stack Engineer (ContextFlow – Personal Project)",
    companyName: "Personal Project",
    details:
      "Building a context-aware AI workflow platform focused on personalized outreach and communication systems. Designing multi-context backend architectures, async orchestration workflows, and PostgreSQL-backed context systems for scalable AI-assisted messaging.",
  },

  {
    year: "Oct 2025 – Present",
    position: "Full-Stack Engineer (Propia – Personal Project)",
    companyName: "Personal Project",
    details:
      "Building a backend-first lease intelligence platform using FastAPI and async PostgreSQL. Designed job-based OCR ingestion pipelines, state-aware lease chunking, and semantic search workflows for AI-powered document analysis and querying.",
  },

  {
    year: "June 2025 – September 2025",
    position: "Backend Engineer (Contract)",
    companyName: "Stacksync (YC W24)",
    details:
      "Worked on backend integrations and workflow infrastructure at Stacksync, building stateless API connectors and schema-driven integration systems focused on reliability, scalability, and handling messy external data and document workflows.",
  },
  {
    year: "2022 – 2024",
    position: "Full-Stack Engineer (AeroSkyOps – Internal Tool)",
    companyName: "Rabbit Aviation",
    details:
      "Built an internal aviation operations platform after identifying inefficiencies while working in airport operations. Developed Flask/PostgreSQL backend systems, integrated FlightAware and weather APIs, and deployed the platform using Docker and AWS infrastructure.",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>

          <span className="time open-sans-font text-uppercase">
            {val.year}
          </span>

          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">
              {val.companyName}
            </span>
          </h5>

          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;