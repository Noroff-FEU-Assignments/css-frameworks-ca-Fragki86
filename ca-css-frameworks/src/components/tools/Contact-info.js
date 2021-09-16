import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faPhone} from "@fortawesome/free-solid-svg-icons";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";

function ContactInfo() {
    return (
      <>
      <Row>
        <Col xs={2}>
          <FontAwesomeIcon icon={faEnvelope} className="foot-icons"></FontAwesomeIcon>
        </Col>
        <Col xs={5}>
          <p>hello@yay.com</p>
          </Col>
      </Row>
      <Row>
        <Col xs={2}>
          <FontAwesomeIcon icon={faPhone} className="foot-icons"></FontAwesomeIcon>
        </Col>
        <Col xs={5}>
          <p>123 456 7890</p>
        </Col>
      </Row>
      <Row>
        <Col xs={2}>
        <FontAwesomeIcon icon={faMapMarkerAlt} className="foot-icons"></FontAwesomeIcon>
        </Col>
        <Col xs={5}>
          <p>123 Some Street</p>
          <p>Somewhere</p>
          <p>Some City</p>
          <p>10000</p>
        </Col>
      </Row>
      </>
    );
}

export default ContactInfo;