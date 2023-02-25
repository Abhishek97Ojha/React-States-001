import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Top from "./components/Top";

function App() {
  const [darkTheme, setDarkTheme] = useState({backgroundColor:"white", color:"black"});
  const [darkBtnTheme, setDarkBtnTheme] = useState({backgroundColor:"#cf3868",color:"white"});
  const [darkHeadTheme, setDarkHeadTheme] = useState({color:"#cf3868"});

  return (
    <div className="App" style={darkTheme}>
      <Top darkTheme={darkTheme} setDarkTheme={setDarkTheme} darkBtnTheme={darkBtnTheme} setDarkBtnTheme={setDarkBtnTheme} darkHeadTheme={darkHeadTheme} setDarkHeadTheme={setDarkHeadTheme}/>
      <Content darkHeadTheme={darkHeadTheme} heading="The WET Codbase" time="Sunday 4th, 2020 11 min read" para="Come waste your time with me"/>
      <Content darkHeadTheme={darkHeadTheme} heading="Goodby, Clean Code" time="Friday 22nd, 2019 5 min read" para="Let clean code guide you. Then let it go"/>
      <Content darkHeadTheme={darkHeadTheme} heading="My Decade In Review" time="Saturday 11th, 2018 5 min read" para="A personal reflection"/>
      <Content darkHeadTheme={darkHeadTheme} heading="What Are The React Team Principles" time="Thursday 4th, 2015 5 min read" para="Come waste your time with me"/>
    </div>
  );
}

export default App;
