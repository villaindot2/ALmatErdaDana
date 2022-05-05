import React from "react";
import {Card, Button, Container} from "react-bootstrap"

function content() {
  return  ( <Container className="row">
    <Card style={{ width: "18rem", background:"grey", margin: "40px"}}>
      <Card.Img variant="top" src="https://surlybikes.com/uploads/bikes/_medium_image/Lowside_BK0534_Background-2000x1333.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem",background:"grey", margin: "40px" }}>
      <Card.Img variant="top" src="https://surlybikes.com/uploads/bikes/_medium_image/Lowside_BK1527-2000x1333.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", background:"grey", margin: "40px" }}>
      <Card.Img variant="top" src="https://surlybikes.com/uploads/bikes/_medium_image/Wednesday_BK0052_Background-2000x1333.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", background:"grey", margin: "40px" }}>
      <Card.Img variant="top" src="https://static.insales-cdn.com/files/1/3270/6589638/original/%D0%92%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D0%BD%D1%8B%D0%B9-%D1%88%D0%BB%D0%B5%D0%BC-%D1%84%D1%83%D0%BB%D1%84%D0%B5%D0%B9%D1%81.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", background:"grey", margin: "40px" }}>
      <Card.Img variant="top" src="https://i0.wp.com/electropowerbikes.com/wp-content/uploads/2018/02/HTB1lolgf.jpg?resize=700%2C470&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Container>
    );
}

export default content;
