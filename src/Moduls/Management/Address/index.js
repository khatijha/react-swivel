import React, { Component } from "react";
import SideBar from "../SideBar";
import Address from "./Address"
import "./style.scss";

class AddressPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Address></Address>
        </div>
      </div>
    )
  }
}

export default AddressPage
