import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { removeUserSession } from "../utils/commons";

const LogOut = (props) => {
  //handle click event of logout btn
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };
  return (
    <Row>
      <Col md={{ span: 1, offset: 11 }}>
        <Button
          onClick={handleLogout}
          variant="danger"
          style={{ width: "100%", padding:"0.2em" }}
        >
          Log out
        </Button>
      </Col>
    </Row>
  );
};

export default LogOut;
