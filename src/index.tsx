import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

import "./index.scss";

// initialize datadog
// import "./utils/datadogInit";

ReactDOM.render(<App />, document.getElementById("root"));
