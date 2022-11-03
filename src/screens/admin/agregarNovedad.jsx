import React, { useState } from "react";
import { Button, Card, Container, Col, Form, Row } from "react-bootstrap";

import LogOut from "../../components/LogOut";

import AlertDismissible from "../../components/alert";
import ImagesUploader from "./imagesUploader/index";
import { consts } from "./config";
import * as api from "./api";

import MenuAdmin from "./components/menu_admin";
const AgregarNovedad = (props) => {
  const [selectedImages, setSelectedImages] = useState([]);
  const [formValues, setFormValues] = useState({
    title: "",
    texto: "",
    imageUrl: "",
  });
  function resetFormValues() {
    setFormValues({
      title: "",
      texto: "",
      imageUrl: "",
    });
    setSelectedImages([]);
  }
  const [msgAlert, setMsgAlert] = useState({
    headingAlert: "",
    msgAlert: "",
  });
  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (p, i) => {
    setSelectedImages([...selectedImages]);
    setFormValues({
      ...formValues,
      imageUrl: selectedImages.map((e) => e.urlImage).join(","),
    });
  };

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
        .addNovedad(JSON.stringify(formValues))
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

  //boton call function to delete image in the specified index of selectedImagesArray
  function resetearImagenDeArray(i) {
    var copyArray = selectedImages.filter(function (value, index, copyArray) {
      return index !== i;
    });
    setSelectedImages([...copyArray]);
    console.log(copyArray);
  }

  const handleValueChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  return (
    <Container style={{ border: "1px", marginTop: "4em" }}>
      <MenuAdmin />
      <LogOut {...props} />
      <h4>Agregar novedad:</h4>

      <Form onSubmit={handleSubmit}>
        <Row className="justify-content-md-center">
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Título artículo:</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={formValues.title}
                onChange={handleValueChange}
                placeholder="Ingrese titulo de novedad"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <p>
                <label>Texto artículo</label>
              </p>
              <textarea
                rows="10"
                cols="100"
                value={formValues.texto}
                onChange={handleValueChange}
                name="texto"
                required
              ></textarea>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Row>
            <h5>Agregar imágen</h5>
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
                          <Card.Img
                            variant="top"
                            src={
                              consts.LOCALHOST +
                              consts.IMAGES_FOLDER +
                              selectedImages[i].urlImage
                            }
                          />
                          <Card.Title>
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
              {selectedImages.length < 1 && (
                <Button
                  onClick={(e) =>
                    setSelectedImages([...selectedImages, { urlImage: "" }])
                  }
                  variant="success"
                >
                  +
                </Button>
              )}
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

export default AgregarNovedad;
