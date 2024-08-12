import { Navbar, Nav, Container, Button, Row, Col, Card, CardBody, CardTitle, CardText } from "react-bootstrap";

const Layout = () => {
    return (
        <>
          <Container style={{ marginTop:'20px' }}>
            <Row>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150"></Card.Img>
                  <CardBody>
                    <CardTitle>Funcionalidade 1</CardTitle>
                    <CardText>
                      Descrição de Funcionalidade 1
                    </CardText>
                    <Button variant="primary" >Ver Mais</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150"></Card.Img>
                  <CardBody>
                    <CardTitle>Funcionalidade 2</CardTitle>
                    <CardText>
                      Descrição de Funcionalidade 2
                    </CardText>
                    <Button variant="primary" >Ver Mais</Button>
                  </CardBody>
                </Card>
              </Col>
              <Col md={4}>
                <Card>
                  <Card.Img variant="top" src="https://via.placeholder.com/150"></Card.Img>
                  <CardBody>
                    <CardTitle>Funcionalidade 3</CardTitle>
                    <CardText>
                      Descrição de Funcionalidade 3
                    </CardText>
                    <Button variant="primary" >Ver Mais</Button>
                  </CardBody>
                </Card>
              </Col>
            </Row>
         </Container>  
        </>
    );
}

export default Layout;