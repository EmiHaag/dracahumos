import React, { useState, useEffect } from "react";
import { CardGroup, Container, Row, Col } from "react-bootstrap";

import { useCookies } from "react-cookie";
import Footer from "../components/footer";
import HeaderShop from "../components/headerShop";
import ProductBox from "../components/productBox";
import { Link } from "react-router-dom";
import withRouter from "next/dist/client/with-router";
import * as api from "./admin/api";
import { consts } from "./admin/config";

function Minoristas() {
  const [data, setData] = useState([]);
  const [cookie, setCookie] = useCookies(["buyingMayorista"]);
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
    setCookie("buyingMayorista", false);
  }, [cookie.buyingMayorista]);

  return (
    <>
      <Container>
        <HeaderShop title="TIENDA MINORISTA" />
        <Row>
          <CardGroup>
            {data &&
              data.length > 0 &&
              data
                .filter((item) => item.category === "0")
                .map((item, index) => (
                  <Col key={index} xs="12" md="4">
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
                        disabled={false}
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

export default withRouter(Minoristas);
const styles = {
  box: {
    marginRight: "2em",
  },
};
