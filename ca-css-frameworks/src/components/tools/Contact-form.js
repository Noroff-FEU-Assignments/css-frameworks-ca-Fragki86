import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/esm/Container";






function ContactForm() {
    return (
      <>
      <Container className="px-sm-0">  
      <h1>Submit your details</h1>
      </Container>
      <Form className="contact-form mt-md-4">
        <Container>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="password" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Label>Website</Form.Label>
        <InputGroup>
          <InputGroup.Prepend className="d-none d-md-block">
            <InputGroup.Text id="basic-addon3">
              https://
            </InputGroup.Text>
          </InputGroup.Prepend>
          <Form.Control id="basic-url" />
        </InputGroup>

        <Form.Group controlId="formBasicText">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={5} />
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox">
          <Form.Check className="checkbox" variant="primary" type="checkbox" label="Allow us to sell your personal details to whomever we want" />
        </Form.Group>
        <Button className="contact-form-btn" variant="secondary" type="submit">
          Submit
        </Button>
        </Container>
      </Form>
      </>
    );
}

export default ContactForm;