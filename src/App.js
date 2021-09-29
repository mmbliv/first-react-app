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
<<<<<<< HEAD
        <BrowserRouter.Switch>
          <BrowserRouter.Route exact path="/">
=======
        <Home />
        <Switch>
          <Route exact path="/">
>>>>>>> 976e645b290fa097fa9e4d8417b5b6cad8dc59a0
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
