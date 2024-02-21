import React, { useState } from "react";
import Project from "./Project";
import Info from "./Info";
import netflix from "./Images/netflix.png";
import netflix1 from "./Images/NetflixInfo1.png";
import netflix2 from "./Images/NetflixInfo2.png";
import netflix3 from "./Images/NetflixInfo3.png";

function Projects() {
  return (
    <div>
      <div className="text-3xl flex justify-center text-white m-7 mb-20">
        <h1>My Project</h1>
      </div>

      <Project
        Title={"Netflix Clone"}
        Link={"https://hololopoto-netflix-clone.netlify.app/"}
        Img={netflix}
        Details={
          <div className="bg-slate-300 absolute left-[32rem] rounded-lg">
            <Info
              infoImg={netflix1}
              infoText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, praesentium."
              }
            />
            <Info
              infoImg={netflix2}
              infoText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, praesentium."
              }
            />
            <Info
              infoImg={netflix3}
              infoText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, praesentium."
              }
            />
            <Info
              infoImg={netflix2}
              infoText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, praesentium."
              }
            />
            <Info
              infoImg={netflix2}
              infoText={
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, praesentium."
              }
            />
          </div>
        }
      />
    </div>
  );
}

export default Projects;
