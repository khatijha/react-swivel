import React, { Component } from "react";
import { Menu, Icon, Button } from 'antd';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import "./style.scss";
import PriceSlider from "./PriceSlider"
import {updateSearchValue_c, updateSearchValue_b, updateSearchValue_con} from '../../../redux/product/action';

const { SubMenu } = Menu;

class CategorySideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      user: this.props.userInfo,
      mode: 'inline',
      theme: 'light',
      allCategory: this.props.allCategory,
      brand: this.props.brand,
    }
  }
  componentDidMount() {
    if (this.props.userInfo && this.props.userInfo.status !== 3) {
      this.props.history.push('complete-profile')
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.user !== this.props.userInfo) {
      this.setState({
        user: this.props.userInfo
      });
      if (this.props.userInfo && this.props.userInfo.status !== 3) {
        this.props.history.push('complete-profile')
      }
    }
  } 
  Searching = (category) => {
    let searchValue={"category":category.id}
    this.props.updateSearchValue_c(searchValue)
  }
  
  SearchingBrand = (item) =>{
    let searchValue={"brand":item}
    this.props.updateSearchValue_b(searchValue)
  }
  searchingCondition = (item) =>{
    let searchValue={"condition": true}
    if(item==false)
      searchValue={"condition": item}
    this.props.updateSearchValue_con(searchValue)    
  }

  render() {
    let allCategory=this.props.allCategory
    let brand = this.props.brand
    let firstParentCategory = (first, index) => {

      let idname="widget-body-"+index.toString()
      let hrefname="#widget-body-"+index.toString()
      return(     
        <div class="widget-body body-font-padding">
          <div class="widget">
              <div class="widget-title">
                  <div data-toggle="collapse" className="inner-menu"  onClick = {(e)=>this.Searching(first)} href={hrefname} role="button" aria-expanded="false" aria-controls={idname}>{first.title}</div>
              </div>
              {/* <div class="collapse" id={idname}>
                  <div class="widget-body">
                      <ul class="cat-list">
                        {allCategory.map((second,key) => {
                          if (second.parent == first.id)
                          return (
                            <li><a onClick = {(e)=>this.Searching(second)}>{second.title}</a></li>
                          )
                        })
                      }
                      </ul>
                  </div>
              </div> */}
          </div>
        </div>        
      )
    }
    return (
      <div style={{width: 306, border:1}} className="sidebar-shop">        
        <div class="sidebar-wrapper">  
          <div class="widget">
            <p className="widget-title categorysubtitle">
                <a data-toggle="collapse" href="#widget-body-100" role="button" aria-expanded="false" aria-controls="widget-body-100" class="collapsed">General</a>
                {/* <a data-toggle="collapse" href="#widget-body-100" role="button" aria-expanded="false" aria-controls="widget-body-100" class="collapsed">General<i class="collapse show fa fa-plus" id="widget-body-100"></i><i class="collapse fa fa-minus" id="widget-body-100"></i></a> */}
            </p>    

            <div class="collapse" id="widget-body-100"> 
              <ul class="cat-list">
                {              
                  allCategory.map((item,index)=>{
                    if(item.parent==0)
                      return  <li><a onClick = {(e)=>this.Searching(item)}>{item.title}</a></li>
                    }
                  )
                }
              </ul>
              {/* {
                allCategory.map((first,index)=>{
                  console.log("index:",index)
                  if(first.parent==0){
                    return firstParentCategory(first,index)
                  }
                })
              }  */}
            </div> 
          </div>   
          <div class="widget">
            <p className="widget-title categorysubtitle">
                <a data-toggle="collapse" href="#widget-body-101" role="button" aria-expanded="false" aria-controls="widget-body-101" class="collapsed">Price</a>
            </p>    
            <div class="collapse priceheight" id="widget-body-101" > 
              <div class="widget-pslider" style={{height:"85px"}}>
                <PriceSlider/>
              </div>
            </div> 
          </div>
          <div class="widget">
            <p className="widget-title categorysubtitle">
                <a data-toggle="collapse" href="#widget-body-102" role="button" aria-expanded="false" aria-controls="widget-body-102" class="collapsed">Brand</a>
            </p>    
            <div class="collapse" id="widget-body-102"> 
              {/* <div class="widget-body"> */}
                <ul class="cat-list">
                  {              
                    brand.map((item,index)=>{
                        return  <li><a onClick = {(e)=>this.SearchingBrand(item)}>{item}</a></li>
                      }
                    )
                  }
                </ul>
              {/* </div> */}
            </div> 
          </div>     
         
          <div class="widget">
            <p className="widget-title categorysubtitle">
                <a data-toggle="collapse" href="#widget-body-104" role="button" aria-expanded="false" aria-controls="widget-body-104" class="collapsed">Condition</a>
            </p>    
            <div class="collapse" id="widget-body-104"> 
              <div class="widget-body">
                <ul class="cat-list">                           
                  <li><a onClick = {(e)=>this.searchingCondition(true)}>New</a></li>
                  <li><a onClick = {(e)=>this.searchingCondition(false)}>Used</a></li>
                </ul>
              </div>
            </div> 
          </div>    
          <div class="widget">
            <p className="widget-title categorysubtitle">
                <a data-toggle="collapse" href="#widget-body-106" role="button" aria-expanded="false" aria-controls="widget-body-106" class="collapsed">Ranking</a>
            </p>    
          </div>    
          <div class="widget">
            <p className="widget-title categorysubtitle">
                <a data-toggle="collapse" href="#widget-body-107" role="button" aria-expanded="false" aria-controls="widget-body-107" class="collapsed">Sponsored</a>
            </p>  
          </div>                       
        </div>              
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.auth.userInfo,
  allCategory: state.product.all_category,
  brand: state.product.brand,
});
const mapDispatchToProps = (dispatch) => ({
  updateSearchValue_c:(value)=>dispatch(updateSearchValue_c(value)),
  updateSearchValue_b:(brand) => dispatch(updateSearchValue_b(brand)),
  updateSearchValue_con:(condition) => dispatch(updateSearchValue_con(condition))
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CategorySideBar))

