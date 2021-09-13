import React from "react";
import Accordion from "react-bootstrap/Accordion"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"

function Home() {
    return (
      <Accordion defaultActiveKey="0" className="d-md-none">
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                        Lorem
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>Suspendisse massa diam, efficitur eu massa euismod, pretium lacinia magna.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="1">
                        Ipsem
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>Vestibulum vel nisl sodales, elementum purus nec, bibendum elit. Nullam suscipit volutpat aliquet. Donec congue dapibus est non dignissim.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="2">
                        Dolor
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in dolor eros.</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="3">
                        Porta
                    </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey="3">
                    <Card.Body>Nam ullamcorper urna quis euismod sollicitudin.</Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

export default Home;