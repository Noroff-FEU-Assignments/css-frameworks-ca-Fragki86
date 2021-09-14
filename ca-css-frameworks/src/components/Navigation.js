import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

function Navigation() {
    return (
      <header>
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">The YAY company</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
              <Nav>
                <Nav.Link href="#action1">Home</Nav.Link>
                <Nav.Link href="#action2">News</Nav.Link>
                <Nav.Link href="#action2">Contact</Nav.Link>
              </Nav>
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </header>
    );
}

export default Navigation;