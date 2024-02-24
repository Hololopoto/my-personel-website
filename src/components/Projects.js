import React, { useState } from "react";
import Project from "./Project";
import Info from "./Info";
import netflix from "./Images/netflix.png";
import netflix1 from "./Images/NetflixInfo1.png";
import netflix2 from "./Images/NetflixInfo2.png";
import netflix3 from "./Images/NetflixInfo3.png";
import netflix4 from "./Images/NetflixInfo4.png";
import netflix5 from "./Images/NetflixInfo5.png";
import pokedex from "./Images/Pokedex.png";
import pokedex1 from "./Images/PokedexInfo1.png";
import pokedex2 from "./Images/PokedexInfo2.png";
import pokedex3 from "./Images/PokedexInfo3.png";
import pokedex4 from "./Images/PokedexInfo4.png";
import pokedex5 from "./Images/PokedexInfo5.png";

function Projects() {
  return (
    <div>
      <div className="text-3xl flex justify-center text-white m-7 mb-10">
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
              InfoImg={netflix5}
              InfoText={
                "A code that will show any movie in the Popular category on the Banner."
              }
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
      <Project
        Title={"Pokedex"}
        Link={"https://hololopoto-pokedex.netlify.app/"}
        Img={pokedex}
        Details={
          <div className="bg-slate-300 absolute left-[32rem] max-[1024px]:left-[9rem] max-[768px]:left-[4rem] z-50 max-[768px]:w-[70%] max-[768px]:items-center flex flex-col rounded-lg">
            <Info
              InfoText={
                "PokeApi, Axios, React.js and Tailwind were used in this project."
              }
              InfoText2={
                "My goal in this project is to create a pokemon list with the data in the API."
              }
            />

            <Info
              InfoImg={pokedex1}
              InfoText={"Extracting data from API and defining it to state"}
            />
            <Info
              InfoImg={pokedex2}
              InfoText={
                "A different url comes from the API for each pokemon, and the pokemon details are included in the data in this url."
              }
              InfoText2={` I requested this URL in the API again and listed them one after another.Pokemon sometimes appeared in mixed order, I used "sort( )" to fix this.`}
            />
            <Info
              InfoImg={pokedex3}
              InfoText={
                "I defined a background color that changes depending on the type of pokemon."
              }
            />

            <Info
              InfoImg={pokedex4}
              InfoText={
                "I used the images from a different URL because it looked better."
              }
              InfoText2={`While the id in the API was 1,2,3, the names corresponding to this URL were 001,002,003. I used "padStart( )" to fix this situation.`}
            />
            <Info
              InfoImg={pokedex5}
              InfoText={"I wrote the initials of the names in uppercase"}
            />
          </div>
        }
      />
    </div>
  );
}

export default Projects;
