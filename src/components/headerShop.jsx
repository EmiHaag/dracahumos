import React from "react";
import { Row, Col, Image, Navbar, Nav } from "react-bootstrap";

import { createBrowserHistory } from "history";
import { Link, useLocation } from "react-router-dom";
import colors from "../config/colors";

import { useCookies } from "react-cookie";

const HeaderShop = (props) => {
  const { pathname } = useLocation();
  const [cookie, setCookie] = useCookies(["compra", "promoCount"]);
  const history = createBrowserHistory();

  const navItemClicked = (e) => {
    setCookie("compra", []);
    setCookie("promoCount", 0);
    history.push(e);
  };
  return (
    <Row style={{ marginBottom: "3em", marginTop: "2em" }}>
      <Col style={styles.title}>
        <Row sm="12" style={{ margin: "auto" }}>
          <Col xs={4}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Image src="../logo.png" alt="logo" style={{ width: "6em" }} />
              <Image
                src="./draca_nombre_logo.png"
                alt="nombre logo"
                style={{ width: "6rem" }}
              />
            </Link>
          </Col>

          <Col style={{ width: "100%", margin: "auto" }}>
            <h2
              style={{
                textAlign: "right",
                color: colors.primary,
                fontFamily: "MiddleEarth",
                fontSize: "1.4rem",
              }}
            >
              {props.title}
            </h2>
          </Col>
        </Row>
        {pathname !== "/showItem" && (
          <Row style={{ marginTop: "2em" }}>
            <Col>
              <Navbar expand="lg md">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav activeKey={pathname} className="mr-auto" variant="tabs">
                    <Nav.Item>
                      <Nav.Link href="/">Home</Nav.Link>
                    </Nav.Item>
                    {/*    <Nav.Item>
                      <Nav.Link href="/promos">Promos</Nav.Link>
                    </Nav.Item> */}
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navItemClicked("/mayoristas")}
                        href="/mayoristas"
                      >
                        Mayoristas
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navItemClicked("/minoristas")}
                        href="/minoristas"
                      >
                        Minoristas
                      </Nav.Link>
                    </Nav.Item>{" "}
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navItemClicked("/compra-protegida")}
                        href="/compra-protegida"
                        style={{ width: "max-content" }}
                      >
                        Compra protegida
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() =>
                          navItemClicked(
                            "/que-son-y-como-funcionan-cascadas-de-humo-inverso"
                          )
                        }
                        href="/que-son-y-como-funcionan-cascadas-de-humo-inverso"
                        style={{ width: "max-content" }}
                      >
                        Cómo funcionan?
                      </Nav.Link>
                    </Nav.Item>{" "}
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navItemClicked("/novedades")}
                        href="/novedades"
                        style={{ width: "max-content" }}
                      >
                        Novedades
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link
                        onClick={() => navItemClicked("/quienes-somos")}
                        href="/quienes-somos"
                        style={{ width: "max-content" }}
                      >
                        Nosotras
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                </Navbar.Collapse>
              </Navbar>
            </Col>
          </Row>
        )}
      </Col>
    </Row>
  );
};

export default HeaderShop;
const styles = {
  title: {
    marginTop: "2em",
    fontWeight: "700",
  },
};
