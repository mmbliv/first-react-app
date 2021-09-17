import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Codes from "./components/pages/Codes";
import Header from "./components/Header";
import News from "./components/pages/News";
import Publication from "./components/pages/Publication";

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
        <Route exact path="/news">
          <News />
        </Route>
        <Route exact path="/publication">
          <Publication />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
