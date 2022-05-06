import React from "react";
import {Card, Button, Container,Table,Accordion} from "react-bootstrap"

class content extends React.Component {
 constructor(props) { super(props);this.state = {}}
  clickB ()
  { 
      alert ("RESERVED");
  }
  render () { return (
  <Container className="row">

<Accordion  defaultActiveKey="0">
  <Accordion.Item eventKey="0">
    <Accordion.Header>Условия проката</Accordion.Header>
    <Accordion.Body>
    1 велосипед - одно удостоверение (только оригинал)
В случае отсутствия удостоверения Вы можете предоставить паспорт или водительское удостоверение в качестве залога. В случае отсутствия данных документов Вы можете предоставить денежный залог в размере стоимости единицы единицы товара, которую Вы берете в аренду. 
Для детей и подростков младше 18 лет выдача прокатного инвентаря производится под ответственность родителя или опекуна (требуется его личное присутствие и удостоверение личности)
Если Вы берете велосипеды и другие товары на прокат через юридическое лицо (на группу лиц), Вы можете использовать доверительное письмо на ответственного человека и его удостоверение личности. 
    </Accordion.Body>
  </Accordion.Item>
</Accordion>


<Table style={{width:"100%"}} striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Bikes</th>
      <th>Weekday</th>
      <th>Weekends</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>1 hour</td>
      <td>1000 KZT</td>
      <td>1500 KZT</td>
    </tr>
    <tr>
      <td>2</td>
      <td>DAY (9:00-18:00)</td>
      <td>4000 KZT</td>
      <td>4500 KZT</td>
    </tr>
    <tr>
      <td>3</td>
      <td>Full day(24h)</td>
      <td>4500 KZT</td>
      <td>5000 KZT</td>
    </tr>
    
    <tr>
      <td>4</td>
      <td>Helmet</td>
      <td>500 KZT</td>
      <td>1000 KZT</td>
    </tr>
    <tr>
      <td>5</td>
      <td>equipment</td>
      <td>1000 KZT</td>
      <td>1500 KZT</td>
    </tr>
    <tr>
      <td></td>
      <td colSpan={2}>penalty for breakdown</td>
      <td>For damage to spare parts on a rental bike, you pay 70% of the cost of a new spare part.</td>
    </tr>
  </tbody>
</Table>


    <Card style={{ width: "18rem", background: "silver", margin: "10px"}}>
      <Card.Img variant="top" src="https://image.made-in-china.com/202f0j00jRiUKZyckJbY/Lady-Vintage-Bicycle-Fashion-Antique-Bikes-Vintage-Bike-Aluminum-Women-Road-Bike-City-Bicycle-The-Bikes.jpg" />
      <Card.Body>
        <Card.Title>City Bike</Card.Title>
        <Card.Text>
        Bike Altair City 28 low red/white/green, 1 speed. height 19" - Forward.
        </Card.Text>
        <Button onClick={this.clickB} variant="primary">Rent</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem",background:"silver", margin: "10px" }}>
      <Card.Img variant="top" src="https://surlybikes.com/uploads/bikes/surly-wednesday-fat-bike-BK7965_Background_1200x800.jpg" />
      <Card.Body>
        <Card.Title>Mountain Bike</Card.Title>
        <Card.Text>
        MountBike Axis FS 26 2.0 disc, 26", 18 speed, рост 16", бежевый/черный - Axis.
        </Card.Text>
        <Button onClick={this.clickB} variant="primary">Rent</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", background:"silver", margin: "10px" }}>
      <Card.Img variant="top" src="https://cdn.shopify.com/s/files/1/0027/8645/9757/products/bikes_22_curb_k400blk22_6e8d0d8f-07df-43b3-8df2-6c978daefb37_1800x1800.jpg?v=1623353353" />
      <Card.Body>
        <Card.Title>BMX</Card.Title>
        <Card.Text>
         BMX Madness 1, black-silver, wheels 20'', frame "steel"  - Stark.
        </Card.Text>
        <Button onClick={this.clickB} variant="primary">Rent</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", background:"silver", margin: "10px" }}>
      <Card.Img variant="top" src="https://static.insales-cdn.com/files/1/3270/6589638/original/%D0%92%D0%B5%D0%BB%D0%BE%D1%81%D0%B8%D0%BF%D0%B5%D0%B4%D0%BD%D1%8B%D0%B9-%D1%88%D0%BB%D0%B5%D0%BC-%D1%84%D1%83%D0%BB%D1%84%D0%B5%D0%B9%D1%81.jpg" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          helmets and gloves.
        </Card.Text>
        <Button onClick={this.clickB} variant="primary">Rent</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: "18rem", background:"silver", margin: "10px" }}>
      <Card.Img variant="top" src="https://i0.wp.com/electropowerbikes.com/wp-content/uploads/2018/02/HTB1lolgf.jpg?resize=700%2C470&ssl=1" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Basic equipment.
        </Card.Text>
        <Button onClick={this.clickB} variant="primary">Rent</Button>
      </Card.Body>
    </Card>
    </Container>
    );
} }

export default content;

