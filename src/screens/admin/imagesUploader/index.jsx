import React, { useState, useEffect } from "react";
import { Card, Col, Button, Modal, Container, Row } from "react-bootstrap";
import TableImages from "./TableImages";
import Compressor from "compressorjs";
import AlertDismissible from "../../../components/alert";
import { consts } from "../config";

const ImagesUploader = (props) => {
  /*   let { selectedImages, setSelectedImages, indexImage } = props; */
  const [msgAlert, setMsgAlert] = useState({
    headingAlert: "",
    msgAlert: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [f, setFile] = useState({});
  const [imagesInServer, setImagesInServer] = useState();
  const axios = require("axios");
  let currentIndImage = props.indexImage;
  const getImagesFromServer = async () => {
    await axios
      .get(consts.LOCALHOST + "backend/images/getImagesFromServer.php")
      .then((res) => {
        setImagesInServer(res.data);
        console.log(res.data);
      })
      .catch(function (error) {
        //  console.log(error);
      });
  };

  useEffect(() => {
    getImagesFromServer();
  }, []);

  const fileSelectedHandler = (file) => {
    // const image = e.target.files[0];

    if (file.name.split(".").pop() === "mp4") {
      setFile(file);
      return;
    }
    new Compressor(file, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.
        // console.log(compressedResult, file);
        setFile(compressedResult);
        //  console.log("archivo subido: ", f);
      },
    });

    //setFile(file);
  };

  const uploadFile = async () => {
    const fd = new FormData();
    fd.append("image", f);
    //console.log(f);
    setMsgAlert({
      headingAlert: "Subiendo archivo, aguarde..",
      msgAlert: "",
      bgColor: "warning",
    });
    setShowAlert(true);
    await axios
      .post(consts.LOCALHOST + "backend/images/uploadSingleImage.php", fd)
      .then((res) => {
        //console.log("archivo subido correctamente, actualizando tabla..");
        getImagesFromServer();

        console.log(res.data);
        setMsgAlert({
          headingAlert: "Servidor:",
          msgAlert: res.data,
          bgColor: "warning",
        });
        setShowAlert(true);
      })
      .catch(function (error) {
        // handle error
        //console.log(error);
        setMsgAlert({
          headingAlert: "Ocurrió un error al intentar subir el archivo",
          msgAlert: error,
          bgColor: "danger",
        });
        setShowAlert(true);
      })
      .then(function () {
        // always executed
      });
  };

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  /* let tempImgSelected = {}; */
  let tempImgSelected = "";

  const saveSelectedImageUri = () => {
    let copy = props.selectedImages;

    copy[props.indexImage] = tempImgSelected;
    props.setSelectedImages(tempImgSelected, props.indexImage);
  };

  const callback = (imageSelected) => {
    tempImgSelected = imageSelected;
  };
  return (
    <>
      <Button
        variant="primary"
        onClick={handleShow}
        style={{ width: "100%", fontSize: "0.8em", padding: "0" }}>
        Imagen/video {currentIndImage + 1}
      </Button>
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar o subir imagen</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Card>
              <input
                type="file"
                onChange={(e) => fileSelectedHandler(e.target.files[0])}
                accept="image/*, video/*"
              />
            </Card>
            <Row>
              <Col>
                <Button onClick={uploadFile}>Subir</Button>
              </Col>
              <Col>
                <AlertDismissible
                  heading={msgAlert.headingAlert}
                  msg={msgAlert.msgAlert}
                  setShowAlert={setShowAlert}
                  show={showAlert}
                  colorBg={msgAlert.bgColor}
                />
              </Col>
            </Row>

            <Row>
              <TableImages
                images={imagesInServer}
                /* handleImageSelected={tempImgSelected} */
                onClick={callback}></TableImages>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cerrar
          </Button>
          <Button variant="primary" onClick={saveSelectedImageUri}>
            Guardar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImagesUploader;
