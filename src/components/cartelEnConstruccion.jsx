import { render } from "@testing-library/react";
import React from "react";
import { Alert } from "react-bootstrap";
import { keyframes } from "styled-components";

const AlertConstruccion = () => {
  return (
    <Alert variant="warning" style={styles.blink}>
      ESTE SITIO SE ENCUENTRA EN CONSTRUCCIÓN, POR FAVOR NO INTERACTUE CON LAS
      COMPRAS, LOS PRECIOS SON DE PRUEBA !
    </Alert>
  );
};

export default AlertConstruccion;

const styles = {
  blink: {
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 999,
    width: "100vw",
    textAlign: "center",
    height: "7em",
  },
};
