import React, { useState, useEffect } from "react";

import {
  Button,
  Container,
  FloatingLabel,
  Form,
  Row,
  Col,
  Card,
} from "react-bootstrap";

import ImagesUploader from "./imagesUploader/index";
import AlertDismissible from "../../components/alert";
import { consts } from "./config";
import * as api from "./api";
import LogOut from "../../components/LogOut";

const Agregar = (props) => {
  const [msgAlert, setMsgAlert] = useState({
    headingAlert: "",
    msgAlert: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [selectedImages, setSelectedImages] = useState([]);

  const [formValues, setFormValues] = useState({
    categoria: "",
    nombre: "",
    precio: "",
    precioMayorista: "",
    ancho: "",
    alto: "",
    largo: "",
    color: "",
    descripcionCorta: "",
    descripcionLarga: "",
    imagenes: [],
  });

  const handleChange = (p, i) => {
    setSelectedImages([...selectedImages]);
    setFormValues({
      ...formValues,
      imagenes: selectedImages.map((e) => e.urlImage).join(","),
    });
  };

  //boton call function to delete image in the specified index of selectedImagesArray
  function resetearImagenDeArray(i) {
    var copyArray = selectedImages.filter(function (value, index, copyArray) {
      return index !== i;
    });
    setSelectedImages([...copyArray]);
    console.log(copyArray);
  }

  useEffect(() => { }, [formValues]);

  function resetFormValues() {
    setFormValues({
      categoria: "",
      nombre: "",
      precio: "",
      precioMayorista: "",
      ancho: "",
      alto: "",
      largo: "",
      color: "",
      descripcionCorta: "",
      descripcionLarga: "",
      imagenes: [],
    });
    setSelectedImages([]);
  }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedImages.length === 0) {
      setMsgAlert({
        headingAlert: "Faltan imagenes",
        msgAlert: "Agrega al menos una imágen..",
        bgColor: "danger",
      });
      setShowAlert(true);
    } else {
      api
        .updateDatabaseNewItemStock(JSON.stringify(formValues))
        .then((res) => {
          setMsgAlert({
            headingAlert: "Servidor dice: ",
            msgAlert: res.data,
            bgColor: "success",
          });
          setShowAlert(true);
          resetFormValues();
        })
        .catch((err) => console.log(err));
    }
  };

  const handleValueChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Container style={{ border: "1px", marginTop: "4em" }}>
      <LogOut {...props} />
      <h4>Agregar modelo:</h4>

      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Col>
            <FloatingLabel controlId="floatingSelect" label="Categoría:">
              <Form.Select
                onChange={handleValueChange}
                name="categoria"
                aria-label="Click para elegir categoría del modelo"
              >
                <option>Click para elegir categoría del modelo</option>
                <option value="0">Fuente de humo</option>
                <option value="3">Sahumerios</option>
                <option value="4">Combo</option>
              </Form.Select>
            </FloatingLabel>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre modelo:</Form.Label>
              <Form.Control
                type="text"
                name="nombre"
                value={formValues.nombre}
                onChange={handleValueChange}
                placeholder="Ingrese nombre modelo"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                value={formValues.precio}
                onChange={handleValueChange}
                name="precio"
                placeholder="Precio"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio Mayorista</Form.Label>
              <Form.Control
                type="number"
                value={formValues.precioMayorista}
                onChange={handleValueChange}
                name="precioMayorista"
                placeholder="Precio mayorista"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Ancho:</Form.Label>
              <Form.Control
                type="number"
                value={formValues.ancho}
                onChange={handleValueChange}
                name="ancho"
                placeholder="Ingrese ancho"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Alto:</Form.Label>
              <Form.Control
                type="number"
                value={formValues.alto}
                onChange={handleValueChange}
                name="alto"
                placeholder="Ingrese alto"
                required
              />
            </Form.Group>{" "}
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Largo:</Form.Label>
              <Form.Control
                type="number"
                value={formValues.largo}
                onChange={handleValueChange}
                name="largo"
                placeholder="Ingrese largo"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Color:</Form.Label>
              <Form.Control
                type="text"
                value={formValues.color}
                onChange={handleValueChange}
                name="color"
                placeholder="Ingrese color"
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Descripción corta:</Form.Label>
              <Form.Control
                type="text"
                value={formValues.descripcionCorta}
                onChange={handleValueChange}
                name="descripcionCorta"
                placeholder="Ingrese descripción corta"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <p>
                <label>Descripción larga</label>
              </p>
              <textarea
                rows="10"
                cols="60"
                value={formValues.descripcionLarga}
                onChange={handleValueChange}
                name="descripcionLarga"
                required
              ></textarea>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Row>
            <h5>Agregar imágenes/video</h5>
          </Row>
          <Row>
            {selectedImages.map((val, i) => {
              return (
                <Col key={i} xs={12} md={3} lg={3}>
                  <Card>
                    <Card.Body>
                      {selectedImages[i].urlImage === "" ? (
                        <>

                          <ImagesUploader
                            setSelectedImages={handleChange}
                            selectedImages={selectedImages}
                            indexImage={i}
                            key={i}
                          />
                          <Button
                            onClick={() => resetearImagenDeArray(i)}
                            style={{ width: "3em", height: "3em" }}
                          >
                            x
                          </Button>
                        </>
                      ) : (
                        <>
                          {selectedImages[i].urlImage.split('.').pop() === "mp4" ?
                            <video style={{ width: "100%" }} preload="none" controls>
                              <source src={consts.LOCALHOST +
                                consts.IMAGES_FOLDER +
                                selectedImages[i].urlImage} type="video/mp4" />
                              Your browser does not support HTML video.
                            </video> :
                            <Card.Img
                              variant="top"
                              src={
                                consts.LOCALHOST +
                                consts.IMAGES_FOLDER +
                                selectedImages[i].urlImage
                              }
                            />}
                          <Card.Title style={{ fontSize: "1em" }}>
                            imagen {i + 1} : {selectedImages[i].urlImage}
                          </Card.Title>

                          <Button
                            onClick={() => resetearImagenDeArray(i)}
                            variant="warning"
                            style={{
                              width: "3em",
                              height: "3em",
                              position: "absolute",
                              top: "1em",
                              right: "2em",
                            }}
                          >
                            x
                          </Button>
                        </>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
          <Row>
            <Col>
              <Button
                onClick={(e) =>
                  setSelectedImages([...selectedImages, { urlImage: "" }])
                }
                variant="success"
              >
                +
              </Button>
            </Col>
          </Row>
        </Row>
        <Row>
          <Col>
            <Button type="submit">Subir</Button>
          </Col>
        </Row>
      </Form>
      <AlertDismissible
        heading={msgAlert.headingAlert}
        msg={msgAlert.msgAlert}
        setShowAlert={setShowAlert}
        show={showAlert}
        colorBg={msgAlert.bgColor}
      />
    </Container>
  );
};

export default Agregar;
