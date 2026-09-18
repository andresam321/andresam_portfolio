import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import ExperiencePage from "../pages/ExperiencePage";
import Projects from "../pages/Projects";
import CaseStudy from "../pages/CaseStudy";
import ContactPage from "../pages/ContactPage";
import NotFound from "../views/NotFound";
import ScrollTopBehaviour from "../components/ScrollTopBehaviour";

// Real routes, replacing the old single "/" + react-tabs fake-tab
// navigation. Propia and ContextFlow are deep-linkable at
// /projects/:slug via the shared CaseStudy template (see
// src/content/caseStudies.js). Netlify's existing "/* /index.html 200"
// SPA fallback already supports direct loads/refreshes on these routes —
// no Netlify configuration change is required.
const AllRoutes = () => {
  return (
    <>
      <ScrollTopBehaviour />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:slug" element={<CaseStudy />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
