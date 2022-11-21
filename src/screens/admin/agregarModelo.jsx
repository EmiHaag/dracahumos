import React from "react";

import { Card, Container, Row, Button, Table } from "react-bootstrap";
import FormModelo from "./components/formModelo";

import MenuAdmin from "./components/menu_admin";

const AgregarModelo = () => {




    return (
        <>
            <MenuAdmin />
            <FormModelo modo="Agregar" />
        </>
    );
}

export default AgregarModelo;