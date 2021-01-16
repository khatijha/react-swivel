import React, { Component } from "react";
import { Input, Menu, Button, Dropdown, Divider,  Select, Modal } from 'antd';
import './style.scss';
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {Tab, Tabs} from 'react-bootstrap';
import {addToCart, fetchHomeProduct, selectProduct} from "../../../../redux/product/action";
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';

const { Option } = Select;

class Addlistscreated extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selected_list:"Select List"
    }
  }
  componentWillMount(){
    this.setState({selected_list: this.props.selected_listname})
  }

  handleChange(value) {
  }
  handleChangeListvalue(value) {
    this.setState({selected_list: value})
  }
  list_addtocart(product){
    let status={}
    status={"listStatus":this.state.selected_list,"quantity":1}
    this.props.selectProduct(product)
    this.props.addToCart(status)
    } 

  notifySuccess = () => { 
    toast.success("Inserting cart", {
      containerId: 'A',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 1500
    });
  }; 
  eventAddtoCart(product){
    this.notifySuccess();
    this.list_addtocart(product);    
  }
    
  render() {
    let list_product=this.props.list_product

    const menu = (
      <Menu>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">
            1st menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">
            2nd menu item
          </a>
        </Menu.Item>
        <Menu.Item>
          <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
            3rd menu item
          </a>
        </Menu.Item>
      </Menu>
    );
    return (
      <div className='card accounting'>
        <div className='card-header'>
          Lists
        </div>
        <Select defaultValue={this.state.selected_list}  style={{ width: 120 }} onChange={this.handleChangeListvalue.bind(this)}>
          {this.props.order_category_list.map((item,ii)=>{
            if (ii==0){return (<Option value={item.inputValue} selected disabled hidden>{item.inputValue}</Option>)}
            return (<Option value={item.inputValue}>{item.inputValue}</Option>)
          })}          
        </Select>        
        <div className='card-body'>
          {list_product.map((item,jj)=>{

            if (item.listStatus==this.state.selected_list){
              return(
              <div className='row d-flex img_height'>
                <div className="img_height col-md-3">
                  <img className="addlist_img_style" src={item.product.image_urls[0]}></img>
                </div>            
                             
                <div className="product-single-details col-md-5">
                <h1 className="product-title">{item.product.title}</h1>
                  <div className="ratings-container">
                    <div className="product-ratings">
                      <span className="ratings" style={{ width: '60%' }}></span>
                    </div>
                    <a href="#" className="rating-link">( 6 Reviews )</a>
                  </div>                 
                  <div className="price-box">
                    <span className="old-price">₦{item.product.cost_price}</span>
                    <span className="product-price">₦{item.product.sales_price}</span>
                  </div>
                </div>
              <div className="btn_group col-md-3">
                <div>
                  <Button type='primary' className="btn_addcart" onClick={()=> {this.eventAddtoCart(item.product)}}>ADD TO CART</Button>
                </div>
                <div className="btn_sgroup">
                  <Button type='danger' className="btn_del" onClick={this.checkPhoneCode}>DELETE</Button>
                  <Select defaultValue="MORE" style={{ width: 120 }} onChange={this.handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="dddd">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </div>
              </div>
              
              <Divider></Divider>
            </div>           
              )
            }                    
          })}          
          <ToastContainer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({auth,product})=>{
  return{
    cart:product.cart,
    featured:product.featured_products,   
    userInfo:auth.userInfo,
    order_category_list: product.order_category_list,  
    list_product: product.list_product,
    selected_listname: product.selected_listname   
  }
}

const mapDispatchToProps = (dispatch) => ({
  addToCart:(selectstatus)=>{dispatch(addToCart(selectstatus))},
  selectProduct:(product)=> dispatch(selectProduct(product))
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Addlistscreated))

