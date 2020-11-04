import React, { useState, useEffect } from "react";
import myPhoto from "../Assets/heroImg.jpg";

const styles = {
  body: {
    backgroundColor: "#ddd",
    width: "100vw",
    height: "100vh",
  },
  imgContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    padding: "5% 0 2% 0",
  },
  img: {
    borderRadius: "50%",
    height: "140px",
    width: "140px",
  },
  btnContainer: {
    width: "60%",
    marginLeft: "20%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    padding: "10px",
    flexWrap: "wrap",
  },
  btns: {
    backgroundColor: "#ddd",
    borderRadius: "50px",
    height: "40px",
    width: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Trispace",
    fontWeight: 600,
    textTransform: "uppercase",
    cursor: "pointer",
  },
  btnsLeft: {
    boxShadow:
      "12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.3)",
  },
  btnsRight: {
    boxShadow:
      "-8px 8px 12px 0 rgba(0, 0, 0, 0.3), 12px -12px 16px rgba(255, 255, 255, 0.25",
  },
};

export default function Main() {
  const [windowDim, setWindowDim] = useState(getWindowDimensions());

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDim(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.body}>
      <div style={styles.imgContainer}>
        <img style={styles.img} alt="Me" src={myPhoto} />
      </div>
      <div
        style={{
          ...styles.btnContainer,
          height: windowDim.width <= 375 ? "40%" : "20%",
        }}
      >
        <div style={{ ...styles.btns, ...styles.btnsLeft }}>About</div>
        <div style={{ ...styles.btns, ...styles.btnsLeft }}>Projects</div>
        <div style={{ ...styles.btns, ...styles.btnsRight }}>Blogs</div>
        <div style={{ ...styles.btns, ...styles.btnsRight }}>Contact</div>
      </div>
    </div>
  );
}
