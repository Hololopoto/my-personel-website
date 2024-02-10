import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Talents from "./components/Talents";
import Project from "./components/Project";
import Info from "./Info";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <Header />
    <Info />
    <Talents />
    <Project />
  </>

  // </React.StrictMode>
);
