import React from "react";

function Talent2({ Top, Img, Alt, Bottom }) {
  return (
    <div className="container mx-10  h-64 w-[50%] hover:scale-110 cursor-pointer transition gap-3  rounded-lg bg-white">
      <div className="float-left m-3 absolute">
        <p className=" text-lg">{Top}</p>
      </div>

      <div className="img mt-12 flex justify-center items-center">
        <img className="h-36 hover:scale-125 transition" src={Img} alt={Alt} />
      </div>

      <div className="float-right  m-6">
        <h1>{Bottom}</h1>
      </div>
    </div>
  );
}

export default Talent2;
