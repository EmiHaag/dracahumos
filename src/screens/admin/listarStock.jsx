import React, { useState, useEffect } from "react";
import { Card, Container, Row, Button, Table } from "react-bootstrap";
import AlertDismissible from "../../components/alert";
import * as api from "./api";
import { AiOutlineEdit } from "react-icons/ai";
import LogOut from "../../components/LogOut.jsx";
import MenuAdmin from "./components/menu_admin";

const ListarStock = (props) => {
  const [datos, setData] = useState([]);

  const [updateStock, setUpdateStock] = useState(false);
  const [datosCopy, setDatosCopy] = useState([]);
  const [lastIdModified, setLastModified] = useState(-1);
  const [lastStockValue, setLastStockValue] = useState(0);
  const [msgAlert, setMsgAlert] = useState({
    headingAlert: "",
    msgAlert: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  useEffect(() => {
    api
      .getItems()
      .then((data) => {
        setData(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const modStockValue = (e) => {
    console.log(e.target.value);
  };

  const cancelUpdate = () => {
    modStockValue();
    lastIdModified = -1;
    lastStockValue = 0;
  };
  const updateItem = (id, v) => {
    //hacemos copia del objeto datos
    let dataC = [...datos];
    dataC = dataC.map((val, i) => {
      if (val.id === id) {
        val.stock = v;
        setLastModified(id);
        setLastStockValue(val.stock);
      }

      return val;
    });
    setDatosCopy(dataC);
    setUpdateStock(true);
  };

  const saveStock = () => {
    setData(datosCopy);
    setUpdateStock(false);
    api
      .updateDatabaseItemStock(lastIdModified, lastStockValue)
      .then((response) => {
        setShowAlert(true);
        setMsgAlert({
          headingAlert: "Servidor dice:",
          msgAlert: response.data,
        });
      });
  };

  return (
    <Container style={{ marginTop: "4em" }}>
      <MenuAdmin />

      <h4>Modelos : {datos.length} (Editar stock / Editar producto )</h4>
      <Row>
        {/* boton 3 estados
                    1:lectura,
                    2:activa modo update,
                    3: guarda valor stock en tabla productos
                    */}
        {updateStock && (
          <>
            <Button onClick={cancelUpdate} style={{ float: "right" }}>
              Cancel
            </Button>
            <Button onClick={(e) => saveStock()} style={{ float: "right" }}>
              Guardar
            </Button>
          </>
        )}
        {/*  {!updateStock && <Button onClick={modStockValue}> Modificar</Button>} */}
      </Row>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Precio mayorista</th>
            <th>Stock</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={item.id}>
              <td>
                <Card.Img
                  style={{ width: "10rem" }}
                  variant="top"
                  src={
                    api.baseUri +
                    "/images/uploaded/" +
                    item.main_image.split(",")[0]
                  }
                  alt={item.main_image}
                />
              </td>
              <td>{item.nombre}</td>
              <td>{item.price}</td>
              <td>{item.price_may}</td>
              <td>
                <input
                  type="number"
                  value={item.stock}
                  readOnly={true}
                  onClick={(e) => {
                    e.target.readOnly = false;
                  }}
                  name="stock"
                  onChange={(e) => {
                    updateItem(item.id, e.target.value);
                  }}
                />
              </td>
              <td>
                <Button
                  style={{ width: "2.5rem" }}
                  variant="warning"
                  /* href="/eliminar" */ title="Editar"
                  href={"editarItem/" + item.id}>
                  <AiOutlineEdit />
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <AlertDismissible
        heading={msgAlert.headingAlert}
        msg={msgAlert.msgAlert}
        setShowAlert={setShowAlert}
        show={showAlert}
        colorBg={"success"}
      />
      <LogOut {...props} />
    </Container>
  );
};

export default ListarStock;
