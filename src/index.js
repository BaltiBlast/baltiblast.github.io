import { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./Styles/styles.css";
import "./Styles/reset.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  rootElement
);
