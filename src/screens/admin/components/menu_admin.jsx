import React from "react";


import { Col, Image, Navbar, Nav, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const MenuAdmin = ()=>{
    return(
        <Navbar>
        <Col>
          <Nav
            className="mr-auto menu "
            style={{ justifyContent: "center" }}
          >
            <Link
         
            className="nav-link"  
            to="/admin"
        >
            Inicio 
        </Link>
            <Link
         
              className="nav-link"  
              to="/listar"
            >
              Editar ítem
            </Link>
            <Link
              className="nav-link"
              to="/agregar"
       
            >
              Agregar ítem
            </Link>
            <Link
              className="nav-link"
              to="/eliminar"
         
            >
              Eliminar ítem
            </Link>
            <Link
              className="nav-link"
              to="/agregar-novedad"
       
            >
              Agregar novedad
            </Link>
            <Link
              className="nav-link"
              to="/eliminar-novedad"
         
            >
              Eliminar novedad
            </Link>
          </Nav>
        </Col>
        </Navbar>
    );
}

export default MenuAdmin;