import React from "react";
import ProjectCard from "../components/projects/ProjectCard";
import projectsData from "../content/projectsData";
import useDocumentTitle from "../Hooks/useDocumentTitle";

const Projects = () => {
  useDocumentTitle(
    "Projects",
    "Propia and ContextFlow, plus AeroSkyOps — the project that started it all."
  );

  const flagshipProjects = projectsData.filter((p) => p.tier === "flagship");
  const supportingProjects = projectsData.filter(
    (p) => p.tier === "supporting"
  );

  return (
    <div className="portfolio">
      <div className="title-section text-left text-sm-center">
        <h1>
          MY <span>PROJECTS</span>
        </h1>
      </div>

      <section className="container">
        <div className="project-card-grid">
          {flagshipProjects.map((project) => (
            <ProjectCard project={project} headingLevel="h2" key={project.slug} />
          ))}
        </div>

        <div className="project-card-grid project-card-grid--supporting">
          {supportingProjects.map((project) => (
            <ProjectCard project={project} headingLevel="h2" key={project.slug} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
