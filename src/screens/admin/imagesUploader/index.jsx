import React, { useState, useEffect } from "react";
import { Card, Button, Modal, Container, Row } from "react-bootstrap";
import TableImages from "./TableImages";
import Compressor from 'compressorjs';

import { consts } from "../config";

const ImagesUploader = (props) => {
  /*   let { selectedImages, setSelectedImages, indexImage } = props; */

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
        console.log(error);
      });
  };

  useEffect(() => {
    getImagesFromServer();
  }, []);

  const fileSelectedHandler = (file) => {
    
    // const image = e.target.files[0];
    new Compressor(file, {
      quality: 0.6, // 0.6 can also be used, but its not recommended to go below.
      success: (compressedResult) => {
        // compressedResult has the compressed file.
        // Use the compressed file to upload the images to your server.        
        console.log(compressedResult)
        setFile(compressedResult)
      },
    });
    
    
    
    
    //setFile(file);
  };

  const uploadFile = async () => {
    const fd = new FormData();
    fd.append("image", f);
    console.log(f);
    await axios
      .post(consts.LOCALHOST + "backend/images/uploadSingleImage.php", fd)
      .then((res) => {
        if (res.data.success) {
          console.log("archivo subido correctamente, actualizando tabla..");
          getImagesFromServer();
        }
        console.log(res.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
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

  const callback = (imageSelected)=>{
    tempImgSelected = imageSelected;
  }
  return (
    <>
      <Button variant="primary" onClick={handleShow} style={{ width: "100%", fontSize:"0.8em" , padding:"0"}}>
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
                accept="image/*"
              />
            </Card>
            <Button onClick={uploadFile}>Subir</Button>

            <Row>
              <TableImages
                images={imagesInServer}
                /* handleImageSelected={tempImgSelected} */
                onClick={callback}
              ></TableImages>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveSelectedImageUri}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ImagesUploader;
