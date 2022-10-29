import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import HeaderShop from "../components/headerShop";
import ProductBox from "../components/productBox";
import { consts } from "./admin/config";
import Footer from "../components/footer";
import { useCookies } from "react-cookie";

const ProductItem = (props) => {
  const item = props.location.state;
  //const item = useParams();

  //this is a comment
  console.log(item);
  const [cookie, setCookie] = useCookies(["compra", "promoCount"]);
  return (
    <>
      <Container>
        <HeaderShop title={item.productName} />

        <Row>
          <Col xs="12" md="8">
            <ProductBox
              id={item.id}
              category={item.category}
              productName={item.nombre}
              price={item.price}
              imageUri={
                consts.LOCALHOST +
                consts.IMAGES_FOLDER +
                item.main_image.split(",")[0]
              }
              images={item.main_image.split(",")}
              shortDescription={item.shortDescription}
              descr={item.descr}
              zoom
              showNav
            />
          </Col>

          <Col md="4" style={{ zIndex: -1 }}>
            <p style={styles.lineBreak}>{item.description}</p>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ProductItem;

const styles = {
  lineBreak: {
    whiteSpace: "pre-line",
  },
};
