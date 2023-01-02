import React, { useState, useEffect } from "react";
import { Modal, Container, Row, Button, Table } from "react-bootstrap";

import MenuAdmin from "./components/menu_admin";
import * as api from "./api";

import AlertDismissible from "../../components/alert";
const EditarCostosEnvios = () => {
  const [datos, setData] = useState([]);
  const [item_to_edit, set_item_to_edit] = useState({});
  useEffect(() => {
    //returns costos envios [{"id":"1","tipo_envio":"buenos-aires","costo":"1800"},{"id":"2","tipo_envio":"resto-pais","costo":"2200"}]
    api
      .getCostosEnvios()
      .then((data) => {
        setData(data);
      })
      .catch((error) => console.log(error));
  }, []);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = (item) => {
    set_item_to_edit(item);
    setShow(true);
    console.log(item_to_edit);
  };
  const [msgAlert, setMsgAlert] = useState({
    headingAlert: "",
    msgAlert: "",
  });

  const [showAlert, setShowAlert] = useState(false);
  const updateCosto = () => {
    api
      .setCostosEnvios(JSON.stringify(item_to_edit))
      .then((res) => {
        setMsgAlert({
          headingAlert: "Servidor dice: ",
          msgAlert: res,
          bgColor: "success",
        });
        setShowAlert(true);
        handleClose();
        set_item_to_edit({});
      })
      .catch((err) => console.log(err));
  };
  const updateItemCost = (e) => {
    let item = item_to_edit;
    item.costo = e.target.value;
    set_item_to_edit(item);
  };
  const ModalEditarCosto = (props) => {
    return (
      <>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              Editar costo envío "{item_to_edit.tipo_envio}"
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            ARS $
            <input type="number" onChange={(e) => updateItemCost(e)} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cancelar
            </Button>
            <Button variant="primary" onClick={updateCosto}>
              Actualizar costo
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  };

  return (
    <>
      <MenuAdmin />
      <ModalEditarCosto></ModalEditarCosto>
      <Container style={{ marginTop: "4em" }}>
        <Table striped hover>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datos.map((item, index) => (
              <tr key={item.id}>
                <td>{item.tipo_envio}</td>
                <td>{item.costo}</td>
                <td>
                  <Button
                    onClick={(e) => handleShow(item)}
                    style={{ float: "right" }}>
                    Modificar
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
          colorBg={msgAlert.bgColor}
        />
      </Container>
    </>
  );
};

export default EditarCostosEnvios;
