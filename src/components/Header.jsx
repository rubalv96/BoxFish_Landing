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
          <MenuItem name={"Services"}/>
          <MenuItem name={"About us"}/>
          <MenuItem name={"Career"}/>
          <MenuItem name={"Work"}/>
          <MenuItem name={"Contact"}/>
          <MenuItem type="mobile" name={"Menu"}/>
            <DropdownButton id="dropdown-item-button" className={"mobile"} title="Dropdown button">
                <Dropdown.ItemText>Dropdown item text</Dropdown.ItemText>
                <Dropdown.Item as="button">Action</Dropdown.Item>
                <Dropdown.Item as="button">Another action</Dropdown.Item>
                <Dropdown.Item as="button">Something else</Dropdown.Item>
            </DropdownButton>
        </div>
      </div>
    );
  }
}