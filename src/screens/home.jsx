import React, { lazy, Suspense } from "react";
import Menu from "../components/menu";
import HumoInverso from "./humoInverso";
import { Container, Row, Col, Card } from "react-bootstrap";
import MediaQuery from "react-responsive";

const home = () => {
  const Video = lazy(() => import("../components/video"));
  const renderLoader = () => <p>Loading</p>;

  return (
    <Container fluid>
      <Suspense fallback={renderLoader()}>
        <MediaQuery minWidth={960}>
          <Row>
            <Col>
              <Menu />
            </Col>
          </Row>
          <Video />
        </MediaQuery>

        <MediaQuery maxWidth={960}>
          <HumoInverso />
        </MediaQuery>
      </Suspense>
    </Container>
  );
};

export default home;
