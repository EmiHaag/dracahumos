import React from "react";

import { Col, Row } from "react-bootstrap";

import colors from "../config/colors";

import { FaWhatsapp } from "react-icons/fa";
import Icons from "../components/icons";

const Footer = () => {
  return (
    <div style={styles.wrapper}>
      <Row>
        <Col>
          Cascadas de humo y sahumerios de Humo Inverso® en Tandil, provincia de
          Buenos Aires, República Argentina.
        </Col>
        <Col>
          Cualquier consulta ecribinos por
          <a
            href="http://wa.me/5491126909643"
            rel="noreferrer noopener"
            target="_blank"
            style={styles.icon}
          >
            <span> </span>
            <FaWhatsapp />
            <span> Whatsapp </span>
          </a>
          o por mail a{" "}
          <a href="mailto:dracahumos@gmail.com" style={styles.icon}>
            dracahumos@gmail.com
          </a>
          <br />
          <p>Tel: +54 9 11 26909643</p>
        </Col>
      </Row>
      <Row>
        <Col>
          <Icons></Icons>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;

const styles = {
  icon: { color: colors.primary },
  wrapper: {
    marginRight: "0",
    backgroundColor: colors.softGold,
    padding: " 7em 1em",
    color: colors.primary,
    display: "block",
  },
};
