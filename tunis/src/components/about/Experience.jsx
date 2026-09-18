import React from "react";
import { Link } from "react-router-dom";

// Locked Phase 4 Experience copy. Experience contains real
// employment/contract work only — Propia and ContextFlow are Projects, not
// Experience entries, and AeroSkyOps is never framed as formal engineering
// employment at Rabbit Aviation. Do not edit wording without going back
// through the positioning process.
const experienceContent = [
  {
    year: "June 2025 – September 2025",
    position: "Backend Engineer (Contract)",
    companyName: "Stacksync (YC W24)",
    details:
      "Built backend integrations and production API connectors for Stacksync's real-time CRM/database sync platform, including connectors for external services such as Firecrawl and NeverBounce. The work centered on schema-driven data mapping — normalizing inconsistent external data into a structure the sync engine could rely on. The first connector took about three weeks to work through end-to-end; once I had a repeatable pattern for structuring and mapping a new one, later connectors took about a day.",
  },
  {
    year: "September 2017 – August 2023",
    position: "Line Service Technician",
    companyName: "Rabbit Aviation",
    details:
      "Fueled aircraft, coordinated directly with pilots and customers, and handled billing and day-to-day fuel operations at a working general aviation airport. Firsthand exposure to the airport's manual aircraft parking and location-tracking process eventually led to AeroSkyOps, an independent project built to address that workflow — see ",
    linkLabel: "Projects",
    linkTo: "/projects",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>

          <span className="time open-sans-font text-uppercase">
            {val.year}
          </span>

          <h2 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">
              {val.companyName}
            </span>
          </h2>

          <p className="open-sans-font">
            {val.details}
            {val.linkLabel ? (
              <>
                <Link to={val.linkTo}>{val.linkLabel}</Link>.
              </>
            ) : null}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;