import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import Footer from "../components/footer";
import HeaderShop from "../components/headerShop";
import TablaCompetencia from "../components/tablaComparativaCompetencia";
const HumoInverso = () => {
  return (
    <>
      <Container>
        <HeaderShop title="Cascadas de humo inverso" />

        <h1 style={styles.headers}>
          Qué son y cómo funcionan las cascadas de humo inverso ?
        </h1>
        <Row>{/*   <TablaCompetencia /> */}</Row>
        <Row>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title>
                <h4 style={styles.headers}>Que son las cascadas de humo ?</h4>
              </Card.Title>
              <Row>
                <Col lg="4">
                  <Card.Img src="/media/cascada_grande/otras/cascada-grande-zoom1.jpg" />
                </Col>
                <Col lg="8">
                  <p style={styles.text}>
                    Son esculturas feng shui, que al apoyarle un incienso
                    inverso, su humo precipita hacia abajo como el agua,
                    formando una cascada de humo y esencia. Está indicado para
                    crear ambientes pacíficos, logrando que tu atención esté
                    enfocada únicamente en el recorrido del mágico humo cayendo.
                    Sorprende a tus clientes, familiares ó amigos con este
                    espectáculo inigualable!
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title>
                <h4 style={styles.headers}>
                  Cómo funcionan las fuentes de humo ?
                </h4>
              </Card.Title>
              <Row>
                <Col lg="4">
                  <Card.Img src="/media/cascada_grande/otras/humo-cae-sahumerio.jpg" />
                </Col>
                <Col lg="8">
                  <p style={styles.text}>
                    Se enciende un incienso inverso y se lo apoya en la
                    escultura. Especialmente diseñadas para armonizar ambientes,
                    sorprender, y llevar alegría a tus espacios, las cascadas de
                    humo se caracterizan por su función de permitirle al
                    espectador conectarse con sus emociones y aumentar la
                    concentración, a través de la aromaterapia y el increíble
                    efecto visual.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card style={styles.card}>
            <Card.Body>
              <Card.Title>
                <h4 style={styles.headers}>Por qué el humo cae como agua ?</h4>
              </Card.Title>
              <Row>
                <Col lg="4">
                  <Card.Img src="/media/cascada_grande/otras/porque-el-humo-cae-como-agua-sahumerio-inverso.jpg" />
                </Col>
                <Col lg="8">
                  <p style={styles.text}>
                    El sahumerio de humo inverso® posee dos tipos de humos: el
                    humo habitual, que va hacia arriba, y otro humo especial que
                    va hacia abajo, recorriendo la superficie como si fuese
                    agua. Este fenómeno ocurre porque ese humo es más denso que
                    el aire, generando una cascada mágica, perfecta para lograr
                    una meditación instantánea al llamar de inmediato tu
                    atención. Se puede tocar, y sentir en tus dedos, es como
                    tocar nubecitas.
                  </p>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>{" "}
      <Footer></Footer>
    </>
  );
};

const styles = {
  card: { margin: "3em 0" },
  headers: { textAlign: "center", marginBottom: "2em" },
  text: { textAlign: "justify", marginTop: "1em" },
};
export default HumoInverso;
