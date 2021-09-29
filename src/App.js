import Navbar from "./components/Navbar";
import React from "react";
import { BrowserRouter } from "react-router-dom";
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
      <BrowserRouter>
        <Header />
        <Navbar />
        <BrowserRouter.Switch>
          <BrowserRouter.Route exact path="/">
            <Home />
          </BrowserRouter.Route>
          <BrowserRouter.Route exact path="/codes">
            <Codes />
          </BrowserRouter.Route>
          <BrowserRouter.Route exact path="/publication">
            <Publication />
          </BrowserRouter.Route>
          <BrowserRouter.Route exact path="/news">
            <NewsPage />
          </BrowserRouter.Route>
          <BrowserRouter.Route exact path="/research">
            <Research />
          </BrowserRouter.Route>
        </BrowserRouter.Switch>
        <Footer />
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
