import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Talents from "./components/Talents";
import Projects from "./components/Projects";
import MyInfo from "./components/MyInfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <>
    <Header />
    <MyInfo />
    <Talents />
    <Projects />
  </>

  // </React.StrictMode>
);
