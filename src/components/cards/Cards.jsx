import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Marfa from "../../pages/Marfa";
import axios from "axios";

function Cards() {
  const url = process.env.REACT_APP_API_HOST;
  const [taketext, setTaketext] = useState([]);

  const [marfa, SetMarfa] = useState(
    <div>
      "Echipa nostara va ajuta sa gasiti cele mai bune solutii pentru marfa
      Dvs."
    </div>
  );

  // const holdData = async () => {
  //   try {
  //     const response = await axios.get(url, "/text");
  //     console.log(response);
  //     setTaketext(response.data);
  //   } catch (err) {
  //     alert(err.message);
  //   }
  // };
  useEffect(() => {
    const holdData = async () => {
      try {
        const response = await axios.get(url);
        console.log(response);
        setTaketext(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    holdData();
  }, []);

  return (
    <div className="cards">
      <div className="hold">
        {taketext.map((info) => {
          return info.text;
        })}
      </div>

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
            <div>{marfa}</div>
          </Card.Text>
          <Button onClick={() => SetMarfa(Marfa)}>Alege oferta</Button>
        </Card.Body>
      </Card>
      {/* <button onClick={() => holdData}>clickclickclick</button> */}
    </div>
  );
}

export default Cards;
