import React from "react";
import '../assets/css/main.scss';

export class MenuItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    let typeOfItem;
    typeOfItem = this.props.type === "mobile" ? "menuItem mobile" : "menuItem";

    // Vector line of Burger Menu Icon
    let vectorBurgerLine = (
      <div className={"burgerLine"} />
    );

    let item;
    this.props.type === "mobile" ?
      item = (<>
        <div className={"burgerMenu mobile"}>
          {vectorBurgerLine}
          {vectorBurgerLine}
          {vectorBurgerLine}
        </div>
        <p className={"menuItem mobile"}>{this.props.name}</p>
      </>
      ) :
      item = (<p className={"menuItem"}>{this.props.name}</p>);

    return (
      item
    );
  }
}