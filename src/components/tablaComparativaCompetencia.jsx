import React from "react";

import { Container, Image, Col, Table } from "react-bootstrap";
const TablaCompetencia = () => {
  return (
    <Container>
      <Table striped bordered hover size="sm">
        <tbody>
          <tr>
            <td></td>
            <td>
              <Col xs={6} md={4}>
                <Image
                  src="./media/mercado/img/zendaincense.png"
                  rounded
                  style={styles.imgCol}
                />
              </Col>
            </td>
            <td>
              <Col xs={6} md={4}>
                <Image
                  src="./media/mercado/img/draca.png"
                  rounded
                  style={styles.imgCol}
                />
              </Col>
            </td>
            <td>
              <Col xs={6} md={4}>
                <Image
                  src="./media/mercado/img/chinas.png"
                  rounded
                  style={styles.imgCol}
                />
              </Col>
            </td>
          </tr>
          <tr>
            <td>Diversidad estética</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Reventa</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Tamaño</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Relación costo/calidad</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Son frágiles</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Duración de incienso</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Esencias artificiales con colorantes</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Embalaje</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td>Beneficios en envío</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};
export default TablaCompetencia;
const styles = {
  imgCol: {
    width: "200px",
  },
};
