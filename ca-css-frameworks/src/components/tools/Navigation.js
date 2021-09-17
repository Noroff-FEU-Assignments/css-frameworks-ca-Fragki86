import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";

function Navigation() {
    return (
      <header>
      <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#">The YAY Company</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Container>
              <Navbar.Collapse id="navbarScroll" className="nav-adjust">
                <Nav className="me-auto" variant="pills" >
                  <Nav.Link href="/" active>Home</Nav.Link>
                  <Nav.Link href="/news">News</Nav.Link>
                  <Nav.Link href="/contact">Contact</Nav.Link>
                </Nav>
                <Form>
                <InputGroup className="search-form">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    className="search-input"
                  />
                  <Button className="form-btn" bg="dark" variant="primary">
                    Go
                  </Button>
                </InputGroup>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Container>
        </Navbar>
        </header>
    );
}

export default Navigation;