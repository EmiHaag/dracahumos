import React, { useState, useEffect } from "react";
import { Container, Row, Button, Table } from "react-bootstrap";
import AlertDismissible from "../../components/alert";
import * as api from "./api";

import LogOut from "../../components/LogOut.jsx";
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
      <LogOut {...props} />
      <h4>Stock items:{datos.length}</h4>
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
            <th>Nombre</th>
            <th>Precio</th>
            <th>Precio mayorista</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {datos.map((item, index) => (
            <tr key={item.id}>
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
    </Container>
  );
};

export default ListarStock;
