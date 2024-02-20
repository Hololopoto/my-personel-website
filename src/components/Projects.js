import React from "react";
import Project from "./Project";
import netflix from "./Images/netflix.png";

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
          <div>
            <div>
              <img src="" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                qui!
              </p>
            </div>
          </div>
        }
      />
      <Project
        Title={"Selam"}
        Img={netflix}
        Details={
          <div>
            <div>
              <img src="" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque,
                qui!
              </p>
            </div>
          </div>
        }
      />
    </div>
  );
}

export default Projects;
