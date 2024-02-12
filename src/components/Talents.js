import React from "react";

function Talents() {
  return (
    <div className="box-border flex flex-col gap-9">
      <div className="maincontain flex h-auto box-border  bg-red-400">
        <div className="container mx-20  h-64 w-[50%]  gap-3 flex flex-col items-center justify-center bg-white">
          <div className="img">
            <img
              className="h-36"
              src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Javascript_badge.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>HTML</h1>
          </div>
        </div>
        <div className="container mx-20  h-64 w-[50%]  gap-3 flex flex-col items-center justify-center bg-white">
          <div className="img">
            <img
              className="h-36"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>HTML</h1>
          </div>
        </div>
      </div>
      <div className="maincontain flex h-auto box-border  bg-red-400">
        <div className="container mx-20  h-64 w-[50%]  gap-3 flex flex-col items-center justify-center bg-white">
          <p>Text Content</p>
          <div className="img">
            <img
              className="h-36"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>HTML</h1>
          </div>
        </div>
        <div className="container mx-20  h-64 w-[50%]  gap-3 flex flex-col items-center justify-center bg-white">
          <div className="img">
            <img
              className="h-36"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>HTML</h1>
          </div>
        </div>
      </div>
      {/* 3Lü Satır */}
      <div className="maincontain flex h-auto box-border  bg-red-400">
        <div className="container mx-20  h-64 w-[50%]  gap-3 flex flex-col items-center justify-center bg-white">
          <div className="img">
            <img
              className="h-36"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>HTML</h1>
          </div>
        </div>
        <div className="container mx-20 h-64 w-[50%] box-border  gap-3 flex flex-col items-center justify-center bg-white">
          <div className="img">
            <img
              className="h-36"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>HTML</h1>
          </div>
        </div>
        <div className="container mx-20 h-64 w-[50%] box-border  gap-3 flex flex-col items-center justify-center bg-white">
          <div className="img">
            <img
              className="h-36"
              src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>HTML</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talents;
