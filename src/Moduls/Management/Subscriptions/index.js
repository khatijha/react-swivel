import React, { Component } from "react";
import SideBar from "../SideBar";
import Subscriptions from "./Subscriptions"
import "./style.scss";

class SubscriptionsPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Subscriptions></Subscriptions>
        </div>
      </div>
    )
  }
}

export default SubscriptionsPage
