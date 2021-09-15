import './sass/style.scss';
import Navigation from "./components/tools/Navigation";
import Home from "./components/pages/Home";
import News from "./components/pages/News";
import Contact from "./components/pages/Contact";
import Footer from "./components/tools/Footer";
// import {BrowserRouter as Router, Switch, Route} from "react-rooter-dom";




function App() {
  return (
    <>
        <Navigation />
        <Home />
        {/* <News />
        <Contact /> */}
        <Footer />
    </>
  );
}

export default App;
