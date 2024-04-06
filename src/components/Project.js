import React, { useState } from "react";
function Project({
  Title,
  Img,
  DetailsImg,
  DetailsText,
  Details,
  Link,
  Github,
}) {
  const [detail, setDetail] = useState(false);
  const handleDetail = (e) => {
    setDetail(!detail);
    e.preventDefault();
  };

  return (
    <div>
      <div className="flex flex-col border-2 mb-10 pb-10 rounded-lg box-border mx-9 bg-neutral-500 items-center text-neutral-50">
        <div className="text-3xl m-7 mb-5">
          <h1>{Title}</h1>
        </div>
        <button
          onClick={handleDetail}
          className="bg-neutral-600 hover:bg-neutral-400/80 bg-opacity-80 px-5 py-2 m-3 rounded-xl ">
          Details
        </button>
        {detail ? (
          <div className="text-black transition-all">{Details}</div>
        ) : null}
        <div className="w-10/12">
          <img src={Img} alt="Netflix-Clone" />
        </div>
        <div className="flex justify-between w-3/4">
          <a href={Link} target="_blank">
            <button className="bg-neutral-600 hover:bg-neutral-400/80 bg-opacity-80 px-5 py-2 m-3 rounded-xl ">
              Go Project
            </button>
          </a>
          <a href={Github} target="_blank">
            <button className="bg-neutral-600 hover:bg-neutral-400/80 bg-opacity-80 px-5 py-2 m-3 rounded-xl ">
              GİtHub
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
