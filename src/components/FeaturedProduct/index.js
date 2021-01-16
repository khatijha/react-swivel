import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import * as api from "../../Api/UserApi";
import * as setting from "../../redux/settings/action";
import {addToCart, fetchHomeProduct, selectProduct} from "../../redux/product/action";
import {connect} from "react-redux";
import { NonceProvider } from "react-select";
class FeaturedProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    unlist_addtocart(){
        this.props.selectProduct(this.props.product)
        let status={"listStatus":"none", "quantity":1}
        this.props.addToCart(status)
    }
    render() {
        let {product} = this.props
        // let {categorylist} = this.props
        if(!product || !product.image_urls || !product.title)
            return (<></>)
        return (
            <div className="col-6 col-lg-2 col-md-3 col-sm-4 product-default inner-quickview inner-icon">
                <figure>
                    <a style={{display:"flex",padding:"10px"}} onClick={()=>{
                        this.props.selectProduct(product)
                        this.props.history.push('/product/'+product.title)
                    }}>
                        <div className={'product-div-image'} style={{
                            backgroundImage:`url('${product.image_urls[0]}')`
                        }}>
                        </div>
                    </a>
                    <div className="btn-icon-group">
                        <button className="btn-icon btn-add-cart" data-toggle="modal" onClick={()=>{this.unlist_addtocart()}}
                                data-target="#addCartModal">
                            <i className="icon-bag"></i></button>
                    </div>
                    <a className="btn-quickview" title="Quick View" style={{cursor:'pointer'}}
                    >Quick
                        View</a>
                </figure>
                <div className="product-details">
                    <div className="category-wrap"  style={{paddingRight:"10px",paddingLeft:"10px"}}>
                        <div className="category-list">
                            <a href="" className="product-category">{product.stock || 'category'}</a>
                        </div>
                        <a href="#" className="btn-icon-wish"><i className="icon-heart"></i></a>
                    </div>
                    <h2 className="product-title">
                        <a href="">{product['short_name']}</a>
                    </h2>
                    <div className="ratings-container">
                        <div className="product-ratings">
                            <span className="ratings" style={{width: '30%'}}></span>
                            <span className="tooltiptext tooltip-top">0</span>
                        </div>
                    </div>
                    <div className="price-box">
                        <span className="old-price">₦{product.cost_price}</span>
                        <span className="product-price">₦{product.sales_price}</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    selectProduct:(product)=> dispatch(selectProduct(product)),
    addToCart:(quantity)=>dispatch(addToCart(quantity))
});

export default connect(null, mapDispatchToProps)(withRouter(FeaturedProduct))