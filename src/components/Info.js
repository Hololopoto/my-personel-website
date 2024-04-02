import React, { useState } from "react";

function Info({ InfoImg, InfoText, InfoText2 }) {
  export const [zoom, setZoom] = useState(false);
  export const zoomInfo = (e) => {
    setZoom(!zoom);
    e.preventDefault();
  };

  return (
    <div
      onClick={() => {
        setZoom(!zoom);
      }}>
      <div className="flex items-center gap-3 m-4 rounded-lg bg-slate-400 ">
        <div className="w-20 h-20  flex justify-center items-center">
          <img
            src={InfoImg}
            alt=""
            onClick={zoomInfo}
            className={`m-2 object-cover rounded-tr-md rounded-bl-md  ${
              zoom &&
              "scale-[1300%] max-[768px]:scale-[600%] max-[1024px]:scale-[1000%] max-[1024px]:ml-[35rem] max-[768px]:ml-[15.7rem] ml-[58.5rem] hover:cursor-zoom-out"
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
