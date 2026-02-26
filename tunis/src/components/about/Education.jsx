import React from "react";

const educationContent = [
  {
    year: "2024",
    course: "Software Engineering Program",
    institute: "App Academy",
    details: [
      "Completed an intensive full-stack software engineering program focused on JavaScript, Python, SQL, React, and Flask.",
      "Developed RESTful APIs and relational database schemas using PostgreSQL.",
      "Worked in Agile environments with pair programming, sprint planning, and collaborative projects."
    ],
  },
  {
    year: "2022",
    course: "Software Engineering Bootcamp",
    institute: "Coding Dojo",
    details: [
      "Focused on backend development using Python, Flask, SQLAlchemy, and PostgreSQL.",
      "Built REST APIs and implemented authentication, relational schema design, and data modeling.",
      "Strengthened algorithmic thinking, debugging skills, and structured problem-solving."
    ],
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
