import React from "react";
import CarouselHome from "../tools/Carousel"
import AccordionHome from "../tools/Accordion"
import TabsHome from "../tools/Tabs"
import Container from "react-bootstrap/Container";



function Home() {
    return (
      <main>
        <CarouselHome />
        <Container>
          <h1>We do YAY things</h1>
          <p>Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet, consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus a, varius eget massa.</p>
          <AccordionHome />
          <div className="d-none d-md-block">
            <TabsHome />
          </div>
        </Container>
      </main>
    );
}

export default Home;