import React from "react";

const experienceContent = [
  {
    year: "2025 - Present",
    position: "Software Engineer (Hey-Compa – Personal Project)",
    companyName: "Personal Project",
    details: `Hey-Compa is an AI-powered assistant designed to help users — particularly non-English speakers and older adults — understand and manage their bills. The system uses OCR (via PaddleOCR) to extract key billing details 
    such as vendor, due date, and amount from uploaded images. It then maps that data to step-by-step payment instructions tailored to each provider. Recently, OpenAI’s GPT API was integrated to dynamically generate those instructions from OCR output. 
    The backend is built using Flask and PostgreSQL, 
    with a focus on modular design and future scalability.
     A React + Redux frontend is planned to deliver a smooth, accessible user experience. Future features include voice-guided walkthroughs, SMS reminders, and multilingual support to expand accessibility.`
  },
  {
    year: "2022 - 2025",
    position: "Software Engineer (AeroSkyOps – Internal Tool for Rabbit Aviation)",
    companyName: "Rabbit Aviation",
    details: `While working as a line service technician at Rabbit Aviation, I identified operational inefficiencies in how aircraft assignments, fuel requests, and owner information were tracked. With permission from the owner, I independently designed and built AeroSkyOps, a full-stack management platform tailored for airport workflows.

Key features include dynamic aircraft parking assignment, real-time fuel request tracking (with “En Route,” “Complete” statuses), and integrations with FlightAware and Weather APIs. I also developed a visual fuel tank tracker and historical parking logs. The platform is deployed via AWS EC2 with Docker, Nginx, and TLS, and integrates AWS S3 for image storage. Redux improved UI responsiveness, and I migrated the backend from MongoDB to PostgreSQL using SQLAlchemy.

Note: Actively deployed and in use. No longer in feature development.`
  },
  
  {
    year: "2023 - 2024",
    position: "Full-Stack Software Engineer (Wuber Eats – App Academy Project)",
    companyName: "Personal Project",
    details: `Wuber Eats is a full-stack web app inspired by Uber Eats, built during my App Academy training to sharpen my full-stack development and Agile collaboration skills.
  
  The platform allows users to browse restaurants, view menus, manage carts, place orders, and leave reviews. Restaurant owners can manage listings, update menus, and respond to feedback.
  
  On the backend, I used Flask to build a RESTful API with secure user auth and PostgreSQL for structured, scalable data. On the frontend, I used React with Redux to handle dynamic cart state and ensure a responsive UI. I also integrated Cloudinary for optimized image storage and loading performance.
  
  The app was developed in a collaborative Agile environment—daily sprints, stand-ups, and continuous iteration taught me how to communicate blockers, refine features, and move projects forward under real-world constraints.`
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
