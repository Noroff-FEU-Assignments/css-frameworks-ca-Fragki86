import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import FormControl from "react-bootstrap/FormControl";

function Nav() {
    return (
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">The YAY company</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#news">News</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      <Form className="d-flex">
      {/* <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      /> */}
      <Button variant="outline-success">Search</Button>
    </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
    );
}

export default Nav;