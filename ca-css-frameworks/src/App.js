import './sass/style.scss';
import Navigation from "./components/Navigation";
import CarouselHome from "./components/Carousel";
import AccordionHome from "./components/AccordionHome";
import Footer from "./components/Footer";



function App() {
  return (
    <>
        <Navigation />
      <main>
        <CarouselHome />
        <AccordionHome />
        
      </main>
        <Footer />
    </>
  );
}

export default App;
