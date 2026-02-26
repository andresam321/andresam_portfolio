import React from "react";

const experienceContent = [

  {
    year: "Feb 2026 – Present",
    position: "Backend Engineer (VoiceCompanionAI – Personal Project)",
    companyName: "Personal Project",
    details: [
      "Designing a wake-word activated AI companion using FastAPI, async PostgreSQL, and Raspberry Pi integration.",
      "Implementing a PostgreSQL-backed job queue using SELECT FOR UPDATE SKIP LOCKED for safe concurrent processing.",
      "Building a device → API → background worker pipeline with idempotent job handling and retry/backoff logic.",
      "Integrating OpenAI APIs and pgvector to store and retrieve conversational context."
    ],
  },

  {
    year: "Oct 2025 – Present",
    position: "Backend Engineer (Propia – Personal Project)",
    companyName: "Personal Project",
    details: [
      "Building a backend-first lease ingestion platform using FastAPI and async PostgreSQL.",
      "Designed job-based pipelines (API → OCR worker → DB) for non-blocking document processing.",
      "Implemented state-aware lease chunking to support embedding-based semantic search.",
      "Integrated AWS S3 for structured document storage and ingestion workflows."
    ],
  },

  {
    year: "June 2025 – September 2025",
    position: "Backend Engineer (Contract)",
    companyName: "Stacksync (YC W24)",
    details: [
      "Built stateless backend connectors using Flask and RESTful API specifications.",
      "Implemented async job ID–based workflows with webhook delivery for scalable data extraction.",
      "Designed schema-flexible JSON parsing to support dynamic downstream integrations.",
      "Collaborated in sprint planning and architecture discussions to improve reliability and performance."
    ],
  },

  {
    year: "2022 – 2024",
    position: "Software Engineer (AeroSkyOps – Internal Tool)",
    companyName: "Rabbit Aviation",
    details: [
      "Led backend development of an internal aviation operations platform using Flask and PostgreSQL.",
      "Migrated MongoDB to a relational schema with SQLAlchemy to improve data integrity and query performance.",
      "Built REST APIs integrating FlightAware and Weather APIs for near-live aviation data.",
      "Deployed using Docker, AWS EC2, Nginx, and TLS."
    ],
  }

];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
