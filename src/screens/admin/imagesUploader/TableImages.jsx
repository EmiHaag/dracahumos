import React from "react";

import { Col, Container, InputGroup, Figure, Row } from "react-bootstrap";
import { consts } from "../config";

const TableImages = (props) => {
  /*  const images = imagesInServer["images"]; */

  const { images, handleImageSelected } = props;

  /* handleImageSelected is an state from 2 parent above already initialized in '' */
  /*   console.log(handleImageSelected, indexImage); */
  /*  const [itemSelected, setItemSelected] = useState(); */
  const handleImageSelectedChanged = (e) => {
    /*     handleImageSelected[indexImage] = e.target.value; */

    props.onClick(e.target.value);
   //console.log("onImageSelectedChanged:", handleImageSelected);
  };

  return (
    <Container>
      <Row>
        {images &&
          images.length > 0 &&
          images.map((item, index) => (
            <Figure key={index} style={{ width: "150px", display: "inline" }}>
              <InputGroup className="mb-3">
                <InputGroup.Radio
                  name="selectedImage"
                  aria-label="Checkbox for following text input"
                  value={item}
                  onChange={handleImageSelectedChanged}
                />
                {item.split('.').pop() === "mp4" ?
                  <video style={{width:"100%"}} preload="none" controls>
                    <source src={consts.LOCALHOST + "backend/images/uploaded/" + item} type="video/mp4" />
                    Your browser does not support HTML video.
                  </video> :
                  <Figure.Image
                    width={"100%"}
                    alt={item}
                    src={consts.LOCALHOST + "backend/images/uploaded/" + item}
                  />

                }

              </InputGroup>
            </Figure>
          ))}
      </Row>
    </Container>
  );
};

export default TableImages;
