import React, { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";
import colors from "../config/colors";
import { MdAddShoppingCart } from "react-icons/md";
import { consts } from "../screens/admin/config";
import { useCookies } from "react-cookie";
import AppButton from "./appButton";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";




const ProductBox = ({
  id,
  category,
  imageUri,
  images,
  price,
  priceSinDescuento,
  productName,
  shortDescription,
  descr,
  showNav,
  zoom,
  disabled,
}) => {
  /*   const [shopping, setShopping] = useContext(ShopContext); */
  const [cookie, setCookie] = useCookies([
    "compra",
    "promoCount",
    "buyingMayorista",
  ]);
  if (!cookie.compra) {
    setCookie("compra", []);
  }
  if (!cookie.buyingMayorista) {
    setCookie("buyingMayorista", false);
  }

  const [arrImages, setArrImages] = useState([]);
  const AddCarrito = (e, id) => {
    e.preventDefault();
    let arr = cookie.compra;
    arr.push({
      id,
      category,
      imageUri,
      price,
      productName,
      shortDescription,
    });
    setCookie("compra", arr);

    if (cookie.buyingMayorista && category === "0") {
      var promoCount = parseInt(cookie.promoCount, 10) + 1;
      setCookie("promoCount", promoCount);
    }

  };

  //custom render when item has video element
  const renderVideo = function (item) {
    return (
      <div className='video-wrapper'>
        <video style={{ width: "100%" }} preload="none" controls>
          <source src={item.embedUrl} type="video/mp4" />
          Your browser does not support HTML video.
        </video>
      </div>
    );
  }


  const setImagesArray = function (im) {/*  */
    var isVideo = false;
    im.forEach((element) => {
      let extension = element.split('.').pop();

      if (extension === "mp4") {
        isVideo = true;
      }

      if (isVideo) {
        setArrImages((arrImages) =>
          arrImages.concat({
            original: consts.LOCALHOST + consts.IMAGES_FOLDER + 'videoImage.png',
            thumbnail: consts.LOCALHOST + consts.IMAGES_FOLDER + 'videoImage.png',
            embedUrl: consts.LOCALHOST + consts.IMAGES_FOLDER + element,
            isVideo: isVideo,
            renderItem: renderVideo.bind(this)

          })
        )
      } else {
        setArrImages((arrImages) =>
          arrImages.concat({
            original: consts.LOCALHOST + consts.IMAGES_FOLDER + element,
            thumbnail: consts.LOCALHOST + consts.IMAGES_FOLDER + element
          }))

      }

      isVideo = false;
    });
  }

  useEffect(() => {
    if (!images) return;
    setImagesArray(images);

  }, []);

  return (
    <Card style={{ marginBottom: "5em", width: "30em", maxWidth: "100%" }}>
      <Card.Header
        style={{ backgroundColor: colors.secondary, fontWeight: "bold" }}
      >
        {productName}
      </Card.Header>

      {/*  Carro de imagenes */}
      <Card.Body>
        {arrImages && (
          <div>
            <ImageGallery
              showNav={false}
              showPlayButton={false}

              items={arrImages}
              thumbnailPosition={"bottom"}
              showFullscreenButton={zoom}
            />
          </div>
        )}

        {!zoom && (
          <div>
            <Card.Img
              alt="alt"
              src={imageUri}
              style={{
                objectFit: "cover",
                maxWidth: "100%",
                height: "100%",
              }}
            />
          </div>
        )}

        <Card.Title className="pricing-card-title">
          {priceSinDescuento ? (
            <Row>
              <Col>
                <span style={{ textDecoration: "line-through" }}>
                  ${priceSinDescuento}
                </span>
                <span style={{ marginLeft: "1em" }}>
                  ${price} (llevando 10 o más)
                </span>
              </Col>
            </Row>
          ) : (
            <Row>
              <Col>${price}</Col>
            </Row>
          )}
        </Card.Title>

        <Card.Text style={styles.lineBreak}>{shortDescription}</Card.Text>
        {descr && <Card.Text style={styles.lineBreak}>{descr}</Card.Text>}

        <AppButton
          disabled={disabled}
          size="xxl"
          style={styles.btn}
          onClick={(e) => {
            AddCarrito(e, id);
          }}
        >
          {/*  Agregar al carrito */} Agregar <MdAddShoppingCart />
        </AppButton>
      </Card.Body>
    </Card>
  );
};

export default ProductBox;

const styles = {
  btn: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    height: "3rem",
    fontSize: "0.8em",
  },
  lineBreak: {
    whiteSpace: "pre-line",
  },
  titleCard: {
    fontSize: "1.3em",
    fontWeight: "bold",
  },
};
