import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import gotLogo from "./gotLogo.svg";

import "./index.css";
import HouseDetails from "./HouseDetails";
import AllHouses from "./AllHouses";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <header className="header-wrapper">
        <img
          className="gotLogo"
          src={gotLogo}
          alt="game of thrones logo, big, black/white"
        ></img>
        <h1>House-Browser</h1>
      </header>
      <Switch>
        <Route path="/:houseId" component={HouseDetails} />
        <Route path="/" component={AllHouses} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
