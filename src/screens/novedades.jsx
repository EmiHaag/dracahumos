import React, { useState, useEffect } from "react";
import { Card, CardGroup, Col, Container, Row } from "react-bootstrap";

import Footer from "../components/footer";
import HeaderShop from "../components/headerShop";
import * as api from "./admin/api";
import { consts } from "./admin/config";

const Novedades = () => {
  const [data, setData] = useState([]);
  function getData() {
    api
      .getNovedades()
      .then((response) => {
        setData(response);
        console.log(response);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <HeaderShop title="Novedades" />

        <CardGroup style={{ display: "block" }}>
          {data &&
            data.length > 0 &&
            data.map((item, index) => (
              <Card key={index} style={styles.card}>
                <Card.Body>
                  <Row>
                    <span style={{ textAlign: "right", fontSize: "small" }}>
                      <i>{item.fecha}</i>
                    </span>
                  </Row>
                  <Card.Title>
                    <h4 style={styles.headers}>{item.title}</h4>
                  </Card.Title>
                  <Row>
                    <Col lg="4">
                      <Card.Img
                        src={
                          consts.LOCALHOST +
                          consts.IMAGES_FOLDER +
                          item.imageUrl
                        }
                      />
                    </Col>
                    <Col lg="8">
                      <p style={styles.text}>{item.texto}</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            ))}
        </CardGroup>
      </Container>
      <Footer></Footer>
    </>
  );
};

const styles = {
  card: { margin: "3em 0", width: "100%" },
  headers: { textAlign: "center", marginBottom: "2em" },
  text: { textAlign: "justify", marginTop: "1em", whiteSpace: "pre-line" },
};
export default Novedades;
