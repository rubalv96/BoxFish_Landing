import logo from './logo.svg';
import './App.css';
import React from "react";
import {Header} from './components/Header';
import {Body} from "./components/Body";

export class App extends React.Component {

  render() {
  return (
      <div style={{width: "100%", height: "100%", display: "flex", flexDirection: "column"}}>
        <Header/>
        <Body/>
        </div>
    );
  }
}

export default App;
