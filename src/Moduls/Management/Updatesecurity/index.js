import React, { Component } from "react";
import SideBar from "../SideBar";
import Updatesecurity from "./Updatesecurity"
import "./style.scss";

class UpdatesecurityPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Updatesecurity></Updatesecurity>
        </div>
      </div>
    )
  }
}

export default UpdatesecurityPage
