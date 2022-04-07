import React from "react";
import ReactDom from "react-dom";
import "./styles.css";
import App from "./components/App";

const rootElement = document.getElementById("root");

ReactDom.render(
  <App />,
  rootElement
);
