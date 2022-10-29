import React, { useState } from "react";
import {
  Alert,
  Card,
  Container,
  Col,
  Row,
  Button,
  Form,
  /*  Jumbotron, */
  ListGroup,
} from "react-bootstrap";
import colors from "../config/colors";
import HeaderShop from "../components/headerShop";
import Footer from "../components/footer";
import { createBrowserHistory } from "history";
import { Cookies, useCookies } from "react-cookie";

const Address = () => {
  const [cookies, setCookie] = useCookies("cookieAddress");
  const [costoEnvio, setCostoEnvio] = useState(0);
  const envioBsAs = 1200;
  const envioInterior = 1400;

  if (!cookies.cookieAddress) {
    console.log("no existe cookie address, creando.. ");
    setCookie("cookieAddress", {});
  }
  const history = createBrowserHistory();

  const handleChange = (e) => {
    let obj = cookies.cookieAddress;

    if (e.target.name === "bsas" || e.target.name === "aSucursal") {
      let form = document.forms["form"];
      let auxcostoEnvio = 0;
      //caso 1 : bsas == 1 sucursal == 1
      if (
        form.elements["bsas"].value === "1" &&
        form.elements["aSucursal"].value === "1"
      ) {
        //caso 1 : bsas == 1 sucursal == 1
        auxcostoEnvio = 450;
      } else if (
        form.elements["bsas"].value === "1" &&
        form.elements["aSucursal"].value === "0"
      ) {
        //caso 2 : bsas == 1 sucursal == 0
        auxcostoEnvio = envioBsAs;
      } else if (
        form.elements["bsas"].value === "0" &&
        form.elements["aSucursal"].value === "1"
      ) {
        //caso 3 : bsas == 0 sucursal == 1
        auxcostoEnvio = 650;
      } else if (
        form.elements["bsas"].value === "0" &&
        form.elements["aSucursal"].value === "0"
      ) {
        // caso 4 : bsas == 0 sucursal == 0
        auxcostoEnvio = envioInterior;
      }
      setCostoEnvio(auxcostoEnvio);
      obj["costoEnvio"] = auxcostoEnvio;
    }
    obj[e.target.name] = e.target.value;

    setCookie("cookieAddress", obj);

    console.log(cookies.cookieAddress);
  };

  const handleSubmit = (e) => {
    /* e.preventDefault(); */

    console.log(cookies.cookieAddress);
    history.push("/payment");
  };

  return (
    <>
      <Container>
        <HeaderShop title={"DATOS DE ENVÍO"} />
        <Card style={{ padding: "1em", marginBottom: "3em" }}>
          <h5>Datos para gestionar envío y facturación.</h5>
          <Form id="form" onSubmit={handleSubmit}>
            <Row xs={12} s={12} md={3}>
              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  id="firstName"
                  required
                  name="firstName"
                  onChange={handleChange}
                  placeholder="Tu nombre"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  required
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  placeholder="Tu appelido"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>CUIL/CUIT</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  required
                  id="dni"
                  name="dni"
                  onChange={handleChange}
                  placeholder="Tu cuil o cuit"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>Dirección</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  required
                  id="direccion"
                  name="direccion"
                  onChange={handleChange}
                  placeholder="Calle y número"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>Departamento / Piso</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  id="dto"
                  name="dto"
                  onChange={handleChange}
                  placeholder="Departamento / Piso"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>Ciudad</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  required
                  id="ciudad"
                  name="ciudad"
                  onChange={handleChange}
                  placeholder="Nombre de tu ciudad"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>Provincia</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  required
                  id="provincia"
                  name="provincia"
                  onChange={handleChange}
                  placeholder="Nombre de tu provincia"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>COD POSTAL</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  required
                  id="postal"
                  name="postal"
                  onChange={handleChange}
                  placeholder="Código postal (ej:7000)"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>Teléfono</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  required
                  id="telefono"
                  name="telefono"
                  onChange={handleChange}
                  placeholder="(xxx)-(xxxxxxxxxx)"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Form.Label>email</Form.Label>
                <Form.Control
                  style={styles.inputCtrl}
                  placeholder="Email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  aria-describedby="basic-addon1"
                />
              </Form.Group>

              <Form.Group as={Col} xs={12} s={12}>
                <Card style={{ width: "100%" }}>
                  <Card.Body>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Form.Label>Tipo de envío</Form.Label>
                        <Form.Check
                          className="mb-3"
                          type="radio"
                          id="default-radio"
                          label={"Pcia. Buenos Aires"}
                          name="bsas"
                          required
                          onChange={handleChange}
                          value="1"
                        />
                        <Form.Check
                          className="mb-3"
                          type="radio"
                          id="default-radio"
                          label={"Resto del país"}
                          name="bsas"
                          required
                          onChange={handleChange}
                          value="0"
                        />
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Form.Check
                          className="mb-3"
                          type="radio"
                          id="default-radio"
                          label={"a sucursal (no disponible)"}
                          name="aSucursal"
                          required
                          onChange={handleChange}
                          value="1"
                          disabled
                        />
                        <Form.Check
                          className="mb-3"
                          type="radio"
                          id="default-radio"
                          label={"a domicilio"}
                          name="aSucursal"
                          required
                          checked
                          onChange={handleChange}
                          value="0"
                        />
                      </ListGroup.Item>
                    </ListGroup>
                    <Form.Label>
                      Total envío <b>$ {costoEnvio}</b>
                    </Form.Label>
                  </Card.Body>
                </Card>
              </Form.Group>
            </Row>
            <Row>
              <Button style={styles.btnComprar} type="submit">
                Continuar
              </Button>
            </Row>
            <Row style={{ marginTop: "2em" }}>
              <Alert variant="success">
                <Alert.Heading>Sabías que.. </Alert.Heading>

                <p>
                  Nuestras encomiendas mayoristas van en caja importada, doble
                  reforzada 💪🏾 con burbujas de aire en su interior para que te
                  lleguen intactas! 😎 Y si algo te llega incorrecto, no te
                  preocupes! Tu compra está protegida ❤️.
                </p>
              </Alert>
            </Row>
          </Form>
        </Card>
      </Container>
      <Footer></Footer>
    </>
  );
};

export default Address;

const styles = {
  inputCtrl: {
    width: "100%",
  },
  btnComprar: {
    backgroundColor: colors.dark,
    borderColor: colors.gold,
    width: "33%",
    height: "4em",
    margin: "auto",
  },
  center: {
    margin: "auto",
    width: "50%",
  },
  columnName: {
    fontWeight: "bold",
    margin: "auto",
  },
  price: {
    textDecoration: "line-through",
    fontWeight: "bold",
    color: colors.primary,
    margin: "auto",
  },
  discountPrice: {
    fontSize: "large",
    fontWeight: "bold",
    color: colors.dark,
    margin: "auto",
  },
  imageModalContainer: { margin: "auto", maxWidth: "9em" },
  imageModalRow: { width: "100%", height: "100%", padding: "0.6em" },
  productName: {
    margin: "auto",
  },
  priceContainer: {
    height: "12em",
  },
  rowProduct: {
    backgroundColor: colors.secondary,
    marginBottom: "0.2em",
  },
  btnSeguirComprando: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
  },
};
