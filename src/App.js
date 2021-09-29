import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/pages/Home";
import Codes from "./components/pages/Codes";
import Header from "./components/Header";
import { LanguageProvider } from "./constainers/Languages";
import Publication from "./components/pages/Publication";
import Research from "./components/pages/ResearchPage";
import NewsPage from "./components/pages/News";
import Footer from "./components/Footer";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Header />
        <Navbar />
        <Home />
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
          <Route exact path="/news">
            <NewsPage />
          </Route>
          <Route exact path="/research">
            <Research />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </LanguageProvider>
  );
}

export default App;
