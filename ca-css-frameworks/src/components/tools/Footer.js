import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faVimeoV} from "@fortawesome/free-brands-svg-icons";



function Footer() {
    return (
      <footer>
        <Container>
        <Row>
          <Col sm={12} md={4} className="social">
            <FontAwesomeIcon icon={faVimeoV} className="foot-icons"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faYoutube} className="foot-icons"></FontAwesomeIcon>
          </Col>
          <Col>
            <p className="f-email">hello@yay.com</p>
          </Col>
          <Col>
            <p className="f-date">Copyright {new Date().getFullYear()}</p>
          </Col>
        </Row>
        </Container>
      </footer>
)}

export default Footer;