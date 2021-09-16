import React from "react";
import Container from "react-bootstrap/Container";
import ContactForm from "../tools/Contact-form";
import ContactInfo from "../tools/Contact-info";


function Contact() {
    return (
      <main>
        <Container>
          <ContactInfo />
          <h1>Submit your details</h1>
        </Container>
          <ContactForm />
      </main>

)};

export default Contact;