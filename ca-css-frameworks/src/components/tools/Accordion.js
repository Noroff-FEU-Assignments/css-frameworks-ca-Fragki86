import React from "react";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";
import Row from "react-bootstrap/esm/Row";


function AccordionHome() {
    return (
        <Accordion defaultActiveKey="0" className="d-md-none" id="accordion-style">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        First
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                    <Row>
                        <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p> 
                        <img src="Tab-images/tab-1.jpg" className="card-image" alt="An old TV"/>
                        <div className="card-social">
                            <span>Share</span>
                            <FontAwesomeIcon icon={faFacebookF} className="social-icons"></FontAwesomeIcon>
                            <FontAwesomeIcon icon={faTwitter} className="social-icons"></FontAwesomeIcon>
                        </div>
                    </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Second
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Row>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p> 
                            <img src="Tab-images/tab-2.jpg" className="card-image" alt="Many frames on the wall with coffee cups"/>
                            <div className="card-social">
                                <span>Share</span>
                                <FontAwesomeIcon icon={faFacebookF} className="social-icons"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faTwitter} className="social-icons"></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Third
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Row>
                            <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p> 
                            <img src="Tab-images/tab-3.jpg" className="card-image" alt="A broken window"/>
                            <div className="card-social">
                                <span>Share</span>
                                <FontAwesomeIcon icon={faFacebookF} className="social-icons"></FontAwesomeIcon>
                                <FontAwesomeIcon icon={faTwitter} className="social-icons"></FontAwesomeIcon>
                            </div>
                        </Row>
                    </Card.Body>
                </Accordion.Collapse>           
            </Card>
        </Accordion>
    );
}

export default AccordionHome;