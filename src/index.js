import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bulma/css/bulma.css";
import "./assets/css/App.css";

const el = document.querySelector("#root");
const root = ReactDOM.createRoot(el);

root.render(<App />);
