import React, { useEffect, useState } from "react";
import { Button, Container, Table, Row } from "react-bootstrap";
import * as api from "./api";
import { consts } from "./config";
import AlertDismissible from "../../components/alert";

import MenuAdmin from "./components/menu_admin";
import LogOut from "../../components/LogOut.jsx";
const Eliminar = (props) => {
  const [datos, setData] = useState([]);
  const [msgAlert, setMsgAlert] = useState({
    headingAlert: "",
    msgAlert: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  function getItems() {
    api
      .getItems()
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }
  useEffect(() => {
    getItems();
  }, []);

  const deleteItem = (id) => {
    api
      .deleteItem(JSON.stringify({ id: id }))
      .then((response) => {
        getItems();
        console.log(response.data);
        setMsgAlert({
          headingAlert: "Servidor dice:",
          msgAlert: response.data,
        });
        setShowAlert(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <Container style={{ marginTop: "5em" }}>
      <MenuAdmin />

      <Row>
        <h3>Eliminar modelo:</h3>
      </Row>
      <Row>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Precio mayorista</th>
              <th>Stock</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datos &&
              datos.length > 0 &&
              datos.map((item, index) => (
                <tr key={item.id}>
                  <td>{item.nombre}</td>
                  <td>{item.price}</td>
                  <td>{item.price_may}</td>
                  <td>{item.stock}</td>
                  <td>
                    <img
                      src={
                        consts.LOCALHOST +
                        consts.IMAGES_FOLDER +
                        item.main_image.split(",")[0]
                      }
                      width={100}
                      alt={item.nombre}
                    />
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => deleteItem(item.id)}
                      style={{ width: "fit-content" }}
                    >
                      eliminar
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Row>
      <AlertDismissible
        heading={msgAlert.headingAlert}
        msg={msgAlert.msgAlert}
        setShowAlert={setShowAlert}
        show={showAlert}
        colorBg="danger"
      />
      <LogOut {...props} />
    </Container>
  );
};

export default Eliminar;
