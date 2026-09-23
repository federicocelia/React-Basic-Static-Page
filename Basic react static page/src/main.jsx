import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

const root = document.getElementById("root");

function Element() {
  return (
    <>
      <img width="40px" alt="react-logo" src="./src/assets/react.svg" />
      <h1>Fun facts about react</h1>
      <ul>
        <li>Was first realised in 2013</li>
        <li>Was originally created by Jordan Walk</li>
        <li>Has over 100k stars on GitHub</li>
        <li>Is maintained by Meta</li>
        <li>Powers thousands of enterprise apps, including mobile apps</li>
      </ul>
    </>
  );
}

createRoot(root).render(
  <StrictMode>
    <Element></Element>
  </StrictMode>,
);
