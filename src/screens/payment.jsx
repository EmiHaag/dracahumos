import React, { useEffect } from "react";

import { Container, Card, Row } from "react-bootstrap";

import Footer from "../components/footer";
import { useCookies } from "react-cookie";
import HeaderShop from "../components/headerShop";

const Payment = () => {
  const axios = require("axios");
  const [cookies, setCookie] = useCookies("cookieAddress");

  const mountScript = (prefId) => {
    console.log(prefId);
    const script = document.createElement("script");

    script.src =
      "https://www.mercadopago.com.ar/integrations/v1/web-payment-checkout.js";

    script.setAttribute("data-preference-id", prefId);

    document.getElementById("btnPagar").appendChild(script);
  };

  useEffect(() => {
    let datos = JSON.stringify([cookies.compra, cookies.cookieAddress]);
    // console.log(datos);
    /*     //fetch("/mercadopago/test.php", {
    fetch("http://localhost/mercadopago/test.php", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: datos,
    })
      .then((response) => {
        console.log(response);
        response.json()})
      .then((data) =>{console.log(data); mountScript(data)})
      ; */

    axios
      .post("/mercadopago/test.php", datos)

      .then((data) => {
        //console.log(data.data);
        mountScript(data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  });

  return (
    <>
      <Container>
        <HeaderShop title={"Pago"} />

        <Row style={{ marginBottom: "10em" }}>
          <Card>
            <Card.Body>
              <p>
                Para el pago utilizamos la plataforma de Mercado Pago
                <img
                  src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.4/mercadopago/logo__large.png"
                  alt="icono mercadopago"
                  title="logo mercadopago"
                  style={{ width: "120px" }}
                />
              </p>
              <p>
                Al hacer click en pagar, se mostrará una ventana de mercadopago
                para poder realizar la operación. Si el pago es exitoso te
                mostraremos los detalles de tu compra y nos pondremos en
                contacto con vos para confirmar los datos de envío.
              </p>
              <h3 id="btnPagar"></h3>
            </Card.Body>
          </Card>
        </Row>
      </Container>

      <Footer></Footer>
    </>
  );
};

export default Payment;
