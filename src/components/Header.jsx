import React from "react";
import {CompanyLogo} from "./CompanyLogo";
import {ContactInfo} from "./ContactInfo";
import Logo from "../assets/images/path22.svg";
import '../assets/css/main.scss';
import {MenuItem} from "./MenuItem";

export class Header extends React.Component {
  render(){

    return (
      <div id={"headerContainer"}>
        <CompanyLogo
          imgSrc={Logo}
          title={"BOXFISH"}
          subtitle={"studio"}
        />
        <ContactInfo
          type= "mail"
          text="info@boxfish.studio"
        />
        <ContactInfo
          type= "telephone"
          text="+34 910 615212"
        />
        <div id={"menuContainer"}>
          <MenuItem name={"Services"}/>
          <MenuItem name={"About us"}/>
          <MenuItem name={"Career"}/>
          <MenuItem name={"Work"}/>
          <MenuItem name={"Contact"}/>
          <MenuItem type="mobile" name={"Menu"}/>
            <div className="toggleWrapper">
                <input onClick={()=>{this.props.toggleFunction();}}type="checkbox" className="dn" id="dn"/>
                <label htmlFor="dn" className="toggle">
    <span className="toggle__handler">
      <span className="crater crater--1"></span>
      <span className="crater crater--2"></span>
      <span className="crater crater--3"></span>
    </span>
                    <span className="star star--1"></span>
                    <span className="star star--2"></span>
                    <span className="star star--3"></span>
                    <span className="star star--4"></span>
                    <span className="star star--5"></span>
                    <span className="star star--6"></span>
                </label>
            </div>


            {/*<button onClick={()=>{this.props.toggleFunction();}}> Dark Mode </button>*/}
        </div>

      </div>
    );
  }
}