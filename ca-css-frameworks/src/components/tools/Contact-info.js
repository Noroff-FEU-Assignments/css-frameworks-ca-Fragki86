import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
    return (
      <>
      <Container className="contact-info-container">
      <Row className="mb-2">
        <Col xs={2} className="contact-info-icons">
          <FontAwesomeIcon icon={faEnvelope} className="foot-icons"></FontAwesomeIcon>
        </Col>
        <Col xs={10} className="contact-info-details">
          <p>hello@yay.com</p>
          </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={2} className="contact-info-icons">
          <FontAwesomeIcon icon={faPhone} className="foot-icons"></FontAwesomeIcon>
        </Col>
        <Col xs={10} className="contact-info-details">
          <p>123 456 7890</p>
        </Col>
      </Row>
      <Row className="mb-2">
        <Col xs={2} className="contact-info-icons">
        <FontAwesomeIcon icon={faMapMarkerAlt} className="foot-icons"></FontAwesomeIcon>
        </Col>
        <Col xs={10} className="contact-info-details" id="contact-info-address">
          <p>123 Some Street</p>
          <p>Somewhere</p>
          <p>Some City</p>
          <p>10000</p>
        </Col>
      </Row>
      </Container>
      </>
    );
}

export default ContactInfo;