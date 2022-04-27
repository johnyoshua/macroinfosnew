import "./App.css";
import { Accueil, Boutique, Contact, Formation } from "./pages";
import Navbar from "./components/standard/Navbar";
import Footer from "./components/standard/Footer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    console.log("render");
  });
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
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
