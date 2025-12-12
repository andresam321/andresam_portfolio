import React from "react";

const backendSkills = [
  { skillClass: "p90", skillPercent: "90", skillName: "PYTHON" },
  { skillClass: "p85", skillPercent: "85", skillName: "FastAPI" },
  { skillClass: "p85", skillPercent: "85", skillName: "SQLAlchemy (Async ORM)" },
  { skillClass: "p85", skillPercent: "85", skillName: "POSTGRESQL" },
  { skillClass: "p80", skillPercent: "80", skillName: "DOCKER" },
  { skillClass: "p78", skillPercent: "78", skillName: "AWS (S3, EC2)" },
  { skillClass: "p75", skillPercent: "75", skillName: "Google Cloud Run" },
  { skillClass: "p75", skillPercent: "75", skillName: "WEBHOOKS" },
  { skillClass: "p70", skillPercent: "70", skillName: "OCR (PaddleOCR)" },
  { skillClass: "p70", skillPercent: "70", skillName: "Embeddings / Vector Search" },
  { skillClass: "p85", skillPercent: "85", skillName: "GITHUB" },
  { skillClass: "p85", skillPercent: "85", skillName: "POSTMAN" },
];

const frontendSkills = [
  { skillClass: "p85", skillPercent: "85", skillName: "JAVASCRIPT" },
  { skillClass: "p80", skillPercent: "80", skillName: "React.js" },
  { skillClass: "p80", skillPercent: "80", skillName: "REDUX" },
  { skillClass: "p72", skillPercent: "72", skillName: "Express.js" },
  { skillClass: "p70", skillPercent: "70", skillName: "HTML & CSS" },
];

const SkillGrid = ({ items }) => (
  <>
    {items.map((val, i) => (
      <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
        <div className={`c100 ${val.skillClass}`}>
          <span>{val.skillPercent}%</span>
          <div className="slice">
            <div className="bar"></div>
            <div className="fill"></div>
          </div>
        </div>
        <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
          {val.skillName}
        </h6>
      </div>
    ))}
  </>
);

const Skills = () => {
  return (
    <>
      <div className="row">
        <div className="col-12 mb-3">
          <h4 className="text-uppercase open-sans-font">Backend, Data, Infra</h4>
        </div>
        <SkillGrid items={backendSkills} />
      </div>

      <div className="row mt-4">
        <div className="col-12 mb-3">
          <h4 className="text-uppercase open-sans-font">Frontend</h4>
        </div>
        <SkillGrid items={frontendSkills} />
      </div>
    </>
  );
};

export default Skills;
