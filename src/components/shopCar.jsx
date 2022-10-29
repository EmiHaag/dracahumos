import React, { useState, useEffect } from "react";
import { MdShoppingCart, MdLens } from "react-icons/md";

import { Card, Toast } from "react-bootstrap";
import colors from "../config/colors";
import MydModalWithGrid from "./shopModal";
import { useCookies } from "react-cookie";
const ShopCar = () => {
  const [cookie, setCookie] = useCookies([
    "compra",
    "promoCount",
    "buyingMayorista",
  ]);
  if (!cookie.promoCount) setCookie("promoCount", 0);
  const [modalShow, setModalShow] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (!cookie.compra || cookie.buyingMayorista === "false") return;

    setShowToast(true);
    var promoCounter = parseInt(cookie.promoCount);

    if (promoCounter < 10 && promoCounter > 0) {
      setToastMessage(
        "Genial, te faltan : " +
          (10 - parseInt(cookie.promoCount)) +
          " cascadas para alcanzar descuento para mayoristas"
      );
    } else if (parseInt(cookie.promoCount) === 10) {
      setToastMessage(
        "Genial ! Seleccionaste 10 cascadas y ya puedes abonar con descuento mayorista!"
      );
    } else if (parseInt(cookie.promoCount) > 10) {
      setToastMessage(
        " Te pasaste de 10 cascadas!. Debes elegir exactamente 10 cascadas para que se aplique este descuento. Click aquí para eliminar 1"
      );
    } else {
      setShowToast(false);
    }
  }, [cookie.promoCount]);

  return (
    <>
      <MydModalWithGrid show={modalShow} onHide={() => setModalShow(false)} />
      <div style={styles.card}>
        <Toast
          onClose={() => setShowToast(false)}
          show={showToast}
          delay={2000}
          autohide
          style={{
            position: "absolute",
            right: "1em",
            bottom: "7em",
            maxWidth: "inherit",
            backgroundColor: "rgba(255,255,255,1)",
          }}
        >
          <Toast.Header>
            <strong className="mr-auto">Mensaje</strong>
          </Toast.Header>
          <Toast.Body
            style={
              (parseInt(cookie.promoCount) === 10
                ? { backgroundColor: colors.success, color: "white" }
                : { backgroundColor: colors.gold, color: "white" },
              styles.toast)
            }
          >
            {toastMessage}
          </Toast.Body>
        </Toast>
        <Card
          onClick={() => {
            setModalShow(true);
          }}
        >
          <span
            style={{
              position: "absolute",
              color: colors.orange,
              fontSize: "2.6rem",
              top: "-0.7em",
              right: "0.2em",
            }}
          >
            <h3
              style={{
                color: "white",
                position: "absolute",
                top: "0.8rem",
                textAlign: "center",
                width: "100%",
              }}
            >
              <span style={{ fontSize: "1rem" }}>
                {cookie.compra ? cookie.compra.length : null}
              </span>
            </h3>
            <MdLens />
          </span>
          <h1>
            <MdShoppingCart style={{ margin: "0.8rem", color: colors.dark }} />
          </h1>
        </Card>
      </div>
    </>
  );
};

export default ShopCar;

const styles = {
  card: {
    position: "fixed",
    bottom: 20,
    right: 20,
    cursor: "pointer",

    width: "4rem",
    height: "4rem",
  },
  toast: { width: "fit-content" },
};
