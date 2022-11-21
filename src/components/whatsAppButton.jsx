import React from "react";

import { FaInstagram, FaWhatsapp, FaFacebook } from "react-icons/fa";

const WhatsAppButton = ()=>{
    return(<>
      <div style={styles.Wrapper}>
   {/*      <FontAwesomeIcon icon={faCoffee} /> */}
   <a  style={styles.Wrapper}
        href="https://wa.me/5491126909643" target="_blank"
        rel="noopener noreferrer">
        <FaWhatsapp style={styles.Icon} />
        </a>
      </div>
    </>)
}
const styles = {
    Wrapper:{
      position: "fixed",
      width: "60px",
      height: "60px",
      bottom: "7rem",
      right: "1.3rem",
      backgroundColor: "#25d366",
      color: "#FFF",
      borderRadius: "50px",
      textAlign: "center",
      fontSize: "30px",
      boxShadow: "2px 2px 3px #999",
      zIndex: "100",
    },
    Icon:{
      marginTop: "0.6rem",

    }
}

export default WhatsAppButton;