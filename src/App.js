import { useState } from "react";
import "./App.css";
import Content from "./components/Content";
import Top from "./components/Top";

function App() {
  const [darkTheme, setDarkTheme] = useState({backgroundColor:"white", color:"black"});
  return (
    <div className="App" style={darkTheme}>
      <Top darkTheme={darkTheme} setDarkTheme={setDarkTheme}/>
      <Content darkTheme={darkTheme} heading="The WET Codbase" time="Sunday 4th, 2020 11 min read" para="Come waste your time with me"/>
      <Content darkTheme={darkTheme} heading="Goodby, Clean Code" time="Friday 22nd, 2019 5 min read" para="Let clean code guide you. Then let it go"/>
      <Content darkTheme={darkTheme} heading="My Decade In Review" time="Saturday 11th, 2018 5 min read" para="A personal reflection"/>
      <Content darkTheme={darkTheme} heading="What Are The React Team Principles" time="Thursday 4th, 2015 5 min read" para="Come waste your time with me"/>
    </div>
  );
}

export default App;
