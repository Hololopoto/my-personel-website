import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Talents from "./components/Talents";
import Projects from "./components/Projects";
import Info from "./components/Info";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <Header />
    <Info />
    <Talents />
    <Projects />
  </>

  // </React.StrictMode>
);
