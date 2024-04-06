import { React, useEffect, useState } from "react";

function App() {
  const [menu, setMenu] = useState(false);
  const handleMenu = (e) => {
    setMenu(!menu);
  };
  return (
    <div className="App bg-neutral-500">
      <div className="container mb-10 ">
        <div className="items h-20 flex flex-row items-center text-neutral-50">
          <button
            className=" px-5 py-3 m-9 rounded-md bg-neutral-600"
            onClick={handleMenu}>
            İletişim
          </button>
          {menu ? (
            <div className="link bg-neutral-500   transition ">
              <ul className="flex  flex-row gap-7">
                <li className="bg-neutral-600 cursor-pointer hover:bg-neutral-400 py-1 px-3 rounded-md">
                  <a href="http://">Linkedin</a>
                </li>
                <li className="bg-neutral-600 cursor-pointer hover:bg-neutral-400 py-1 px-3 rounded-md">
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
