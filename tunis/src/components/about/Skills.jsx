import React from "react";

const backendSkills = [
  "Python",
  "FastAPI",
  "Async SQLAlchemy",
  "PostgreSQL",
  "Docker",
  "AWS (EC2, S3)",
  "Google Cloud Run",
  "Webhooks",
  "PaddleOCR",
  "Semantic Search",
  "GitHub",
  "Postman",
  "Flask",
  "OpenAI APIs"
];

const frontendSkills = [
  "JavaScript",
  "React",
  "Redux",
  "HTML/CSS",
];

const SkillPillGrid = ({ items }) => (
  <div className="row">
    {items.map((name, i) => (
      <div className="col-6 col-md-3 mb-3" key={i}>
        <div className="skill-pill text-center">
          <span className="text-uppercase open-sans-font">{name}</span>
        </div>
      </div>
    ))}
  </div>
);

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mb-3">
          <h4 className="text-uppercase open-sans-font">Backend, AI & Infrastructure</h4>
        </div>
      </div>
      <SkillPillGrid items={backendSkills} />

      <div className="row mt-4">
        <div className="col-12 mb-3">
          <h4 className="text-uppercase open-sans-font">Frontend</h4>
        </div>
      </div>
      <SkillPillGrid items={frontendSkills} />
    </>
  );
};

export default Skills;