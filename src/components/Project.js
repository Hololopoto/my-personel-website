import React, { useState } from "react";

function Project({ Title, Img, DetailsImg, DetailsText, Details, Link }) {
  const [detail, setDetail] = useState(false);
  const handleDetail = (e) => {
    setDetail(!detail);
  };
  return (
    <div>
      <div className="flex flex-col items-center text-white">
        <div className="text-3xl m-7 mb-20">
          <h1>{Title}</h1>
        </div>
        <button
          onClick={handleDetail}
          className="bg-zinc-500 opacity-80 px-5 py-2 m-3 rounded-xl ">
          Details
        </button>
        {detail ? <div className="">{Details}</div> : null}
        <div className="w-10/12">
          <img src={Img} alt="Netflix-Clone" />
        </div>
        <a href={Link} target="_blank">
          <button className="bg-zinc-500 opacity-80 px-5 py-2 m-3 rounded-xl ">
            Go Project
          </button>
        </a>
      </div>
    </div>
  );
}

export default Project;
