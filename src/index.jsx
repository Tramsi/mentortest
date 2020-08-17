import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["DejaVu", " Sans", "Merriweather"],
  },
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
