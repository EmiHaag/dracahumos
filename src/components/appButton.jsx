import React from "react";
import { Button } from "react-bootstrap";
import colors from "../config/colors";

const AppButton = ({ ...otherProps }) => {
  return <Button {...otherProps} style={styles.btn} />;
};

const styles = {
  btn: {
    backgroundColor: colors.primary,
    borderColor: colors.secondary,
    height: "3rem",
    fontSize: "0.8em",
  },
};

export default AppButton;
