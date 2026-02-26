import React from "react";

const personalInfoContent = [
  { meta: "Name", metaInfo: "Andres Mercado" },
  { meta: "Role", metaInfo: "Backend Software Engineer" },
  { meta: "Location", metaInfo: "San Francisco Bay Area" },
  { meta: "Email", metaInfo: "andresam321@proton.me" },
  { meta: "Languages", metaInfo: "English, Spanish" },
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