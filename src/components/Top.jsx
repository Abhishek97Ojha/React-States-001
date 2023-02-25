import React from "react";
import "./Top.css";
const Top = ({ darkTheme, setDarkTheme,darkBtnTheme, setDarkBtnTheme ,darkHeadTheme, setDarkHeadTheme}) => {
  return (
    <div className="top">
      <h1>Overreacted</h1>
      <button 
      style={darkBtnTheme}
        onClick={() => {
          // console.log("light");
          if (darkTheme.color === "white" && darkBtnTheme.color === "black" && darkHeadTheme.color === "#f7a7c1") {
            setDarkTheme({ backgroundColor: "white", color: "black" });
            setDarkBtnTheme({backgroundColor:"#cf3868",color:"white"});
            setDarkHeadTheme({color:"#cf3868"})
          } else {
            setDarkTheme({ backgroundColor: "#282c35", color: "white" });
            setDarkBtnTheme({backgroundColor:"#f7a7c1",color:"black"});
            setDarkHeadTheme({color:"#f7a7c1"})
          }
        }}
      >
        Toggle
      </button>
    </div>
  );
};

export default Top;
