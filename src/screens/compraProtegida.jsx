import React from "react";
import { Button, Card, Col, Alert, Container, Row } from "react-bootstrap";

import { AiOutlineCloudDownload } from "react-icons/ai";
import Footer from "../components/footer";
import HeaderShop from "../components/headerShop";
import colors from "../config/colors";
const CompraProtegida = () => {
  return (
    <>
      <Container>
        <HeaderShop title="Compra protegida" />
        <h1 style={styles.headers}>Compra protegida</h1>
        <h3>Comprá con garantía! Qué significa esto?</h3>
        <p>Simple: si tu producto llega incorrecto, te devolvemos el dinero!</p>
        <br />
        <br />
        <Row>
          <h3>Embalaje súper protegido</h3>
          <Card style={styles.card}>
            <Card.Img variant="top" src="media/embalaje/1.jpg" />
            <Card.Body>
              <Card.Title></Card.Title>
              <Card.Text>
                1) La cascada se envuelve en un extenso trozo de burbujas de
                aire, para asegurar la protección de la pieza
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Img variant="top" src="media/embalaje/2.jpg" />
            <Card.Body>
              <Card.Text>
                2) Se dá una segunda cobertura con papel de diario.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Img variant="top" src="media/embalaje/3.jpg" />
            <Card.Body>
              <Card.Text>
                3) Como resultado obtenemos una “pelota” de plástico, aire y
                diario.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Img variant="top" src="media/embalaje/4.jpg" />
            <Card.Body>
              <Card.Text>4) Se colocan en una caja DOBLE REFORZADA.</Card.Text>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Img variant="top" src="media/embalaje/5.jpg" />
            <Card.Body>
              <Card.Text>
                5) Te llega en perfectas condiciones, y sino tranqui, ya sabés…
                TU COMPRA ESTÁ GARANTIZADA!
              </Card.Text>
            </Card.Body>
          </Card>
        </Row>
        <Row>
          <Alert style={styles.notice}>
            <Alert.Heading>Dato de color:</Alert.Heading>
            <p>
              En el año 2021 reintegramos el dinero de sólo 4 cascadas sobre un
              total de 2.158 unidades despachadas.
            </p>
            <hr />
            <p className="mb-0">
              Tu felicidad es el éxito de nuestro negocio :)
            </p>
          </Alert>
        </Row>
        <br /> <br />
        <Row>
          <h3> REGALOS PARA CLIENTES</h3>
          <p>Tu compra incluye 2 regalos!</p>
          <br />
          <Card>
            <Card.Body>
              <Card.Title>1 - Carpeta virtual </Card.Title> <br />
              <p>
                El primero de los dos regalos, es una carpeta virtual con fotos
                y videos en alta resolución para que te puedas descargar y
                utilizar como quieras!
              </p>
              <Button
                href="https://drive.google.com/drive/folders/1-cyrY6xddWtg1Dp7LeD3dgB4GpOjRw4-?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                DESCARGAR CARPETA
                <span style={{ marginLeft: "1em" }}>
                  <AiOutlineCloudDownload style={{ fontSize: "2em" }} />
                </span>
              </Button>
            </Card.Body>
          </Card>
          <Card
            style={{ width: "100%", marginTop: "3em", marginBottom: "3em" }}
          >
            <Card.Body>
              <Card.Title>2 - Amuleto vikingo</Card.Title>
              <br />
              <Row>
                <Col xs={12} lg={6}>
                  <div
                    style={{
                      width: "100%",
                      height: "300px",
                      background: "url(media/embalaje/amuleto.jpg)",
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                </Col>
                <Col>
                  <Card.Text>
                    También, te enviamos un amuleto vikingo de la abundancia,
                    con una Runa Mágica para tu protección energética y
                    crecimiento de ventas en tu negocio! Recomendamos ubicarlo
                    cerca de la caja de cobros o en un lugar estratégico donde
                    sientas que potencia su poder!
                  </Card.Text>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
};

const styles = {
  card: { margin: "3em 3em 3em 0", maxWidth: "18rem" },
  headers: { textAlign: "center", marginBottom: "2em" },
  text: { textAlign: "justify", marginTop: "1em" },
  notice: { backgroundColor: colors.softGold, color: colors.dark },
};
export default CompraProtegida;
