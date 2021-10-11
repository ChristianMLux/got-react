import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";

import "./index.css";
import HouseDetails from "./HouseDetails";
import AllHouses from "./AllHouses";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/:houseId" component={HouseDetails} />
        <Route path="/" component={AllHouses} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
