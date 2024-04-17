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
import crossword from "./Images/Crossword.png";
import crossword1 from "./Images/CrosswordInfo1.png";
import crossword2 from "./Images/CrosswordInfo2.png";
import crossword3 from "./Images/CrosswordInfo3.png";
import crossword4 from "./Images/CrosswordInfo4.png";
import crossword5 from "./Images/CrosswordInfo5.png";
import weather from "./Images/Weather.png";
import weather1 from "./Images/WeatherInfo1.png";
import weather2 from "./Images/WeatherInfo2.png";
import weather3 from "./Images/WeatherInfo3.png";
import weather4 from "./Images/WeatherInfo4.png";
import weather5 from "./Images/WeatherInfo5.png";
import contact from "./Images/Contact.png";
import contact1 from "./Images/ContactInfo1.png";
import contact2 from "./Images/ContactInfo2.png";
import contact3 from "./Images/ContactInfo3.png";
import contact4 from "./Images/ContactInfo4.png";
import contact5 from "./Images/ContactInfo5.png";
import contact6 from "./Images/ContactInfo6.png";

function Projects() {
  return (
    <div>
      <div className="text-3xl flex justify-center text-neutral-900 m-7 mb-10">
        <h1>My Project</h1>
      </div>

      <Project
        Title={"Netflix Clone"}
        Link={"https://alper-movieapp.netlify.app/"}
        Github={"https://github.com/Hololopoto/netflix-clone"}
        Img={netflix}
        Details={
          <div className="bg-slate-300 absolute left-1/2 -ml-[37.5%] w-3/4   flex flex-col rounded-lg">
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
        Github={"https://github.com/Hololopoto/pokedex"}
        Img={pokedex}
        Details={
          <div className="bg-slate-300 m-auto absolute left-1/2 -ml-[37.5%] w-3/4   flex flex-col rounded-lg">
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
      <Project
        Title={"Crossword Game"}
        Link={"https://hololopoto-crossword-game.netlify.app"}
        Github={"https://github.com/Hololopoto/game"}
        Img={crossword}
        Details={
          <div className="bg-slate-300 absolute left-1/2 -ml-[37.5%] w-3/4   flex flex-col rounded-lg">
            <Info
              InfoText={"React.js and Tailwind were used in this project."}
              InfoText2={
                "The goal in this project was to create a word game by mixing random letters with the letters containing the answer."
              }
            />

            <Info
              InfoImg={crossword1}
              InfoText={
                "Split each letter in the answer to the question created in the Data.js file and shuffle the order by adding 4 random letters to these letters."
              }
            />
            <Info InfoImg={crossword2} InfoText={"Shuffle function"} />
            <Info
              InfoImg={crossword3}
              InfoText={
                "A function that checks whether the answer is true or false. If the entered word has the same number of characters and is the same as the answer,"
              }
              InfoText2={
                " it clears the written words and moves on to the next question. If not, it reports that it is wrong."
              }
            />

            <Info
              InfoImg={crossword4}
              InfoText={
                "The function I use with onClick to delete incorrectly entered letters"
              }
            />
            <Info
              InfoImg={crossword5}
              InfoText={`If the answer was entered incorrectly, the value of the definition of "wrong" became true, and even if we deleted the incorrect letters,`}
              InfoText2={
                "it remained true and the letters remained red as I defined. I corrected this with if else statements."
              }
            />
          </div>
        }
      />
      <Project
        Title={"Weather App"}
        Link={"https://alper-weatherapp.netlify.app"}
        Github={"https://github.com/Hololopoto/weather"}
        Img={weather}
        Details={
          <div className="bg-slate-300 group absolute left-1/2 -ml-[37.5%] w-3/4   flex flex-col rounded-lg">
            <Info
              InfoText={
                "React.js,OpenWeatherMap Apı and Tailwind were used in this project."
              }
              InfoText2={
                "My goal in this project is to create a 3-day weather site with the data I get from the API."
              }
            />

            <Info
              InfoImg={weather1}
              InfoText={
                "Retrieving data from the API according to the name of the city searched and displaying it with enter and click functions."
              }
            />
            <Info
              InfoImg={weather5}
              InfoText={`Determining the image to be displayed according to the "weather" data returned from the API.`}
            />
            <Info
              InfoImg={weather3}
              InfoText={`The "description" data returned from the API comes as one or two words and in lowercase letters. I defined a function to capitalize the initials in both cases.`}
            />

            <Info
              InfoImg={weather4}
              InfoText={`The dt_txt data coming from the API was coming as "YYYY-MM-DD 00:00:00", this is the code I used to remove the time data and change it to "DD.MM.YYYY".`}
            />
          </div>
        }
      />
      <Project
        Title={"Todo App"}
        Link={"https://hololopoto-todo-app.netlify.app/"}
        Github={"https://github.com/Hololopoto/contacts-app"}
        Img={contact}
        Details={
          <div className="bg-slate-300 absolute left-1/2 -ml-[37.5%] w-3/4  flex flex-col rounded-lg">
            <Info
              InfoText={
                "React.js, Uuidv4 and Tailwind were used in this project."
              }
              InfoText2={
                "My goal in this project is to create a todo list and check its completion status."
              }
            />

            <Info
              InfoImg={contact1}
              InfoText={
                "The process of assigning the data entered to the inputs as values (onChangeInput)."
              }
              InfoText2={
                "Adding data into the array by checking whether the values are empty, defining a unique id for each data using UUID (onSubmit)."
              }
            />
            <Info
              InfoImg={contact2}
              InfoText={`Whenever contacts is updated it resets the inputs to "initialFormValues".`}
            />
            <Info
              InfoImg={contact3}
              InfoText={`It saves the data added to the array to local storage and sends the data in local storage to the array every time the page is refreshed.`}
            />

            <Info
              InfoImg={contact4}
              InfoText={`Filter the Contacts array and show the element containing the filterText value.`}
            />
            <Info
              InfoImg={contact5}
              InfoText={`Using "findIndex", the index of the first element is found, corresponding to the unique id we defined earlier.`}
              InfoText2={`Using "splice", the item in the index we found is deleted. With this code, the array is also updated in local storage.`}
            />
            <Info
              InfoImg={contact6}
              InfoText={`Since I later converted it to a todo app, I added a checkbox. If the id sent to ToggleComplete is equal to the checked id, the array element,`}
              InfoText2={`corresponding to the relevant id is updated (line-through, text-gray-400). And it is saved to local storage.`}
            />
          </div>
        }
      />
    </div>
  );
}

export default Projects;
