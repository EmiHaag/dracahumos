import React, { useEffect } from "react";
import {
  Card,
  Container,
  Row,
  Col,
  Button,
  Image /* , Jumbotron */,
} from "react-bootstrap";

import colors from "../config/colors";
import HeaderShop from "../components/headerShop";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import useApi from "../hooks/useApi";
import { useCookies } from "react-cookie";

const CheckOut = () => {
  const [cookieCompra, setCookie] = useCookies([
    "cookieCompra",
    "cookieAddress",
    "buyingMayorista",
  ]);

  const totals = useApi(cookieCompra.compra);

  useEffect(() => {
    setCookie("cookieAddress", {});
    console.log(cookieCompra, totals);
  }, []);

  return (
    <>
      <Container>
        <HeaderShop title={"TU COMPRA"} />

        {cookieCompra.compra.length > 0 ? (
          <Row>
            <Col style={styles.imageModalContainer}></Col>
            <Col style={styles.columnName}>Producto</Col>
            <Col style={styles.columnName}>Precio</Col>
          </Row>
        ) : (
          <div>
            Aún no seleccionaste ningún producto. Ir a la
            <Link to="/mayoristas">tienda</Link>
          </div>
        )}
        {cookieCompra.compra.length > 0 &&
          cookieCompra.compra.map((item, index) => (
            <Row key={index} style={styles.rowProduct}>
              <Col style={styles.imageModalContainer}>
                <Image
                  style={styles.imageModalRow}
                  src={item.imageUri}
                  rounded
                />
              </Col>
              <Col style={styles.productName}>{item.productName}</Col>
              <Col style={styles.price}>${item.price}</Col>
            </Row>
          ))}
        {cookieCompra.compra.length > 0 && (
          <Row style={styles.priceContainer}>
            <h3 style={styles.discountPrice}>
              Total
              <span style={{ fontSize: "2rem" }}>
                $
                {totals.cumpleMayorista &&
                cookieCompra.buyingMayorista === "true"
                  ? totals.totalPrice + totals.subTotalNoMayorista
                  : totals.subTotalNoMayorista}
              </span>
            </h3>

            <Link
              to={{ pathname: "/checkout-address" }}
              style={styles.containerBtnConfirmar}
            >
              <Button size="xxl" style={styles.btnConfirmar}>
                Continuar
              </Button>
            </Link>
          </Row>
        )}
      </Container>
      <Footer></Footer>
    </>
  );
};

export default CheckOut;

const styles = {
  containerBtnConfirmar: { width: "33%", height: "4em", margin: "auto" },

  btnConfirmar: {
    backgroundColor: colors.dark,
    borderColor: colors.gold,
    width: "100%",
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
