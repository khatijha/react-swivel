import React, { Component } from "react";
import SideBar from "../SideBar";
import Updatelogin from "./Updatelogin"
import "./style.scss";

class UpdateloginPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Updatelogin></Updatelogin>
        </div>
      </div>
    )
  }
}

export default UpdateloginPage
