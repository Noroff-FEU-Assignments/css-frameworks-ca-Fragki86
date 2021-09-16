import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

     
function CardNews() {
    return (
      <>
      <Row>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img className="card-news-img" variant="top" src="News-images/news-1.jpg" alt="Old furniture"/>
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img variant="top" src="News-images/news-2.jpg" alt="Old camera"/>
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img variant="top" src="News-images/news-3.jpg" alt="Old tv"/>
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img variant="top" src="News-images/news-4.jpg" alt="old camera"/>
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img variant="top" src="News-images/news-5.jpg" alt="Broken tv" />
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img variant="top" src="News-images/news-6.jpg" alt="Pink polaroid camera" />
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img variant="top" src="News-images/news-7.jpg" alt="Cinema projector" />
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6} lg={3}>
          <Card className="card-news">
            <Card.Img variant="top" src="News-images/news-8.jpg" alt="Old pickup player" />
            <Card.Body className="mt-2">
              <Card.Title className="card-title-news">Nunc porttitor vel</Card.Title>
              <Card.Text>
                <p className="card-news-p mb-4">Nunc malesuada eget est fringilla dapibus.</p>
              </Card.Text>
              <ButtonGroup className="d-flex" aria-label="Basic example">
                <Button variant="primary">More</Button>
                <Button variant="secondary"></Button>
              </ButtonGroup>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </>
)}

export default CardNews;