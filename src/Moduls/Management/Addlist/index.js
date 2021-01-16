import React, { Component } from "react";
import SideBar from "../SideBar";
import Addlist from "./Addlist"
import "./style.scss";

class AddlistPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Addlist></Addlist>
        </div>
      </div>
    )
  }
}

export default AddlistPage
