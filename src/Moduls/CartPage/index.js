import React, {Component} from "react";
import CartProduct from "./CartProduct";
import CartSummary from "./CartSummary";
import {withRouter} from "react-router-dom";
import * as api from "../../Api/UserApi";
import * as setting from "../../redux/settings/action";
import {fetchHomeProduct} from "../../redux/product/action";
import {connect} from "react-redux";

class CartPage extends Component {
    render() {
        let {cart} = this.props
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="cart-table-container">
                            <table className="table table-cart">
                                <thead>
                                <tr>
                                    <th className="product-col">Product</th>
                                    <th className="price-col">Price</th>
                                    <th className="qty-col">Qty</th>
                                    <th>Subtotal</th>
                                </tr>
                                </thead>
                                <tbody>
                                {/*{Array(3).fill(0).map(item => <CartProduct/>)}*/}
                                {cart.map(item=>{
                                    return(<CartProduct item={item}></CartProduct>)
                                })}
                                </tbody>

                                <tfoot>
                                <tr>
                                    <td colSpan="4" className="clearfix">
                                        <div className="float-left">
                                            <a href="category.html" className="btn btn-outline-primary">Continue
                                                Shopping</a>
                                        </div>

                                        <div className="float-right">
                                            <a href="#" className="btn btn-outline-primary btn-clear-cart">Clear
                                                Shopping Cart</a>
                                            <a href="#" className="btn btn-outline-primary btn-update-cart">Update
                                                Shopping Cart</a>
                                        </div>
                                    </td>
                                </tr>
                                </tfoot>
                            </table>
                        </div>

                        <div className="cart-discount">
                            <h4>Apply Discount Code</h4>
                            <form action="#">
                                <div className="input-group">
                                    <input type="text" className="form-control form-control-sm"
                                           placeholder="Enter discount code" required/>
                                    <div className="input-group-append">
                                        <button className="btn btn-sm btn-primary" type="submit">Apply Discount
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <CartSummary cart={this.props.cart} history={this.props.history}/>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({product})=>{
    return{
        cart: product.cart
    }
}



export default connect(mapStateToProps, null)(withRouter(CartPage))
