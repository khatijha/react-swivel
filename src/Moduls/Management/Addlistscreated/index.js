import React, { Component } from "react";
import SideBar from "../SideBar";
import Addlistscreated from "./Addlistscreated"
import "./style.scss";

class AddlistscreatedPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Addlistscreated></Addlistscreated>
        </div>
      </div>
    )
  }
}

export default AddlistscreatedPage
