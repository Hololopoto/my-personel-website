import React, { useState } from "react";
import Project from "./Project";
import Info from "./Info";
import netflix from "./Images/netflix.png";
import netflix1 from "./Images/NetflixInfo1.png";
import netflix2 from "./Images/NetflixInfo2.png";
import netflix3 from "./Images/NetflixInfo3.png";
import netflix4 from "./Images/NetflixInfo4.png";

function Projects() {
  const Br = (
    <div>
      <br />
    </div>
  );
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
          <div className="bg-slate-300 absolute left-[32rem] max-[1024px]:left-[9rem] max-[768px]:left-[4rem] z-50 max-[768px]:w-[70%] max-[768px]:items-center flex flex-col rounded-lg">
            <Info
              InfoText={
                "TheMovieDb Api, Axios, React.js and Tailwind were used in this project."
              }
              InfoText2={
                "My goal in this project was to use the data from the API efficiently and create a movie website."
              }
            />

            <Info
              InfoImg={netflix1}
              InfoText={"Extracting data from API and defining it to state"}
            />
            <Info
              InfoImg={netflix2}
              InfoText={"Editing API requests to make the code more readable"}
            />
            <Info
              InfoImg={netflix3}
              InfoText={
                "A code that makes movie details visible when hovering over movie posters"
              }
            />
            <Info
              InfoImg={netflix4}
              InfoText={
                "Movie types are returned from the API as numbers. I found the types corresponding to these numbers and arranged them."
              }
            />
          </div>
        }
      />
    </div>
  );
}

export default Projects;
