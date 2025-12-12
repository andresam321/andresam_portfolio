import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Andres" },
  { meta: "last name", metaInfo: "Mercado" },
  { meta: "Age", metaInfo: "29 Years" },
  { meta: "Nationality", metaInfo: "American" },
  { meta: "Job Seeker", metaInfo: "Software Engineer" },
  { meta: "Email", metaInfo: "andresam321@proton.me" },
  { meta: "langages", metaInfo: "English, Spanish" },
  { meta: "Location", metaInfo: "San Francisco Bay Area" },
  // { meta: "phone", metaInfo: "510-695-4124" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
