import { React, useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);
  const handleMenu = (e) => {
    setMenu(!menu);
  };
  return (
    <div className="App bg-slate-300">
      <div className="container  ">
        <div className="items h-20 flex flex-row items-center text-white">
          <button
            className=" px-5 py-3 m-9 rounded-md bg-zinc-700"
            onClick={handleMenu}>
            İletişim
          </button>
          {menu ? (
            <div className="link bg-slate-300   transition ">
              <ul className="flex  flex-row gap-7">
                <li className="bg-zinc-700 cursor-pointer hover:bg-gray-700 py-1 px-3 rounded-md">
                  <a href="http://">Linkedin</a>
                </li>
                <li className="bg-zinc-700 cursor-pointer hover:bg-gray-700 py-1 px-3 rounded-md">
                  GitHub
                </li>
              </ul>
            </div>
          ) : null}

          <div className="logo">
            <img src="" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
