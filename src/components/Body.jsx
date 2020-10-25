import React from "react";
import '../assets/css/main.css';
import bikeImage from '../assets/images/bike.png';
import {Footer} from "../components/Footer";

export class Body extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
        <div id={"heroContainer"}>
          <div id={"heroWrapper"}>
            <div id={"slogan"}>
                <div className={"sloganTextContainer"}>
                    <span className="sloganText">Engineering with </span><span className={"sloganText red"}> love</span><span className={"sloganText"}> and </span> <span className={"sloganText red"}>passion</span>
                </div>
              <p id="sloganSubtext">High-quality solutions for emerging technologies and industries</p>
            </div>
            <div className={"mainImage"} >
              <img className={"image"} src={bikeImage} />
            </div>
          <Footer/>
          </div>
        </div>
    );
  }
}