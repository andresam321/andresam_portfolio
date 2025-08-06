import React from "react";

const educationContent = [
{
  year: "June 2025 – July 2025",
  position: "Backend Engineer (Contract)",
  companyName: "Stacksync",
  details: `At Stacksync, a Y Combinator-backed startup focused on structured data integration, 
  I engineered multiple stateless backend connectors using Flask. One example included integrating with Firecrawl’s AI-powered web scraping API 
  to support asynchronous batch scraping through job ID-based workflows and webhook handling. 
  I designed connectors to fetch results on demand without in-memory storage and implemented retry mechanisms for webhook delivery. 
  I collaborated with fellow engineers to ensure each connector was production-ready, handling structured JSON parsing and schema flexibility to support seamless downstream integration. 
  I also contributed to sprint planning and architecture discussions to align with performance and reliability goals.`
},
  {
    year: "2022",
    course: "Software Engineer",
    institute: "Coding Dojo",
    details: `Coding Dojo is a global technology education company offering immersive coding bootcamps that emphasize hands-on learning, algorithms, 
    and data structures. During my time there, I focused on mastering Python and backend development, gaining experience in Flask, SQLAlchemy, and PostgreSQL. 
    The program also introduced me to Django, giving me insight into building scalable web applications using a high-level framework.
The bootcamp’s rigorous structure emphasized problem-solving, debugging, and writing clean, maintainable code, 
helping me develop a strong foundation in backend development and database management. 
Through hands-on projects, I built applications that reinforced my ability to design RESTful APIs, optimize database performance, 
and implement secure authentication systems. This experience strengthened my adaptability, resilience, and technical problem-solving skills, 
which I carry into every development project.`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
