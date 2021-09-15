import React from "react";
import Container from "react-bootstrap/Container";
import PaginationNews from "../tools/Pagination";
import CardNews from "../tools/Cards";




function News() {
    return (
      <main>
        <Container>
          <h1>NEWS</h1>
          <PaginationNews />
          <CardNews />
        </Container>
      </main>
    );
}

export default News;