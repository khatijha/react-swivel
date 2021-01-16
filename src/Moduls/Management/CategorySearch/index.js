import React, { Component } from "react";
import SideBar from "../SideBar";
import CategoryContent from "./CategoryContent"
import "./style.scss";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import CategorySideBar from "../CategorySideBar";


class CategorySearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let dataSource = [
      '/resources/images/slider/slide1(1).jpg',
      '/resources/images/slider/slide2(1).jpg',
      '/resources/images/slider/slide3(1).jpg'
    ]
    let nav_list
    let tmp_nav_list=this.props.search_nav_list
    if (tmp_nav_list)
      nav_list=tmp_nav_list
    else
      nav_list={"value1":"", "value2":""}

    return(
      <div>       
        <div className='position-relative'>
          <img src="/resources/images/slider/slide1(1).jpg" style={{width:"100%", zIndex:"10",height:"32rem"}}></img>
          <div className="home-slide-content container position-absolute "
                style={{zIndex:"100", top:"25%", left:"10%"}}
          >
              <div>
                  <h2 className="home-slide-subtitle">best price of the year</h2>
                  <h1 className="home-slide-title">
                      top accessories
                  </h1>
                  <h2 className="home-slide-foot">from <span>₦19</span></h2>
                  <button className="btn btn-dark btn-buy"
                  >BUY NOW</button>
              </div>
          </div>
        </div>
        <nav aria-label="breadcrumb" class="breadcrumb-nav">
            <div className="container top-horizontal-bar" >
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><a href="/"
										   onClick={(e)=>{
											   this.props.history.push('/')
											   e.stopPropagation()
											   e.preventDefault()
										   }}
										>Home</a></li>
                    <li class="breadcrumb-item"><a href="#">{nav_list.value1}</a></li>
                    <li class="breadcrumb-item active" aria-current="page">{nav_list.value2}</li>
                </ol>
            </div>
        </nav>
        <div className='management'>        
          <CategorySideBar/>
          <div className="order_total_width">
            <CategoryContent></CategoryContent>
          </div>
        </div>
      </div>
     
    )
  }
}
const mapStateToProps = ({auth,product})=>{
  return{
    search_nav_list:product.search_nav_list,
    userInfo:auth.userInfo,
  }
}

export default connect(mapStateToProps,null)(withRouter(CategorySearch))
