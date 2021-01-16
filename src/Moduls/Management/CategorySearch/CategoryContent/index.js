import React, { Component } from "react";
import { Navbar, Nav, Tab,Tabs, Modal} from 'react-bootstrap';
import './style.scss';
import './nav.js';
import {connect} from "react-redux";
import * as api from "../../../../Api/ChildrenApi";
import * as orderapi from "../../../../Api/OrderApi";
import {withRouter} from "react-router-dom";
import {Button, Divider, Select, Input, Radio} from "antd";
import {checkOneDetail, sort_product, page_number} from "../../../../redux/product/action"
import OrderDetail from "../../OrderDetail"
import time from "dateformat";
import FeaturedProduct from "../../../../components/FeaturedProduct"
import FeaturedProductList from "../../../../components/FeaturedProductList"
import { Pagination } from 'antd';

const { Option } = Select;

class CategoryContent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      displayStatus:[],
      displaymethod: true,
      categorylist:[],
      searchvalueList: ["Default Sorting","Sort by price: high to low","Sort by price: low to high", "Sort by newness","Sort by raty"],
      search_product: [], 
      sort_value: 0,
      page:1,
      page_product: []
    }
  }
  componentDidMount() {
    let all_category = this.props.all_category

    let i=0
    let j=0
    let categorylist=[]
    while(j<all_category.length){
        if(all_category[j].id==i){
            categorylist.push(all_category[j])
            j++;
        }
        else{
            categorylist.push({id:999999, title: "none"})
        }
        i++;
    }
  this.setState({
      countries: this.props.order_category_list,
      categorylist: categorylist,
      search_product: this.props.search_product,
      page_product: this.props.page_product
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
  displaymethod(method){
    this.setState({
      displaymethod: method
    })

  }
  selectSort(value){
    this.props.sort_product(value)
  }
  pageChange=(value)=>{
    this.props.changePageNumber(value)
  }
    
  render(){
    let search_product = this.props.search_product

    let search_values=this.props.search_values
    let page_product = this.props.page_product
    let searched_number = this.props.searched_number
    let page_number = this.props.page_number
    let {displaymethod} = this.state
    let categorylist = this.state.categorylist
    var first_value = ((page_number-1)*10+1)
    let second_value = (searched_number-page_number*10)>0?(page_number*10):(searched_number-(page_number-1)*10+first_value)

    var dateFormat=require('dateformat')

    
    return (

      <div className='card accounting'> 
        <div className="row grid_list_padding" >
          <Select className="sortingdrop" defaultValue={0} style={{ width: 120 }} onChange={this.selectSort.bind(this)}>
            {
              this.state.searchvalueList.map((item,index) => {
                return <Option value={index}>{item}</Option>
              })
            }
          </Select>
          <div className="toolbox-item toolbox-show">
              {/* <label>Showing 1–9 of 60 results</label> */}
          </div>          
          <div className="layout-modes">
            {
              displaymethod?<a onClick={()=>{this.displaymethod(true)}} className="layout-btn btn-grid" style={{color:"blue"}}  title="Grid">
              <i className="icon-mode-grid"></i>
          </a>:<a onClick={()=>{this.displaymethod(true)}} className="layout-btn btn-grid" title="Grid">
                  <i className="icon-mode-grid"></i>
              </a>
            }
            {
              displaymethod?<a onClick={()=>{this.displaymethod(false)}} className="layout-btn btn-list" title="List">
              <i className="icon-mode-list"></i>
          </a>:<a onClick={()=>{this.displaymethod(false)}} className="layout-btn btn-list" style={{color:"blue"}} title="List">
                  <i className="icon-mode-list"></i>
              </a>
            }
          </div>          
        </div>      
        {
          displaymethod?<div className="row">
          {page_product.map((prop,key)=>{
            return <FeaturedProduct product={prop} categorylist={categorylist}/>
          })}
          </div>:<div>
        {page_product.map((prop,key)=>{
          return <FeaturedProductList product={prop} categorylist={categorylist}/>
        })}
        </div> 
        }   
        <p></p>
        <div>
          <Pagination total={searched_number} onChange={this.pageChange} showTotal={total => `Showing ${first_value}-${second_value} of ${searched_number} items`}/>
          {/* <Pagination total={85} showSizeChanger showQuickJumper onChange={this.pageChange} showTotal={total => `Showing 1-10 of ${total} items`}/> */}
          {/* <Pagination current={this.state.page} onChange={this.pageChange} total={60} />  */}
        </div> 
      </div>
      )
    };
}
const mapStateToProps = ({auth,product})=>{
  return{
    search_product: product.search_product,
    page_product: product.page_product,
    searched_number:product.searched_number,
    page_number: product.page_number,
    search_values: product.search_values,
    all_category: product.all_category
  }
}

const mapDispatchToProps = (dispatch) => ({
  sort_product: (sort_value) => dispatch(sort_product(sort_value)),
  checkOneDetail:(item)=> dispatch(checkOneDetail(item)),
  getOrderProduct: (userEmail) => orderapi.getOrderProduct(userEmail),
  changePageNumber:(value) => dispatch(page_number(value))
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategoryContent))
