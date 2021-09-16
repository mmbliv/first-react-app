import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Codes from "./components/pages/Codes";
import Header from "./components/Header";
import News from "./components/pages/News";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Switch>
        <Router exact path="/">
          <Home />
        </Router>
        <Router exact path="/codes">
          <Codes />
        </Router>
        <Router exact path="/news">
          <News />
        </Router>
      </Switch>
    </Router>
  );
}

export default App;
