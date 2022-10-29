import React from "react";
import sample from "../media/DracaHumos 2.mp4"; /* 
import YoutubeBackground from "react-youtube-background"; */

const video = () => {
  return (
    <video className="videoTag" autoPlay loop muted style={styles.video}>
      <source src={sample} type="video/mp4" />
    </video>
    /*   <YoutubeBackground videoId={"JaRz0ISoHjk"}></YoutubeBackground> */
  );
};

export default video;

const styles = {
  video: {
    position: "fixed",
    top: "50%",
    left: "50%",
    minWidth: "100%",
    minHeight: "100%",
    width: "auto",
    height: "auto",
    zIndex: "-100",
    transform: "translateX(-50%) translateY(-50%)",

    backgroundSize: "cover",
    transition: "1s opacity",
  },
};
