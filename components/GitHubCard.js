import React from "react";
import Card from "react-bootstrap/Card";
import Dre from "../src/DreImage/Dre.jpg";
function GitHubCard() {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Dre} />
        <Card.Body>
          <Card.Title>Dre Benjamin</Card.Title>
          <Card.Text>
            I am a man learning in this big world of coding!
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;
