import React from "react";
import Talent from "./Talent";

function Talents() {
  return (
    <div className="box-border flex flex-col gap-6">
      <div className="maincontain flex h-auto box-border  ">
        <Talent
          Top={"Programing Language"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
          }
          Alt={"Js"}
          Bottom={"Javascript"}
        />
        <Talent
          Top={"Javascript Library"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
          }
          Alt={"React"}
          Bottom={"React"}
        />
      </div>

      <div className="maincontain flex h-auto box-border  ">
        <Talent
          Top={"Style Markup Language"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
          }
          Alt={"Css"}
          Bottom={"Css"}
        />
        <Talent
          Top={"Text Markup Language"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
          }
          Alt={"Html"}
          Bottom={"Html"}
        />
      </div>
      {/* 3Lü Satır */}
      <div className="maincontain flex h-auto box-border">
        <Talent
          Top={"API"}
          Img={"https://devnot.com/wp-content/uploads/2017/04/jsonapi.png"}
          Alt={"Apı"}
          Bottom={"Rest API with JSON Server"}
        />
        <Talent
          Top={"Css Framework"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
          }
          Alt={"Tailwind"}
          Bottom={"Tailwind"}
        />
        <Talent
          Top={"Css Framework"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
          }
          Alt={"Bootstrap"}
          Bottom={"Bootstrap"}
        />
      </div>
      <div className="maincontain flex h-auto box-border  ">
        <Talent
          Top={"Responsive Design"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/9/9a/Responsive.png"
          }
          Alt={"Responsive"}
          Bottom={"Mobile and Desktop Design"}
        />
        <Talent
          Top={"Version Control System"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/e/e0/Git-logo.svg"
          }
          Alt={"Git"}
          Bottom={"Git"}
        />
        <Talent
          Top={"Repo Hosting Service"}
          Img={
            "https://upload.wikimedia.org/wikipedia/commons/5/54/GitHub_Logo.png"
          }
          Alt={"GitHub"}
          Bottom={"GitHub"}
        />
      </div>
    </div>
  );
}

export default Talents;
