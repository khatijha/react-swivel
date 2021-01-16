import React, { Component } from "react";
import SideBar from "../SideBar";
import Payment from "./Payment"
import "./style.scss";

class PaymentPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className='profile'>
          <Payment></Payment>
        </div>
      </div>
    )
  }
}

export default PaymentPage
