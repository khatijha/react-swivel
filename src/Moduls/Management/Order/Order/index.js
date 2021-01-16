import React, { Component } from "react";
import { Navbar, Nav, Tab,Tabs, Modal} from 'react-bootstrap';
import './style.scss';
import './nav.js';
import {connect} from "react-redux";
import * as api from "../../../../Api/ChildrenApi";
import * as orderapi from "../../../../Api/OrderApi";
import * as setting from "../../../../redux/settings/action";
import * as auth from "../../../../redux/auth/action";
import {withRouter} from "react-router-dom";
import {Button, Divider, Select, Input, Radio,AutoComplete} from "antd";
import {checkOneDetail} from "../../../../redux/product/action";
import OrderDetail from "../../OrderDetail";
import time from "dateformat";
import { Pagination } from 'antd';

const { Option } = Select;

class Order extends Component {
  constructor(props) {
    super(props)
    this.state = {
      order_product:[],
      displayStatus:[],
      originProducts:[],
      originDisplayStatus:[],
      pageNum:1,
      display_order:[],
      pageProducts:[],
      searchvalueList: ["Default Sorting","ordered","confirmed", "out for delivery"],
      dataSourceOrigin: ['apple','camera','watch','sony','hd','phone','toy'],
      dataSource:[],
      sortValue:0,
    }
    this.getOrderproduct()
  }
  getOrderproduct=()=>{
      let userEmail={"userEmail":this.props.userInfo.email}
      this.props.getOrderProduct(userEmail).then(resp=>{
      let tmp_displayStatus= []
      for(var i=0;i<resp.data.length;i++)
      {
        tmp_displayStatus.push({"barShow:":false})
      } 
      this.setState({
        originProducts: resp.data,
        originDisplayStatus:tmp_displayStatus,
        originCnt: resp.data.length,
        orderCnt:resp.data.length,
        order_product: resp.data,
        displayStatus: tmp_displayStatus,
      })
    })  
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
  showTrackingbar(index,firstNum){
    index=index-1
    let {displayStatus}=this.state
    displayStatus[index+firstNum-1]==true?displayStatus[index+firstNum-1]=false:displayStatus[index+firstNum-1]=true;
    displayStatus[index+firstNum-1]==true?document.getElementsByClassName('progressbar_order')[index].setAttribute('style','display:show;'):document.getElementsByClassName('progressbar_order')[index].setAttribute('style','display:none;');
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
  pageChange=(value)=>{

    var x = document.getElementsByClassName('progressbar_order')
    var i;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }

    let {originProducts,originDisplayStatus,originCnt} = this.state
    this.setState({
      pageNum:value,
      order_product:originProducts,
      displayStatus:originDisplayStatus,
      orderCnt:originCnt
    })
    
  }
  selectSort(value){
    let {originProducts,originDisplayStatus} = this.state
    let tmp_products=[]
    let tmp_displayStatus=[]
    let order_product = originProducts
    if(value==0)
      this.setState({
        orderCnt:originProducts.length,
        order_product:originProducts,
        displayStatus:originDisplayStatus,
        pageNum:1,
        sortValue:0
     })
    else{
      for(var i=0;i<order_product.length;i++){
        switch(value){
          case 1:
            if(order_product[i].deliveryStatus=="a")
              {
                tmp_products.push(order_product[i])
                tmp_displayStatus.push({
                  "backcolor_confirm":"dodgerblue",
                  "backcolor_ship":"dodgerblue",
                  "delivery_bar":"none",
                  "classActive":"Active",
                  "icon_confirm_Show":false,
                  "icon_ship_Show":false,
                })
              }
              break;
          case 2:
            if(order_product[i].deliveryStatus=="b")
            { tmp_products.push(order_product[i])
              tmp_displayStatus.push({
                "backcolor_confirm":"green",
                "backcolor_ship":"dodgerblue",
                "delivery_bar":"none",
                "classActive":"Active",
                "icon_confirm_Show":true,
                "icon_ship_Show":false,
              })
            }
            break;
          case 3:
            if(order_product[i].deliveryStatus=="c"){
              tmp_products.push(order_product[i])
              tmp_displayStatus.push({
                "backcolor_confirm":"green",
                "backcolor_ship":"green",
                "delivery_bar":"none",
                "classActive":"Active",
                "icon_confirm_Show":true,
                "icon_ship_Show":true,
              })
            }
        }
      }
      this.setState({
        orderCnt:tmp_products.length,
        order_product:tmp_products,
        displayStatus:tmp_displayStatus,
        pageProducts:tmp_products.slice(0,9),
        sortValue:value,
        firstCnt:1,        
        secondCnt:tmp_products.length>10?10:tmp_products.length
      })
    }    
  }
  onSelect=(value) => {
    this.setState({inputValue: value})
  }
  handleSearch = (value) => {
    let {originProducts,originDisplayStatus} =this.state
    let tmp_dataSource = []
    var dataSource = this.state.dataSourceOrigin
    for(var i=0;i<dataSource.length;i++){
      if(dataSource[i].includes(value))
      tmp_dataSource.push(dataSource[i])
    }
    this.setState({
      dataSource:tmp_dataSource,
    })
    this.setState({inputValue: value})
    if(value==''){
      this.setState({
        order_product:originProducts,
        displayStatus:originDisplayStatus,
        pageNum:1,
        orderCnt:originProducts.length,})
    }
    else {
      let tmp_products=[];
      let tmpDisplayStatus=[];
      for(var i=0;i<originProducts.length;i++){
        if(originProducts[i].productTitle.includes(value))
        {tmp_products.push(originProducts[i]);
        tmpDisplayStatus.push(originDisplayStatus[i]);}
      }
      this.setState({
        order_product:tmp_products,
        displayStatus:tmpDisplayStatus,
        pageNum:1,
        orderCnt:tmp_products.length,});
    }
  }
  AutoSearch = () => {
    let {originProducts,inputValue,sortValue} = this.state
    let tmp_products=[]
    let tmp_displayStatus=[]
    for(var i=0;i<originProducts.length;i++){
      if(originProducts[i].productTitle.toLowerCase().includes(inputValue) || originProducts[i].productDescription.toLowerCase().includes(inputValue))
      {        
        switch(sortValue){
          case 0:
            tmp_products.push(originProducts[i])
            tmp_displayStatus.push({         
              "backcolor_receive":"dodgerblue",
              "backcolor_delivery":"dodgerblue",
              "delivery_bar":"none",
              "classActive":"Active",
              "icon_receive_Show":false,
              "icon_delivery_Show":false,
            });
            break;
          case 1:
            if(originProducts[i].deliveryStatus=="a")
            {
              tmp_products.push(originProducts[i])
              tmp_displayStatus.push({         
                "backcolor_receive":"dodgerblue",
                "backcolor_delivery":"dodgerblue",
                "delivery_bar":"none",
                "classActive":"Active",
                "icon_receive_Show":false,
                "icon_delivery_Show":false,
              });
            }
            break;
          case 2:
            if(originProducts[i].deliveryStatus=="b")
            { tmp_products.push(originProducts[i])
              tmp_displayStatus.push({            
              "backcolor_receive":"green",
              "backcolor_delivery":"dodgerblue",
              "delivery_bar":"none",
              "classActive":"Active",
              "icon_receive_Show":true,
              "icon_delivery_Show":false,
            })}
            break;
          case 3:
            if(originProducts[i].deliveryStatus=="c")
              {
                tmp_displayStatus.push({          
                  "backcolor_receive":"green",
                  "backcolor_delivery":"green",
                  "delivery_bar":"none",
                  "classActive":"Active",
                  "icon_receive_Show":true,
                  "icon_delivery_Show":true,
                })
                tmp_products.push(originProducts[i])
              }
        }       
      }
    }
    this.setState({
      order_product:tmp_products,
      displayStatus:tmp_displayStatus,
      pageNum:1,
      orderCnt:tmp_products.length,})
  }

  render(){
    let n=0;
    let str_id="";
    let active="active"
    let inactive="inactive"
    var dateFormat=require('dateformat')
    let {order_product,pageNum,displayStatus,orderCnt,dataSource} = this.state
    let firstNum = (pageNum-1)*10+1
    let secondNum = orderCnt-(firstNum-1)*10>10?pageNum*10:orderCnt
    let pageProducts = order_product.slice(firstNum-1,secondNum)

    let orderView=(item,index,key)=>{

      let now = new Date()
      var orderDate = new Date(parseInt(item.orderMilli)-now.getTimezoneOffset()*60000)
      var updateDate =new Date(parseInt(item.updateMilli)-now.getTimezoneOffset() * 60000)
      var displayUpdateDate = dateFormat(updateDate,"dS mmm, yyyy")
      return(   
        <div key={key} className="order_element_card">
          <div className="d-flex order_info order_title_bar">
            <div className="col-md-8 col-lg-8 order_three_title">
              <div className="order_place">
                <p>Order Time</p>
                <p className="order_detail_lower">{dateFormat(orderDate,"mmmm dS, yyyy")}</p>
              </div>
              <div className="order_total">
                <p>Total</p>
                <p className="order_detail_lower">₦{item.salesPrice*item.quantity}</p>
              </div>
              <div className="order_ship">
                <p>Ship To</p>
                <p className="order_detail_lower">{item.shippingAddress}</p>
              </div>
            </div>            
            <div className="order_details_invoice col-md-4 col-lg-4">
              <p>Order# {item.orderId}</p>
              <p className="link_details"><a 
              onClick={()=>{
                this.props.checkOneDetail(item)
                this.props.history.push('/order-detail')
              }}
            >Order Details</a> | <a href="#">Invoice</a></p>
            </div>
          </div>
          <div className="row">           
            <div className="col-md-4">
              <p className="est_arr_date">{item.deliveryStatus=="a"?"Ordered  ":item.deliveryStatus=="b"?"Confirmed  ":item.deliveryStatus=="c"?"Shipped  ":item.deliveryStatus=="d"?"Out of deliveried  ":"Deliveried  "}  {displayUpdateDate}</p>
              <div className="row">
                <div className="order_imagebox_size col-md-5">
                    <img className="order_image_src_size" src={item.productImage}></img>
                </div>                
              </div>              
            </div>
            <div className="col-md-4 order_prod">
              <p className="product_title">{item.productTitle}</p>
              <div className="product-single-share">
                <p className="order_product_detail"> <label>By</label>  <a className='vendor-link'>the {item.shopName}</a></p>
              </div>
              <div className="price-box">
                <span className="old-price">₦{item.costPrice}</span>
                <span className="product-price">₦{item.salesPrice}</span>
              </div>
              <div>
                <Button type='' className="btn_buyagain" onClick={this.checkPhoneCode}>Buy it again</Button>
              </div>
            </div>                        
            <div className="btn_order col-md-4">                    
              <div>
                <Button type='primary' className="btn_track" onClick={()=> this.showTrackingbar(index,firstNum)}>TRACK PACKAGE</Button>
              </div>
              <div>
                <Button type='primary' className="btn_return" onClick={this.handleShow}>RETURN ITEM</Button>
              </div>
              <div>
                <Button type='primary' className="btn_write" onClick={this.reviewShow}>WRITE REVIEW</Button>
              </div>                                 
            </div>
          </div>
          <div className="container">
            <ul className="progressbar_order track_index" style={{display:"none"}}>
              <li className="active">New Order</li>
              <li className={(item.deliveryStatus=="b" || item.deliveryStatus=="c" || item.deliveryStatus=="d" || item.deliveryStatus=="e")? active:inactive}>Confirmed</li>
              <li className={(item.deliveryStatus=="c" || item.deliveryStatus=="d" || item.deliveryStatus=="e")? active:inactive}>Shipped</li>
              <li className={(item.deliveryStatus=="e")? active:inactive}>Delivered</li>              
            </ul>
          </div>
          <Divider></Divider>                  
        </div>                      
      )
    }
    return (
      <div>
        <div className="ordertitle">MY ORDERS</div> 
        <div className="row pro_hh">
          <div className="sort_product">
            <Select className="sortingdrop" defaultValue={0} style={{ width: 180 }} onChange={this.selectSort.bind(this)}>
              {
                this.state.searchvalueList.map((item,index) => {
                  return <Option key={index}>{item}</Option>
                })
              }
            </Select>
          </div>
          <div>
            <AutoComplete
              className="searchboxpro certain-category-search"
              dropdownClassName="certain-category-search-dropdown"											
              dataSource={dataSource}
              style={{ width: 300,inlineSize:300,paddingTop:0}}
              onSelect={this.onSelect}
              onSearch={this.handleSearch}
              placeholder="I'm searching for..."
            />            
          </div>
          <div><Button className="searchbtn" variant="contained" onClick={this.AutoSearch} color="secondary">
              Search
            </Button>
          </div>
        </div>           
        <div className='card accounting'> 
                {pageProducts.map((item,key)=>{
          n=n+1
          return (orderView(item,n, key))
        })}   
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
            <p className="order_feedback">You can leave review and give feedback</p>
            <div className="order_review">
             <textarea name="textarea" value=""></textarea>
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
        <p></p>
        <div>
          <Pagination total={orderCnt} onChange={this.pageChange} showTotal={total => `Showing ${firstNum}-${secondNum} of ${orderCnt} items`}/>
        </div>
      </div>
      
      </div>
      )
    };
}
const mapStateToProps = ({auth,product})=>{
  return{
    cart:product.cart,
    userInfo:auth.userInfo,
  }
}

const mapDispatchToProps = (dispatch) => ({
  checkOneDetail:(item)=> dispatch(checkOneDetail(item)),
  getOrderProduct: (userEmail) => orderapi.getOrderProduct(userEmail),

});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Order))

// How to use tabs and tab

// return (
//   <div className='card accounting'>
//       <Tabs id="controlled-tab-example" defaulteventKey="order">
//         <Tab eventKey="order" title="Orders">
//           <div className="order">
//             {                  
//               this.props.cart.map((item,key)=>{
//                 return (orderView(item))
//               })                  
//             }
            
//           </div>
//         </Tab>
//         <Tab eventKey="buyagain" title="Buyagain">
//           <div className="order">
//             {
//               this.props.cart.map((item,key)=>{
//                 return buyView(item)
//               })
//             }
//           </div>           
//         </Tab>          
//     </Tabs>
//   </div>
//   )