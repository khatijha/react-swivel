import React, { Component } from "react";
import SideBar from "../SideBar";
import Order from "./Order"
import "./style.scss";

class OrderPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='management'>
        <SideBar/>
        <div className="order_total_width">
          <Order></Order>
        </div>
      </div>
    )
  }
}

export default OrderPage
