import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Codes from "./components/pages/Codes";
import Header from "./components/Header";

import Publication from "./components/pages/Publication";
import Research from "./components/pages/ResearchPage";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/codes">
          <Codes />
        </Route>
        <Route exact path="/publication">
          <Publication />
        </Route>
        <Route exact path="/research">
          <Research />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
