import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function Cards() {
  return (
    <div className="cards">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="cards-img" variant="top" src="marfa.jpg" />
        <Card.Body>
          <Card.Title>Marfa</Card.Title>
          <Card.Text>
            Echipa noastra va va cauta rapid si convenabil marfa pentru a fi
            transportata cu camioanele Dvs.
          </Card.Text>
          <Button variant="secondary">Cauta Marfa</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="cards-img" variant="top" src="camion.webp" />
        <Card.Body>
          <Card.Title>Camioane</Card.Title>
          <Card.Text>
            Echipa noastra va va cauta rapid si convenabil camioane pentru
            transportarea marfii Dvs.
          </Card.Text>
          <Button variant="secondary">Cauta camioane</Button>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="cards-img" variant="top" src="angebot.png" />
        <Card.Body>
          <Card.Title>Oferta noastra</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button>Alege oferta</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
