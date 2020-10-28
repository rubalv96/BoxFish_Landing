import React from "react";
import '../assets/css/main.scss';
import bikeImage from '../assets/images/bike.png';
import iotaImage from '../assets/images/iota.png';
import carImage from '../assets/images/car.png';
import {Footer} from "../components/Footer";
import {DarkModeToggle} from "./DarkModeToggle";
import Carousel from 'react-bootstrap/Carousel';

export class Body extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div id={"heroContainer"}>

        <div id={"heroWrapper"}>

          {/* Dark/Ligh mode Toggle*/}
          <DarkModeToggle
            toggleFunction={this.props.toggleFunction}
          />
          {/* Slogan*/}
          <div id={"slogan"}>
            <div className={"sloganTextContainer"}>
              <span className="sloganText">Engineering with </span><span className={"sloganText red"}> love</span><span className={"sloganText"}> and </span> <span className={"sloganText red"}>passion</span>
            </div>
            <p id="sloganSubtext">High-quality solutions for emerging technologies and industries</p>
          </div>

          {/* Images Carousel */}
          <div className={"mainImage"} >
            <Carousel controls={false} indicators={false}>
              <Carousel.Item>
                <img
                  className="image"
                  src={bikeImage}
                  alt="Bike image"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={carImage}
                  alt="Lookiero App image"
                />

              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="image"
                  src={iotaImage}
                  alt="IOTA website image"
                />

              </Carousel.Item>
            </Carousel>
          </div>

          {/* Footer with customer logos*/}
          <Footer/>

        </div>
      </div>
    );
  }
}