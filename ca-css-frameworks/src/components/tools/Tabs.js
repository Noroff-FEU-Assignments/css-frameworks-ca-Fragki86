import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

function TabsHome() {
    return (
        <Tabs defaultActiveKey="one" id="uncontrolled-tab-example" className="tabs-custom">
            <Tab eventKey="one" title="First" >
              <Container className="tabs-container">
                <Row>
                  <Col md={4}>
                    <img src="Tab-images/tab-1.jpg" alt="An old TV" className="tabs-img" />
                  </Col>
                  <Col md={8} className="tabs-info">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                    <div className="tabs-social">
                        <span>Share</span>
                        <FontAwesomeIcon icon={faFacebookF} className="social-icons"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter} className="social-icons"></FontAwesomeIcon>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="two" title="Second">
              <Container className="tabs-container">
                <Row>
                  <Col md={4}>
                    <img src="Tab-images/tab-2.jpg" alt="Frames on the wall" className="tabs-img" />
                  </Col>
                  <Col md={8} className="tabs-info">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                    <div className="tabs-social">
                        <span>Share</span>
                        <FontAwesomeIcon icon={faFacebookF} className="social-icons"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter} className="social-icons"></FontAwesomeIcon>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
            <Tab eventKey="three" title="Third">
              <Container className="tabs-container">
                <Row>
                  <Col md={4}>
                    <img src="Tab-images/tab-3.jpg" alt="Broken window" className="tabs-img" />
                  </Col>
                  <Col md={8} className="tabs-info">
                    <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                    <div className="tabs-social">
                        <span>Share</span>
                        <FontAwesomeIcon icon={faFacebookF} className="social-icons"></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faTwitter} className="social-icons"></FontAwesomeIcon>
                    </div>
                  </Col>
                </Row>
              </Container>
            </Tab>
        </Tabs>
    );
}

export default TabsHome;