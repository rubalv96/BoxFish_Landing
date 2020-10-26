import logo from './logo.svg';
import './App.css';
import React from "react";
import {Header} from './components/Header';
import {ExtraHeader} from './components/ExtraHeader';
import {Body} from "./components/Body";

export class App extends React.Component {

  constructor(props){
      super(props);
      this.state = {
          darkMode: false,
      };
      this.selectStyle = this.selectStyle.bind(this);
      this.toggleStyle = this.toggleStyle.bind(this);
  }

  selectStyle(mode){
      for (const [key, value] of Object.entries(mode)) {
          document.documentElement.style.setProperty(key, value);
      }
  }

  toggleStyle(){
      let currentMode = this.state.darkMode;
      this.setState({"darkMode": !currentMode});
      console.log("currentState: "+ this.state.darkMode);
  }
  render() {
      let isDarkModeOn = this.state.darkMode;

      let styleMode ="";
      if(isDarkModeOn)
          styleMode="darkMode";
      const darkMode={
          "--bground-color":"#333333",
          "--logo-text-color": "#FFFFFF",
          "--slogan-text-color": "#FFFFFF",
          "--border-color": "1px solid #000000",
          "--customer-logo-filter": "invert(100%)"
      }
      const lightMode={
          "--bground-color":"#FFFFFF",
          "--logo-text-color": "#333333",
          "--slogan-text-color": "#333333",
          "--border-color": "1px solid #E5E5E5",
          "--customer-logo-filter": "invert(0%)"

      }

      isDarkModeOn? styleMode=darkMode : styleMode=lightMode;

      this.selectStyle(styleMode);

  return (

      <div>
        <Header
            toggleFunction = {this.toggleStyle}
        />
        <ExtraHeader/>
        <Body/>

      </div>

  );
  }
}

export default App;
