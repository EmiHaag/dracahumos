import React, { useState, useEffect } from "react";
import { CardGroup, Container, Row, Col } from "react-bootstrap";

import Footer from "../components/footer";
import HeaderShop from "../components/headerShop";
import ProductBox from "../components/productBox";
import { Link } from "react-router-dom";
function Promos() {
  const [data, setData] = useState([]);
  const getData = async () => {
    await fetch("./promos.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Container>
        <HeaderShop title="TIENDA MINORISTA" />
        <Row>
          <CardGroup>
            {data &&
              data.length > 0 &&
              data
                .filter((item) => item.category === "1")
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
                        productName={item.productName}
                        price={item.price}
                        shortDescription={item.shortDescription}
                        imageUri={item.images[0].original}
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

export default Promos;
