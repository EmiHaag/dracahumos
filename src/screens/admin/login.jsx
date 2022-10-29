import React, { useState } from "react";
import { Card, Container, Col, Row, Button, Form } from "react-bootstrap";
import axios from "axios";
import { setUserSession } from "../../utils/commons";

import { signIn } from "./api";

const useFormInput = (initialValues) => {
  const [value, setValue] = useState(initialValues);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return {
    value,
    onChange: handleChange,
  };
};
const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const username = useFormInput("");
  const password = useFormInput("");
  const [error, setError] = useState(null);

  //hadle login button click for login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    signIn({ username: username.value, password: password.value })
      .then((response) => {
        if (response.data.stat === "ok") {
          setLoading(false);
          setUserSession(response.data.token, response.data.usr);
          props.history.push("/admin");
        } else {
          console.log(response.data);
          setError("usuario o contraseña incorrectos..");
        }
      })
      .catch((err) => console.log(err.data));
  };

  return (
    <Container>
      <Row xs={12} md={6} lg={4}>
        <Card style={{ margin: "4em auto" }}>
          <Card.Body>
            <Card.Title>Login</Card.Title>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Usuario</Form.Label>
                <Form.Control
                  type="text"
                  {...username}
                  placeholder="Ingrese email"
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  {...password}
                  placeholder="Password"
                />
              </Form.Group>

              <Button
                style={{ width: "100%" }}
                variant="primary"
                value={loading ? "Loading..." : "Login"}
                onClick={handleLogin}
              >
                Ingresar
              </Button>
              <p>{error}</p>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
};

export default Login;
