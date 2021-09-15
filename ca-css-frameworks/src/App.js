import './sass/style.scss';
import Navigation from "./components/tools/Navigation";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Footer from "./components/tools/Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";




function App() {
  return (
    <Router>
      <>
        <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={Contact} />
          </Switch>
        <Footer />
      </>
    </Router>
  );
}

export default App;
