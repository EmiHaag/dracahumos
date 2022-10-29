import React, { useState, useEffect } from "react";
import { Alert, CardGroup, Container, Row, Col } from "react-bootstrap";

import HeaderShop from "../components/headerShop";
import ProductBox from "../components/productBox";
import { Link } from "react-router-dom";

import Footer from "../components/footer";
import { useCookies } from "react-cookie";
import * as api from "./admin/api";
import { consts } from "./admin/config";
import colors from "../config/colors";

function Mayoristas() {
  const [cookie, setCookie] = useCookies([
    "compra",
    "promoCount",
    "buyingMayorista",
  ]);

  const [data, setData] = useState([]);

  function getData() {
    api
      .getItems()
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getData();
    setCookie("buyingMayorista", true);
  }, [cookie.promoCount]);

  return (
    <>
      <Container>
        <HeaderShop title="TIENDA MAYORISTA" />
        <Alert style={{ backgroundColor: colors.softGold, color: colors.dark }}>
          Mínimo para compra mayorista: 1 combo o 10 fuentes.
        </Alert>
        {/* 

        PROMOS CATEGORY == 4

        */}
        <Row>
          <h3>Combos</h3>
          <CardGroup>
            {data &&
              data.length > 0 &&
              data
                .filter((item) => item.category === "4")
                .map((item, index) => (
                  <Col key={index} xs="12" md="4" style={styles.box}>
                    <Link
                      to={{
                        pathname: "/showItem",
                        state: item,
                      }}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <ProductBox
                        index
                        id={item.id}
                        category={item.category}
                        productName={item.nombre}
                        price={item.price}
                        shortDescription={item.shortDescription}
                        imageUri={
                          consts.LOCALHOST +
                          consts.IMAGES_FOLDER +
                          item.main_image.split(",")[0]
                        }
                        zoom={false}
                      />
                    </Link>
                  </Col>
                ))}
          </CardGroup>
        </Row>

        {/* PROMO MAYORISTA */}
        <h3>Fuentes</h3>
        <Alert variant={"warning"}>
          Agregue <b>10</b> fuentes de humo al carrito para poder abonar el
          precio mayorista que indica cada uno de estos artículos.
        </Alert>
        <Row>
          <CardGroup>
            {data &&
              data.length > 0 &&
              data
                .filter((item) => item.category === "0")
                .map((item, index) => (
                  <Col key={index} xs="12" md="4" style={styles.box}>
                    <Link
                      to={{
                        pathname: "/showItem",
                        state: item,
                      }}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <ProductBox
                        index
                        id={item.id}
                        category={item.category}
                        productName={item.nombre}
                        price={item.price_may}
                        priceSinDescuento={item.price}
                        shortDescriptioTn={item.shortDescription}
                        imageUri={
                          consts.LOCALHOST +
                          consts.IMAGES_FOLDER +
                          item.main_image.split(",")[0]
                        }
                        zoom={false}
                        disabled={
                          parseInt(cookie.promoCount, 10) === 10 &&
                          item.category === "0"
                        }
                        showNav={false}
                      />
                    </Link>
                  </Col>
                ))}
          </CardGroup>
        </Row>
        <Row>
          <h3>Sahumerios de humo inverso</h3>
          <CardGroup>
            {data &&
              data.length > 0 &&
              data
                .filter((item) => item.category === "3")
                .map((item, index) => (
                  <Col key={index} xs="12" md="4" style={styles.box}>
                    <Link
                      to={{
                        pathname: "/showItem",
                        state: item,
                      }}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
                      <ProductBox
                        index
                        id={item.id}
                        category={item.category}
                        productName={item.nombre}
                        price={item.price_may}
                        shortDescriptioTn={item.shortDescription}
                        imageUri={
                          consts.LOCALHOST +
                          consts.IMAGES_FOLDER +
                          item.main_image.split(",")[0]
                        }
                        zoom={false}
                        disabled={
                          parseInt(cookie.promoCount, 10) === 10 &&
                          item.category === "0"
                        }
                      />
                    </Link>
                  </Col>
                ))}
          </CardGroup>
        </Row>
      </Container>
      <Footer></Footer>
    </>
  );
}

export default Mayoristas;
const styles = {
  box: {
    marginRight: "2em",
  },
};
