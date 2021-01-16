import React, {Component} from "react";
import * as api from "../../../Api/UserApi";
import * as setting from "../../../redux/settings/action";
import {fetchHomeProduct} from "../../../redux/product/action";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import { InputNumber } from 'antd';
class CartProduct extends Component {
    render() {
        let {item} = this.props
        return (
            <>
                <tr className="product-row">
                    <td className="product-col">
                        <figure className="product-image-container">
                            <a  className="product-image">
                                <img style={{maxWidth:"100%"}} src={item.product["image_urls"][0]} alt="product"/>
                            </a>
                        </figure>
                        <h2 className="product-title">
                            <a >{item.product['title']}</a>
                        </h2>
                    </td>
                    <td>₦{item.product['sales_price']}</td>
                    <td>
                        <InputNumber min={1} max={100} defaultValue={item.quantity}/>
                    </td>
                    <td>₦{item.product['sales_price']}</td>
                </tr>
                <tr className="product-action-row">
                    <td colSpan="4" className="clearfix">
                        <div className="float-left">
                            <a href="#" className="btn-move">Move to Wishlist</a>
                        </div>

                        <div className="float-right">
                            <a href="#" title="Edit product" className="btn-edit"><span
                                className="sr-only">Edit</span><i className="icon-pencil"></i></a>
                            <a href="#" title="Remove product" className="btn-remove"><span
                                className="sr-only">Remove</span></a>
                        </div>
                    </td>
                </tr>
            </>
        )
    }
}

const mapStateToProps = ({product})=>{
    return{
        featured_products : product.featured_products,
        topsell_products : product.topsell_products,
        onsale_products : product.onsale_products,
        cart: product.cart
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFeaturedProducts: () => api.getFeatured(),
    setLoading: (val) => dispatch(setting.setLoading(val)),
    getHomeProducts:()=> dispatch(fetchHomeProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CartProduct))