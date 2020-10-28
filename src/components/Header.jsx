import React from "react";
import {CompanyLogo} from "./CompanyLogo";
import {ContactInfo} from "./ContactInfo";
import Logo from "../assets/images/path22.svg";
import '../assets/css/main.scss';
import {MenuItem} from "./MenuItem";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import 'bootstrap/dist/css/bootstrap.min.css';

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

          {/* Mobile Desktop */}
          <MenuItem name={"Services"}/>
          <MenuItem name={"About us"}/>
          <MenuItem name={"Career"}/>
          <MenuItem name={"Work"}/>
          <MenuItem name={"Contact"}/>

          {/* Mobile Menu */}
          <MenuItem type="mobile" name={"Menu"}/>
          <DropdownButton id="dropdown-item-button" className={"mobile"}>
            <Dropdown.Item className="menuItem" as="button">Services</Dropdown.Item>
            <Dropdown.Item className="menuItem" as="button">About us</Dropdown.Item>
            <Dropdown.Item className="menuItem" as="button">Career</Dropdown.Item>
            <Dropdown.Item className="menuItem" as="button">Work</Dropdown.Item>
            <Dropdown.Item className="menuItem" as="button">Contact</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    );
  }
}