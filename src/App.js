import './App.css';
import Accueil from './Accueil'
import Formation from './Formation'
import Boutique from './Boutique'
import Contact from './Contact'
import Navbar from './components/standard/Navbar';
import Footer from './components/standard/Footer';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";



function App() {
  return (<div className='mt-0'>
        <Router>
      <Navbar />
      <Switch>
        <Route exact path="/boutique">
          <Boutique />
        </Route>
        <Route exact path="/formations">
          <Formation />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/">
          <Accueil />
        </Route>
      </Switch>
      <Footer />
  </Router>
  </div>
    

  );
}

export default App;
