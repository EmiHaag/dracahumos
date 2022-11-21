import React, { useState, useEffect } from "react";
import * as api from "./api";
import { Card, Container, Row, Button, Table } from "react-bootstrap";
import FormModelo from "./components/formModelo";

import MenuAdmin from "./components/menu_admin";

const EditarItem = (props) => {
  const [item, setItem] = useState();
  //get item ID from URL => http://localhost:3000/editarItem/37 => 37
  const itemId = props.location.pathname.split("/").pop();


  useEffect(() => {
    api
      .getItem(itemId)
      .then((data) => {
        setItem(data);
        console.log(data);

      })
      .catch((error) => console.log(error));
  }, []);


  return (
    <>
      <MenuAdmin />
      <FormModelo item={item} modo="Edicion" />
    </>
  );
}

export default EditarItem;