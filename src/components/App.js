import '../App.css';
import React from "react";
import {Header} from './Header';
import {ExtraHeader} from './ExtraHeader';
import {Body} from "./Body";

export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      // Dark mode style
      darkMode:false,
    };
    this.selectStyle = this.selectStyle.bind(this);
    this.toggleStyle = this.toggleStyle.bind(this);
  }

  // Modify the styles depends on the dark or light mode that user chooses
  selectStyle(mode){
    for(const [key, value] of Object.entries(mode)){
      document.documentElement.style.setProperty(key, value);
    }
  }

  // Toggle the style
  toggleStyle(){
    let currentMode = this.state.darkMode;
    this.setState({"darkMode":!currentMode});
  }

  render(){
    let isDarkModeOn = this.state.darkMode;

    let styleMode = "";
    if(isDarkModeOn)
    {styleMode = "darkMode";}

    // Dark Mode style parameters
    const darkMode = {
      "--bground-color":"#333333",
      "--logo-text-color":"#FFFFFF",
      "--slogan-text-color":"#FFFFFF",
      "--border-color":"1px solid #000000",
      "--customer-logo-filter":"invert(100%)",
    };

    // Light Mode style parameters
    const lightMode = {
      "--bground-color":"#FFFFFF",
      "--logo-text-color":"#333333",
      "--slogan-text-color":"#333333",
      "--border-color":"1px solid #E5E5E5",
      "--customer-logo-filter":"invert(0%)",
    };

    isDarkModeOn ? styleMode = darkMode : styleMode = lightMode;
    this.selectStyle(styleMode);

    return (

      <div>
        <Header/>

        {/* Only visible in Mobile version */}
        <ExtraHeader/>
        
        <Body
          toggleFunction = {this.toggleStyle}
        />
      </div>

    );
  }

}

export default App;