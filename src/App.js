import "./App.css";
import "./components/css/App.css";
import {
  Accueil,
  Boutique,
  Contact,
  Formation,
  DetailAbout,
  ProduitDetail,
} from "./pages";
import Navbar from "./components/standard/Navbar";
import Footer from "./components/standard/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Accueil />
        </Route>
        <Route exact path="/boutique">
          <Boutique />
        </Route>
        <Route exact path="/formations">
          <Formation />
        </Route>
        <Route exact path="/about">
          <DetailAbout />
        </Route>
        <Route path="/boutique/detail/:id">
          <ProduitDetail />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
