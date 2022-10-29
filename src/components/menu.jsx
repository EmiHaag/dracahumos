import React from "react";
import { Col, Image, Navbar, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const menu = () => {
  const changeBackground = (e) => {
    e.target.style.background = "#993300b5";
    e.target.style.color = "white";
  };
  const resetBackground = (e) => {
    e.target.style.background = "none";
    e.target.style.color = "#ffffff80";
  };
  return (
    <Row style={styles.wrapper}>
      <Row style={styles.crossBar}> </Row>
      <Row md="auto" style={styles.container}>
        <Navbar
          variant="dark"
          className="navbar-collapse"
          style={{ padding: 0 }} /* style={styles.navBar} */
        >
          <Col>
            <Nav
              className="mr-auto menu "
              style={{ justifyContent: "flex-end" }}
            >
              {/* <Link
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                style={styles.menuItem}
                className="nav-link"
                to="/promos"
              >
                Promos
              </Link> */}
              <Link
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                style={styles.menuItem}
                className="nav-link"
                to="/mayoristas"
              >
                Mayoristas
              </Link>
              <Link
                className="nav-link"
                to="/minoristas"
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                style={styles.menuItem}
              >
                Minoristas
              </Link>
              <Link
                className="nav-link"
                to="/compra-protegida"
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                style={styles.menuItem}
              >
                Compra protegida
              </Link>
            </Nav>
          </Col>

          <Col md="auto" style={{ width: 120 }}>
            <Image
              src="./logo.png"
              alt="logo"
              style={{ width: "6em", marginTop: 15 }}
            />
            <Image
              src="./draca_nombre_logo.png"
              alt="nombre logo"
              style={{ width: "6rem" }}
            />
          </Col>
          <Col className="mr-sm-2">
            <Nav className="mr-auto">
              <Link
                className="nav-link"
                to="/que-son-y-como-funcionan-cascadas-de-humo-inverso"
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                style={styles.menuItem}
              >
                Cómo funcionan?
              </Link>
              <Link
                className="nav-link"
                to="/novedades"
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                style={styles.menuItem}
              >
                Novedades
              </Link>
              <a
                className="nav-link"
                href="/quienes-somos"
                onMouseOver={changeBackground}
                onMouseLeave={resetBackground}
                style={styles.menuItem}
              >
                Nosotras
              </a>
            </Nav>
          </Col>
        </Navbar>
      </Row>
    </Row>
  );
};

export default menu;

const styles = {
  wrapper: { width: "100vw", marginTop: 30, height: 150 },
  container: {
    width: "100%",
    margin: 0,
  },
  crossBar: {
    width: "100%",
    height: "180px",
    margin: 0,
    backgroundColor: "black",
    position: "absolute",
    opacity: 0.5,
  },
  menuItem: {
    fontFamily: "MiddleEarth",
    lineHeight: "164px",
    transitionDuration: "400ms",
    transitionProperty: "all",
    transitionTimingFunction: "cubic-bezier(.7,1,.7,1)",
  },
  navBar: {
    width: "100%",
  },
};
