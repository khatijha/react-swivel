import React, { Component } from "react";
import SideBar from "../SideBar";
import Device from "./Device"
import "./style.scss";

class DevicePage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Device></Device>
        </div>
      </div>
    )
  }
}

export default DevicePage
