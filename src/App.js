import React from "react";
import "./styles/App.css";
import NavBar from "./Components/NavBar"
import {Home, About, Work, Contact} from "./Pages"


class App extends React.Component {
  state = {};
  render() {
    return (
      <>
        <NavBar />
        <Home />
        <About />
        <Work />
        <Contact />
      </>
    );
  }
}
export default App;
