import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

     
function CardNews() {
    return (
      <>
      
      <Card className="card-news">
        <Card.Img variant="top" src="News-images/news-1.jpg" />
        <Card.Body>
          <Card.Title>Nunc porttitor vel</Card.Title>
          <Card.Text>
            Nunc malesuada eget est fringilla dapibus.
          </Card.Text>
          <Button variant="primary">More</Button>
        </Card.Body>
      </Card>
      </>
)}

export default CardNews;