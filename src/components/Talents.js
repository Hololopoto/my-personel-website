import React from "react";

function Talents() {
  return (
    <div className="box-border flex flex-col gap-9">
      <div className="maincontain flex h-auto box-border  bg-red-400">
        <div className="container mx-20  h-64 w-[50%] hover:scale-110 cursor-pointer transition gap-3  rounded-lg bg-white">
          <div className="float-left m-3 absolute">
            <p className=" text-lg">Text Content</p>
          </div>

          <div className="img mt-12 flex justify-center items-center">
            <img
              className="h-36 hover:scale-125 transition"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>

          <div className="float-right  m-6">
            <h1>Css</h1>
          </div>
        </div>
        <div className="container mx-20  h-64 w-[50%] hover:scale-110 cursor-pointer transition gap-3  rounded-lg bg-white">
          <div className="float-left m-3 absolute">
            <p className=" text-lg">Text Content</p>
          </div>

          <div className="img mt-12 flex justify-center items-center">
            <img
              className="h-36 hover:scale-125 transition"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>

          <div className="float-right  m-6">
            <h1>Css</h1>
          </div>
        </div>
      </div>

      <div className="maincontain flex h-auto box-border  bg-red-400">
        <div className="container mx-20  h-64 w-[50%] hover:scale-110 cursor-pointer transition gap-3  rounded-lg bg-white">
          <div className="float-left m-3 absolute">
            <p className=" text-lg">Text Content</p>
          </div>

          <div className="img mt-12 flex justify-center items-center">
            <img
              className="h-36 hover:scale-125 transition"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>

          <div className="float-right  m-6">
            <h1>Css</h1>
          </div>
        </div>
        <div className="container mx-20  h-64 w-[50%] hover:scale-110 cursor-pointer transition gap-3  rounded-lg bg-white">
          <div className="float-left m-3 absolute">
            <p className=" text-lg">Text Content</p>
          </div>

          <div className="img mt-12 flex justify-center items-center">
            <img
              className="h-36 hover:scale-125 transition"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
              alt="HTML5"
            />
          </div>

          <div className="float-right  m-6">
            <h1>Css</h1>
          </div>
        </div>
      </div>
      {/* 3Lü Satır */}
      <div className="maincontain flex h-auto  bg-red-400">
        <div className="container mx-10  h-64 mb-10  hover:scale-110 cursor-pointer transition gap-3 flex flex-col items-center justify-center rounded-lg bg-white">
          <div className="img">
            <img
              className="h-28 w-auto hover:scale-125 transition cursor-pointer"
              src="https://devnot.com/wp-content/uploads/2017/04/jsonapi.png"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>Rest Api with Json Server</h1>
          </div>
        </div>
        <div className="container mx-20 h-64  box-border hover:scale-110 cursor-pointer transition  gap-3 flex flex-col items-center justify-center rounded-lg bg-white">
          <div className="img">
            <img
              className="h-28  w-auto hover:scale-125 transition cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>Tailwind</h1>
          </div>
        </div>
        <div className="container mx-20 h-64  box-border hover:scale-110 cursor-pointer transition  gap-3 flex flex-col items-center justify-center rounded-lg bg-white">
          <div className="img">
            <img
              className="h-28 w-auto hover:scale-125 transition cursor-pointer"
              src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Bootstrap_logo.svg"
              alt="HTML5"
            />
          </div>
          <div className=" ">
            <h1>Bootstrap</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Talents;
