import React, { useState } from "react";
import { Card, Col, Button, ListGroup, Row } from "react-bootstrap";
import "./styles.css";
import LogOut from "../../components/LogOut.jsx";

const MainAdmin = (props) => {
  return (
    <div className="container" style={{ marginTop: "10em" }}>
     
      <Card>
        <Row>
          <Col>
            <ListGroup>
              <Button style={styles.btn} href="/listar">
              Editar stock / Editar producto
              </Button>

              <Button style={styles.btn} variant="success" href="/agregar">
                Agregar modelo
              </Button>
            
              <Button style={styles.btn} variant="danger" href="/eliminar">
                Eliminar modelo
              </Button>
            </ListGroup>
          </Col>
          <Col>
            <ListGroup>
              <Button
                style={styles.btn}
                variant="success"
                href="/agregar-novedad"
              >
                Agregar novedad
              </Button>
              <Button
                style={styles.btn}
                variant="danger"
                href="/eliminar-novedad"
              >
                Eliminar novedad
              </Button>
            </ListGroup>
          </Col>
        </Row>
      </Card>
      <LogOut {...props} />

    </div>
  );
};

export default MainAdmin;

const styles = {
  btn: { height: "4em", padding: "1em" },
};
