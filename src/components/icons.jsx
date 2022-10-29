import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";
import colors from "../config/colors";
import { useLocation, useHistory } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import { IoCaretBack } from "react-icons/io5";

const Icons = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  return (
    <Row style={styles.container}>
      <Col md={8} sm={2} xs={4} style={{ margin: "auto" }}>
        {pathname !== "/" && (
          <button
            onClick={() => history.goBack()}
            style={{
              width: "6em",
              height: "3.3em",
              backgroundColor: colors.secondary,
              color: colors.primary,
              border: "none",
            }}
          >
            <IoCaretBack style={{ fontSize: "1.3em", verticalAlign: "sub" }} />
            Volver
          </button>
        )}
      </Col>
      <Col style={{ margin: "auto" }}>
        <Row>
          <Col md={4} lg={3} xs={4}>
            <a
              href="https://www.facebook.com/fuentesdehumo/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaFacebook style={{ ...styles.icon, ...styles.fbIcon }} />
            </a>
          </Col>
          <Col md={4} lg={3} xs={4}>
            <a
              href="https://www.instagram.com/fuentesdehumo/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaInstagram style={styles.icon} />
            </a>
          </Col>
          <Col md={4} lg={3} xs={4}>
            <a
              href="http://wa.me/5491126909643"
              rel="noreferrer noopener"
              target="_blank"
            >
              <FaWhatsapp style={styles.icon} />
            </a>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Icons;
const styles = {
  container: { marginTop: "1em", marginRight: "0" },
  fbIcon: { padding: "0.03em 0" },

  icon: {
    fontSize: "2em",
    color: colors.gold,
  },
};
