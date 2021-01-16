import React, { Component, useState } from "react";
import { Navbar, Nav, Tab,Tabs, Modal} from 'react-bootstrap';
import './style.scss';
import './nav.js';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Button, Divider, Select, Input, Radio} from "antd";
import time from "dateformat";

const { Option } = Select;

class OrderDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      returnModalshow: false,
      reviewModalshow: false     
    }
  }
  showTrackingbar(){
    if(document.getElementById("progressbar").style.display == "block")
      {
        document.getElementById("progressbar").style.display = "none";
    }
    else{
      document.getElementById("progressbar").style.display = "block";
    }
  } 
  
  handleClose=()=>{
    this.setState({returnModalshow:false})
  }
  handleShow=()=>{
    this.setState({returnModalshow:true})
  }
  reviewClose=()=>{
    this.setState({reviewModalshow:false})
  }
  reviewShow=()=>{

    this.setState({reviewModalshow:true})
  }

  
  render(){    
    let product = this.props.one_product
    let now= new Date()
    var dateFormat=require('dateformat')
    let orderStatus=""
    var orderDate =new Date(parseInt(product.orderMilli))

    const diffTime = Math.abs(orderDate - now);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    var passOrder
    if(diffDays>1)passOrder="Before "+diffDays.toString()+"Days"
    else passOrder = "Just Ordered"

    if (product.orderStatus=="1")
      orderStatus="New Order"
    else if (product.orderStatus=="2")
      orderStatus=""
    return (    
      <div className='card accounting'>
        <div className="ordertitle">ORDER DETAILS</div>
        <div className="row orderdetail_header">
          {/* <div className="col-md-4 ">Ordered on:{dateFormat(now,"mmmm dS, yyyy")}</div> */}
          <div className="col-md-4 ">Ordered on:{dateFormat(orderDate,"mmmm dS, yyyy")}</div>
          <div className="col-md-4">Order#:{product.orderId}</div>
          <div className="col-md-4">View Receipt</div>
        </div>        
        <div className="order_element_card">
          <div className="d-flex order_info order_title_bar">
            <div className="row order_detail_title_bar">
              <div className="col-md-4 orderdetail_under_header">
                <div>
                  Shipping Address
                </div>
              <div className="orderdetail_under_header_under">{product.shippingAddress}</div>
              </div>
                <div className="col-md-4 orderdetail_under_header">
                  <div>
                    Payment Method
                  </div>
                  {/* <div className="orderdetail_under_header_under">{product.paymentMode}</div> */}
                  <div className="orderdetail_under_header_under">Cash</div>
                </div>
                <div className="col-md-4 orderdetail_under_header">
                  <div>Order Summary</div>
                  <div className="orderdetail_under_header_under"></div>
              </div>
          </div>
          </div>
          <div className="row">           
            <div className="col-md-4 ">
            <p className="est_arr_date">{passOrder}</p>
            {/* <div className="row d-flex order_prod"> */}
              <div className="order_imagebox_size col-md-5">
                  <img className="order_image_src_size" src={product.productImage}></img>
                </div>                
            </div>             
            
            <div className="col-md-4 order_prod">
                  <p className="product_title">{product.productTitle}</p>
                  <div product-single-share>
                    <p className="order_product_detail"> <label>By</label>  <a className='vendor-link'>the {product.shopName}</a></p>
                  </div>
                  <div className="price-box">
                    <span className="old-price">₦{product.costPrice}</span>
                    <span className="product-price">₦{product.salesPrice}</span>
                  </div>
                  <div>
                    <Button type='' className="btn_buyagain" >Buy it again</Button>
                  </div>
                </div>                     
            <div className="btn_order col-md-4">
              <div>
                <Button type='primary' className="btn_track" onClick={this.showTrackingbar}>TRACK PACKAGE</Button>
              </div>
              <div>
                <Button type='primary' className="btn_return" onClick={this.handleShow}>RETURN ITEM</Button>
              </div>
              <div>
                <Button type='primary' className="btn_write" onClick={this.reviewShow}>WRITE REVIEW</Button>
              </div>                  
            </div>
          </div>
          <div class="container">
            <ul class="progressbar" id="progressbar">
              <li class="active">New Order</li>
              <li>Confirmed</li>
              <li>Shipped</li>
              <li>Delivered</li>
              
            </ul>
          </div>
          <Divider className="divider_custom"></Divider> 
        </div>  
        <Modal show={this.state.returnModalshow} onHide={()=>this.setState({returnModalshow:false})}>
          <Modal.Header closeButton>
            <Modal.Title>Return Product</Modal.Title>
          </Modal.Header>
          <Modal.Body>Do you want to return product, really?</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.handleClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>         
        <Modal show={this.state.reviewModalshow} onHide={()=>this.setState({reviewModalshow:false})}>
          <Modal.Header closeButton>
            <Modal.Title>Review about Product and Delivery</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>You can leave review and give feedback</p>
            <div className="orderReview">
              <textarea></textarea>
            </div>
            
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.reviewClose}>
              Cancel
            </Button>
            <Button variant="primary" onClick={this.reviewClose}>
              Yes
            </Button>
          </Modal.Footer>
        </Modal>             
      </div>
      
      
      )};
}
const mapStateToProps = ({auth,product})=>{
  console.log("product.one_detail--11:",product.one_detail)
  return{    
      one_product:product.one_detail,
      userInfo:auth.userInfo,
  }
}
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(OrderDetail))