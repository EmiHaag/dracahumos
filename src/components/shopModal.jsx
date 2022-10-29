import React from "react";
import {
  Alert,
  Modal,
  Container,
  Row,
  Col,
  Button,
  Image,
} from "react-bootstrap";
import colors from "../config/colors";
import { Router } from "react-router";
import { MdDelete } from "react-icons/md";
import { useCookies } from "react-cookie";
import { createBrowserHistory } from "history";
import useApi from "../hooks/useApi";
import { useEffect } from "react";

function MydModalWithGrid(props) {
  const [cookie, setCookie] = useCookies([
    "compra",
    "promoCount",
    "buyingMayorista",
  ]);

  const totals = useApi(cookie.compra, cookie.buyingMayorista);

  const history = createBrowserHistory();

  useEffect(() => {}, [cookie.buyingMayorista, totals.cumpleMayorista]);

  function deleteAllNotMayoristasFromCompra(e) {
    var array = cookie.compra.filter((element) => element.category !== "0");
    setCookie("compra", array);
    window.location.href = "/checkout";
  }

  function handleDeleteItem(index) {
    if (index !== -1) {
      if (cookie.compra[index].category === "0") {
        let num = parseInt(cookie.promoCount) - 1;
        setCookie("promoCount", num);
      }

      var array = [...cookie.compra];
      array.splice(index, 1);
      setCookie("compra", array);
    }
  }

  if (cookie.compra && cookie.compra.length > 0) {
    return (
      <Router history={history}>
        <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Tu carrito de compras: {cookie.compra.length}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="show-grid">
            <Container>
              {cookie.compra.length > 0 && (
                <Row>
                  <Col></Col>
                  <Col style={styles.columnName}>Producto</Col>
                  <Col style={styles.columnName}>Precio</Col>

                  <Col></Col>
                </Row>
              )}

              {cookie.compra.length > 0 &&
                cookie.compra.map((item, index) => (
                  <Row
                    key={index}
                    style={
                      item.category === "0" &&
                      totals.totalPrice > 0 &&
                      !totals.cumpleMayorista &&
                      cookie.buyingMayorista === "true"
                        ? { backgroundColor: "rgb(248 215 218)" }
                        : styles.rowProduct
                    }
                  >
                    <Col style={styles.imageModalContainer}>
                      <Image
                        style={styles.imageModalRow}
                        src={item.imageUri}
                        rounded
                      />
                    </Col>
                    <Col style={styles.productName}>{item.productName}</Col>

                    <Col style={styles.price}>${item.price}</Col>

                    <Col style={{ margin: "auto" }}>
                      <MdDelete
                        onClick={() => handleDeleteItem(index)}
                        style={{
                          fontSize: "1.3em",
                          cursor: "pointer",
                        }}
                      />
                    </Col>

                    <Row></Row>
                  </Row>
                ))}
            </Container>
          </Modal.Body>
          <Modal.Footer>
            {totals.cumpleMayorista && cookie.buyingMayorista === "true" ? (
              <>
                <h3 style={styles.price}>
                  Total: ${totals.totalPrice + totals.subTotalNoMayorista}
                </h3>
                <Alert variant="success">
                  <b>
                    Sumaste 10 fuentes de humo inverso y ya podés acceder al
                    precio mayorista! <br />
                    Total de las 10 fuentes: ${totals.totalPrice}
                  </b>
                </Alert>
              </>
            ) : (
              <>
                {totals.totalPrice > 0 && cookie.buyingMayorista === "true" && (
                  <>
                    <h3 style={styles.price}>
                      Total: ${totals.subTotalNoMayorista}
                    </h3>
                    <Alert variant="danger">
                      <b>
                        Para habilitar los productos con precio mayorista debes
                        sumar 10 fuentes de humo inverso. (No incluye combos)
                      </b>
                    </Alert>
                  </>
                )}

                {totals.totalPrice > 0 &&
                  cookie.buyingMayorista === "false" && (
                    <h3 style={styles.price}>Total: ${totals.totalPrice}</h3>
                  )}
              </>
            )}
          </Modal.Footer>
          <Modal.Footer>
            <Button style={styles.btnSeguirComprando} onClick={props.onHide}>
              Seguir comprando
            </Button>

            <Button
              disabled={
                (totals.subTotalNoMayorista === 0 && totals.totalPrice === 0) ||
                (totals.subTotalNoMayorista === 0 &&
                  !totals.cumpleMayorista &&
                  cookie.buyingMayorista === "true")
              }
              style={styles.btnComprar}
              onClick={() => {
                if (
                  !totals.cumpleMayorista &&
                  cookie.buyingMayorista === "true"
                ) {
                  deleteAllNotMayoristasFromCompra();
                } else {
                  window.location.href = "/checkout";
                }
              }}
            >
              Comprar
            </Button>
          </Modal.Footer>
        </Modal>
      </Router>
    );
  } else if (cookie.compra && cookie.compra === 0) {
    return (
      <Container>
        <Row>
          <h1>No hay items en el carrito!</h1>
        </Row>
      </Container>
    );
  } else {
    return null;
  }
}
export default MydModalWithGrid;

const styles = {
  tachado: { textDecoration: "line-through" },
  btnComprar: {
    backgroundColor: colors.dark,
    borderColor: colors.gold,
  },
  columnName: {
    fontWeight: "bold",
    margin: "auto",
  },
  price: {
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
  imageModalContainer: { margin: "auto", marginBottom: "0.8em" },
  imageModalRow: { width: "100%", padding: "0.6em" },
  productName: {
    margin: "auto",
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
