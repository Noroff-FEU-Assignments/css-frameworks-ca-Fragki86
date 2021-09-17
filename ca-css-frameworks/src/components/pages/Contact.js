import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContactForm from "../tools/Contact-form";
import ContactInfo from "../tools/Contact-info";


function Contact() {
    return (
      <main>
        <Container className="px-0 px-sm-3">
          <Row className="main-contact-container">
            <Col md={6} md={{order:2}} className="pr-0">
              <ContactInfo/>
            </Col>
            <Col md={6} className="pr-0">
              <ContactForm />
            </Col>
          </Row>
        </Container>
      </main>

)};

export default Contact;