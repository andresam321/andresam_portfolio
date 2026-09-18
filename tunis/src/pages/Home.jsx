import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/home/Hero";
import ProjectCard from "../components/projects/ProjectCard";
import projectsData from "../content/projectsData";
import useDocumentTitle from "../Hooks/useDocumentTitle";

const flagshipProjects = projectsData.filter((p) => p.tier === "flagship");

const Home = () => {
  useDocumentTitle(
    "Software Engineer",
    "Backend-focused software engineer working in Python, FastAPI, and PostgreSQL. I build around real problems — see Propia and ContextFlow."
  );

  return (
    <div className="home">
      <Hero />

      <section id="featured-work" className="featured-work container">
        <div className="title-section text-left text-sm-center">
          <h2 className="poppins-font text-uppercase">Featured Work</h2>
        </div>
        <div className="project-card-grid">
          {flagshipProjects.map((project) => (
            <ProjectCard project={project} key={project.slug} />
          ))}
        </div>
      </section>

      <section className="closing-cta container text-center">
        <p className="open-sans-font">
          Interested in the work, or want to talk about a role?
        </p>
        <Link to="/contact" className="button">
          <span className="button-text">Get in Touch</span>
        </Link>
      </section>
    </div>
  );
};

export default Home;
