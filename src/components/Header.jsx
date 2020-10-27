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
        </div>
      </div>
    );
  }
}