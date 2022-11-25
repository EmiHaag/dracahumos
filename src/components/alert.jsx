import React from "react";
import { Alert } from "react-bootstrap";

function AlertDismissible({ heading, msg, setShowAlert, show, colorBg }) {
  if (show) {
    return (
      <Alert
        /*  style={{ position: "absolute", bottom: "2em", right: "3em" }} */
        variant={colorBg}
        onClose={() => setShowAlert(false)}
        dismissible>
        <Alert.Heading>{heading}</Alert.Heading>
        <p>{msg}</p>
      </Alert>
    );
  } else return <></>;
}

export default AlertDismissible;
