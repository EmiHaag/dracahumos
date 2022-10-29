import React, { useEffect } from "react";
import {
  Col,
  Container,
  Row,
  Card,
  ListGroupItem,
  ListGroup,
} from "react-bootstrap";
import HeaderShop from "../components/headerShop";

import { useCookies } from "react-cookie";
import colors from "../config/colors.js";
import { AiFillCheckCircle, AiOutlineWhatsApp } from "react-icons/ai";
import { FiTruck } from "react-icons/fi";

import Footer from "../components/footer";
const PagoExitoso = () => {
  const [cookies, setCookie] = useCookies("cookieAddress", "compra");
  //console.log(cookies);
  const queryParams = new URLSearchParams(window.location.search);
  const payment_id = queryParams.get("payment_id");
  const status = queryParams.get("status");
  const idPago = queryParams.get("collection_id");
  const merchant_order_id = queryParams.get("merchant_order_id");

  console.log(payment_id, status, merchant_order_id);
  //setCookie("compra", []);
  useEffect(() => {
    let datos = [cookies.compra, cookies.cookieAddress, idPago];
    console.log(datos);
    fetch("./email/test.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === "0") {
          console.log(data);
          setCookie("compra", []);
        } else {
          console.log("Ocurrio un error al enviar email.. ");
        }
      });
  });
  return status === "approved" ? (
    <>
      <Container style={{ paddingBottom: "3em" }}>
        <Row>
          <Col></Col>
          <Col>
            <HeaderShop title={"Compra finalizada"} />
          </Col>
          <Col></Col>
        </Row>

        <Row>
          <Card className="text-center" style={{ margin: "auto" }}>
            <Card.Body>
              <Card.Title style={{ textAlign: "center" }}>
                <h3>
                  GRACIAS POR TU COMPRA
                  <span
                    style={{ textTransform: "uppercase", marginLeft: "0.5em" }}
                  >
                    {cookies.cookieAddress.firstName}
                  </span>
                  !
                </h3>
                <h3>
                  <AiFillCheckCircle
                    style={{ fontSize: "3em", color: colors.success }}
                  />
                </h3>
              </Card.Title>
              <Card.Text>Ya comenzamos a preparar tu pedido!</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush ">
              <ListGroupItem>
                <h4>
                  Datos del envío
                  <FiTruck style={{ marginLeft: "1em" }} />
                </h4>
                <Card.Text>
                  Dirección: {cookies.cookieAddress.direccion},
                  {cookies.cookieAddress.dto !== ""
                    ? cookies.cookieAddress.dto
                    : null}
                  {cookies.cookieAddress.ciudad}({cookies.cookieAddress.postal})
                </Card.Text>
                <Card.Text>
                  Provincia: {cookies.cookieAddress.provincia}
                </Card.Text>
              </ListGroupItem>
              <ListGroupItem>
                <p>
                  Cualquier duda envianos un mensaje
                  <a href="http://wa.me/5491126909643">
                    <AiOutlineWhatsApp
                      style={{
                        fontSize: "2em",
                        marginLeft: "2px",
                        color: colors.success,
                      }}
                    />
                  </a>
                </p>
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Row>
      </Container>{" "}
      <Footer></Footer>
    </>
  ) : (
    <Container>Error</Container>
  );
};

export default PagoExitoso;
