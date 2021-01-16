import React, { Component } from "react";
import SideBar from "../SideBar";
import "./style.scss";
import {withRouter} from "react-router-dom";
import {Button, Divider, Select, Input, Radio} from "antd";
import {checkOneDetail} from "../../../redux/product/action"
import {connect} from "react-redux";
import Time from 'react-time-format';
import time from "dateformat";
import * as auth from "../../../redux/auth/action";

class ThanksPage extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  componentDidMount() {
    let tmp = {};
    this.props.cart.forEach((item)=>{
        tmp[item['id']] = 1
    })
    this.setState({value:tmp})
  }
  onChange = (e, id)=>{
      alert(id)
      let old = this.state.value
      old[id] = e.target.value
      this.setState({
          value:old
      },()=>{
          console.log('=====', this.state.value)
      })
  } 
  render() {
    var dateFormat=require('dateformat')
    let productTitle=(item,key)=>{
      return(
       <a>{item.productTitle}&nbsp;&nbsp;</a>
      )
    }
    let ordernumber=(item,key)=>{
      return(
      <a>#{item.orderId}&nbsp;&nbsp;</a>)
    }
    var now = new Date()
    var targetDate = new Date(parseInt(this.props.order_cart[0].orderMilli)-now.getTimezoneOffset()*60000)
    targetDate.setDate(targetDate.getDate() + 2);

    return(
      <div className='management'>
        <SideBar/>
        <div className="order_total_width">
          <div className="thanks_order">
            <div>
              <p className="thanks_title">Thank You for placing an Order with Swivel.</p>
            </div>
            <div className="thanks_content">
              <p>Please monitor your email for order confirmation and for detailed delivery information visit link to <a className="thanks_link_order" onClick={()=>{
                this.props.history.push('/order')
              }}>My Orders page</a></p>
              <p className="ordernumbermap row">Order Number:<a className="thanks_link_order">{this.props.order_cart.map((item,key)=>{return ordernumber(item)})}</a></p>
            <p className="ordernumbermap row"><a className="thanks_link_order">{this.props.order_cart.map((item,key)=>{return productTitle(item)})}</a> will be shipped to <a>&nbsp;{this.props.order_cart[0].shippingAddress}&nbsp;</a> by&nbsp; <a>{this.props.order_cart[0].shopName}</a></p>          
              <p>Estimated Delivery Time :{dateFormat(targetDate,"mmmm dS, yyyy, h:MM")}</p>
            </div>            
          </div>       
        </div>
      </div>
    )
  }
}

const mapStateToProps = ({auth,product})=>{
  return{
    cart:product.cart,
    featured:product.featured_products,   
    userInfo:auth.userInfo,
    order_cart:product.order_cart,
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkOneDetail:(item)=> dispatch(checkOneDetail(item))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ThanksPage))

