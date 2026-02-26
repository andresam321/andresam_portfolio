import React from "react";

const achievementsContent = [
  { title: "2+", subTitle1: "Years", subTitle2: "Building Systems" },
  { title: "4", subTitle1: "Backend", subTitle2: "Architectures Designed" },
  { title: "3", subTitle1: "Cloud", subTitle2: "Deployments (AWS/GCP)" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;