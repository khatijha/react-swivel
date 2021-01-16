import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import ApiConfig from '../../../config/ApiConfig';

class SideBarProduct extends Component {
    render() {
        let featured = this.props.featured_products
        let sideProductItem = (product) =>{
            return (
                <div className="product-default left-details product-widget">
                    <figure>
                        <a href="product.html">
                            <img src="resources/images/products/product-1.jpg"/>
                        </a>
                    </figure>
                    <div className="product-details">
                        <h2 className="product-title">
                            <a href="product.html">Woo Album #2</a>
                        </h2>
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{width:"0%"}}></span>
                                <span className="tooltiptext tooltip-top"></span>
                            </div>
                        </div>
                        <div className="price-box">
                            <span className="product-price">₦9.00</span>
                        </div>
                    </div>
                </div>
            )
        }
        return (
            <aside className="sidebar-product col-lg-3 padding-left-lg mobile-sidebar">
                            <div className="sidebar-wrapper">
                                <div className="widget widget-brand">
                                    <a href="#">
                                        <img src="https://swivel.com.ng/resources/images/product-brand.png" alt="brand name"/>
                                    </a>
                                </div>

                                <div className="widget widget-info">
                                    <ul>
                                        <li>
                                            <i className="icon-shipping"></i>
                                            <h4>FREE<br/>SHIPPING</h4>
                                        </li>
                                        <li>
                                            <i className="icon-us-dollar"></i>
                                            <h4>100% MONEY<br/>BACK GUARANTEE</h4>
                                        </li>
                                        <li>
                                            <i className="icon-online-support"></i>
                                            <h4>ONLINE<br/>SUPPORT 24/7</h4>
                                        </li>
                                    </ul>
                                </div>

                                <div className="widget widget-banner">
                                    <div className="banner banner-image">
                                        <a href="#">
                                            <img src="https://swivel.com.ng/resources/images/banners/banner-sidebar.jpg" alt="Banner Desc"/>
                                        </a>
                                    </div>
                                </div>
                                <div className="widget widget-featured">
                                    <h3 className="widget-title">Featured Products</h3>

                                    <div className="widget-body">
                                        <div className="owl-carousel widget-featured-products" data-toggle="owl"
                                             data-owl-options="{
                                        'lazyLoad': true,
                                        'nav': true,
                                        'dots': false,
                                        'autoHeight': true
                                    }">
                                            <div className="featured-col">
                                                {
                                                   featured.map((prop,key)=>{
                                                       return sideProductItem(prop)
                                                   })
                                                }

                                            </div>

                                            <div className="featured-col">
                                                {
                                                    featured.slice(3,5).map((prop,key)=>{
                                                       return ( null)
                                                    })
                                                }
                                                <div className="product-default left-details product-widget">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src="resources/images/products/product-1.jpg"/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <h2 className="product-title">
                                                            <a href="product.html">Woo Album #2</a>
                                                        </h2>
                                                        <div className="ratings-container">
                                                            <div className="product-ratings">
                                                                <span className="ratings" style={{width:"0%"}}></span>
                                                                <span className="tooltiptext tooltip-top"></span>
                                                            </div>
                                                        </div>
                                                        <div className="price-box">
                                                            <span className="product-price">₦9.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
        );
    }
}
const mapStateToProps = ({product})=>{
    return{
        featured_products : product.featured_products,
        topsell_products : product.topsell_products,
        onsale_products : product.onsale_products,
        selected_product : product.selected_product
    }
}
export default connect(mapStateToProps, null)(withRouter(SideBarProduct))
