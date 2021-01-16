import React, { Component } from "react";
import SideBar from "../SideBar";
import AccountingSetting from "./EditProfile"
import "./style.scss";

class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <AccountingSetting></AccountingSetting>
        </div>
      </div>
    )
  }
}

export default Profile
