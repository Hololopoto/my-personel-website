import React, { useState } from "react";

function Info({ InfoImg, InfoText, InfoText2 }) {
  const [zoom, setZoom] = useState(false);
  const zoomInfo = (e) => {
    setZoom(!zoom);
    e.preventDefault();
  };

  return (
    <div className="">
      <div className="flex items-center gap-3 m-3 rounded-lg bg-slate-400 ">
        <div className="w-20 h-20 flex justify-center items-center">
          <img
            src={InfoImg}
            alt=""
            onClick={zoomInfo}
            className={`object-cover rounded-tr-md rounded-bl-md  ${
              zoom &&
              "scale-[120%]  max-[768px]:scale-[180%] max-[1024px]:scale-[150%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 origin-center  hover:cursor-zoom-out"
            } hover:cursor-zoom-in transition-all`}
          />
        </div>
        <div className="flex flex-col">
          <p className="px-3">{InfoText}</p>
          <p className="px-3">{InfoText2}</p>
        </div>
      </div>
    </div>
  );
}

export default Info;
