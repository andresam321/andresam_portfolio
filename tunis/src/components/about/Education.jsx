import React from "react";

const educationContent = [
  {
    year: "2024",
    course: "Software Engineer",
    institute: "App Academy",
    details: `App Academy is a renowned coding bootcamp that transforms students into full-stack software engineers through an intensive, 
    immersive program. The curriculum covers JavaScript, Python, SQL, HTML, CSS,
     and frameworks like React and Redux, with a strong emphasis on building scalable web applications.
The program is structured around pair programming, group projects, and Agile methodologies, mirroring real-world team dynamics.
 I fully committed to this rigorous training, transitioning from my previous career to pursue my passion for software development. 
 This experience not only strengthened my technical expertise but also refined my ability to collaborate effectively, 
 solve problems under pressure, and work in fast-paced environments—all critical skills for thriving in the tech industry.`,
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
