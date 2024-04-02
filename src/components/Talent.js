import React from "react";

function Talent2({ Top, Img, Alt, Bottom, Bg }) {
  return (
    <div
      className={`container box-border mx-10 max-[768px]:m-2 max-[768px]:hover:scale-100   h-64 w-[50%]  hover:scale-110 cursor-pointer transition  gap-3 rounded-lg ${Bg}`}>
      <div className="float-left m-3 absolute">
        <p className=" text-lg max-[768px]:text-sm text-wrap">{Top}</p>
      </div>

      <div className="img mt-12 flex justify-center items-center">
        <img
          className="h-36 max-[768px]:h-28 max-[768px]: w-auto max-[768px]:hover:scale-100 max-[768px]:px-1 hover:scale-125 transition"
          src={Img}
          alt={Alt}
        />
      </div>

      <div className="float-right  m-6">
        <h1>{Bottom}</h1>
      </div>
    </div>
  );
}

export default Talent2;
