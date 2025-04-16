import React from "react";

const experienceContent = [
  {
    year: "2022 - Present",
    position: "Software Engineer (AeroSkyOps Project)",
    companyName: "Rabbit Aviation",
    details: `While working as a line service technician at Rabbit Aviation, I identified inefficiencies in managing aircraft assignments, fuel requests, and owner information. With the owner's permission, I independently designed and developed AeroSkyOps—a full-stack aviation management system that digitizes outdated workflows and improves operational efficiency.
  
  Key features include dynamic aircraft parking assignments, a real-time fuel request tracker with status updates ("En Route," "Complete," etc.), and integrations with the FlightAware AeroAPI and Weather API for near-live flight and weather data.
  
  To enhance fuel tracking, I built a visual fuel tank monitoring system with manual input, remaining capacity display, and refill alerts. I also implemented aircraft parking history logs for quick referencing of past assignments.
  
  The system is deployed on AWS EC2 with Docker, Nginx, and TLS encryption. I migrated the database from MongoDB to PostgreSQL using SQLAlchemy and integrated AWS S3 for image storage. Redux was introduced to improve UI responsiveness and reduce re-renders.
  
  Currently, I’m developing QR-based fuel request access for pilots and implementing role-based access control (RBAC) for secure feature permissions. AeroSkyOps has been in continuous development for over two years and is designed for real-world aviation workflows.`
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
