import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

import Footer from "../components/footer";
import HeaderShop from "../components/headerShop";

const QuienesSomos = () => {
  return (
    <>
      <Container>
        <HeaderShop title="Nosotras" />
        <h1>Nosotras - Quienes somos ? </h1>
        <Row>
          <Card>
            <Card.Body>
              <Row>
                <Col lg="3">
                  <Card.Img src="/media/nosotras/nosotras.jpg" />
                </Col>
                <Col lg="8">
                  <p>
                    Somos Virginia y Carolina, al frente de DRACA HUMOS e
                    inventoras del sahumerio de humo inverso® en Argentina, con
                    esencias naturales, sin colorantes y de 30 minutos de
                    duración cada uno. Fabricamos tanto las cascadas de humo
                    como los inciensos inversos, destacándonos principalmente
                    como vendedoras mayoristas, distribuyendo a todo el pais,
                    con los máximos recaudos para que las fuentes de humo
                    inverso te lleguen intactas ☺.
                  </p>
                  <p>
                    Realizamos nuestra labor con entera confianza, amor y
                    respeto, agradeciendo la misma abundancia que producimos y
                    recibimos. Si hay algo en lo que te podemos ayudar, o nos
                    querés dejar un mensaje que nos ayude a mejorar, escribinos
                    a nuestro
                    <a
                      href="http://wa.me/5491126909643"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Whatsapp!
                    </a>
                    .
                  </p>
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

export default QuienesSomos;
