import React from "react";
import "./Top.css";
const Top = ({ darkTheme, setDarkTheme }) => {
    const buttonDark={backgroundColor:"#f7a7c1",color:"black"}
    const buttonLight={backgroundColor:"#cf3868",color:"white"}
  return (
    <div className="top">
      <h1>Overreacted</h1>
      <button style={setDarkTheme({ backgroundColor: "white", color: "black" })}
        onClick={() => {
          // console.log("light");
          if (darkTheme.color === "white") {
            setDarkTheme({ backgroundColor: "white", color: "black" });
          } else {
            setDarkTheme({ backgroundColor: "#282c35", color: "white" });
          }
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default Top;
