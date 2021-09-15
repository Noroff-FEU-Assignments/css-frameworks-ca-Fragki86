import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFacebookF} from "@fortawesome/free-brands-svg-icons";
import {faTwitter} from "@fortawesome/free-brands-svg-icons";

function TabsHome() {
    return (
        <Tabs defaultActiveKey="one" id="uncontrolled-tab-example">
            <Tab eventKey="one" title="First">
              <div>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                <img src="Tab-images/tab-1.jpg" />
                <div className="card-social">
                    <span>Share</span>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
              </div>
            </Tab>
            <Tab eventKey="two" title="Second">
              <div>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                <img src="Tab-images/tab-2.jpg" />
                <div className="card-social">
                    <span>Share</span>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
              </div>
            </Tab>
            <Tab eventKey="three" title="Third">
              <div>
                <p>Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus.</p>
                <img src="Tab-images/tab-3.jpg" />
                <div className="card-social">
                    <span>Share</span>
                    <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
                </div>
              </div>
            </Tab>
        </Tabs>
    );
}

export default TabsHome;