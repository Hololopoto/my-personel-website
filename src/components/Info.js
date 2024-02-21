import React, { useState } from "react";

function Info({ infoImg, infoText }) {
  const [zoom, setZoom] = useState(false);
  const zoomInfo = (e) => {
    setZoom(!zoom);
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex items-center gap-3 m-4 rounded-lg bg-slate-400 ">
        <div className="w-20 h-20  flex justify-center items-center">
          <img
            src={infoImg}
            alt=""
            onClick={zoomInfo}
            className={`m-2 object-cover rounded-md ${
              zoom && "scale-[1300%] hover:cursor-zoom-out"
            } hover:cursor-zoom-in transition-all`}
          />
        </div>
        <p className="p-3">{infoText}</p>
      </div>
    </div>
  );
}

export default Info;
