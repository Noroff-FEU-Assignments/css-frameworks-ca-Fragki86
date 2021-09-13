import './sass/style.scss';
import Navigation from "./components/Navigation";
import CarouselHome from "./components/Carousel";
import Home from "./components/AccordionHome";

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <CarouselHome />
        <Home />
      </main>


      <footer>

      </footer>
    </>
  );
}

export default App;
