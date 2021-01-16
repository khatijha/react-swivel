import React, {Component} from "react";

class CartSummary extends Component {

    render() {
        let {cart} = this.props
        let total = ()=>{
            let total = 0
            cart.map((item, key)=>{
                let qt = parseInt(item.quantity)
                let cost = parseFloat(item.product.sales_price)
                total += qt*cost
            })
            return total.toFixed(2)
        }
        return (
            <div className="cart-summary">
                <h3>Summary</h3>

                <h4>
                    <a data-toggle="collapse" href="#total-estimate-section" className="collapsed"
                       role="button" aria-expanded="false" aria-controls="total-estimate-section">Estimate
                        Shipping and Tax</a>
                </h4>

                <div className="collapse" id="total-estimate-section">
                    <form action="#">
                        <div className="form-group form-group-sm">
                            <label>Country</label>
                            <div className="select-custom">
                                <select className="form-control form-control-sm">
                                    <option value="USA">United States</option>
                                    <option value="Turkey">Turkey</option>
                                    <option value="China">China</option>
                                    <option value="Nigeria">Nigeria</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group form-group-sm">
                            <label>State/Province</label>
                            <div className="select-custom">
                                <select className="form-control form-control-sm">
                                    <option value="CA">California</option>
                                    <option value="TX">Texas</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group form-group-sm">
                            <label>Zip/Postal Code</label>
                            <input type="text" className="form-control form-control-sm"/>
                        </div>

                        <div className="form-group form-group-custom-control">
                            <label>Flat Way</label>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="flat-rate"/>
                                <label className="custom-control-label" htmlFor="flat-rate">Fixed
                                    ₦5.00</label>
                            </div>
                        </div>

                        <div className="form-group form-group-custom-control">
                            <label>Best Rate</label>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input" id="best-rate"/>
                                <label className="custom-control-label" htmlFor="best-rate">Table Rate
                                    ₦15.00</label>
                            </div>
                        </div>
                    </form>
                </div>

                <table className="table table-totals">
                    <tbody>
                    <tr>
                        <td>Subtotal</td>
                        <td>₦{total()}</td>
                    </tr>

                    <tr>
                        <td>Tax</td>
                        <td>₦0.00</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td>Order Total</td>
                        <td>₦{total()}</td>
                    </tr>
                    </tfoot>
                </table>

                <div className="checkout-methods">
                    <a className="btn btn-block btn-sm btn-primary"
                       href=''
                       onClick={(e)=>{
                           e.preventDefault();
                           e.stopPropagation();
                           this.props.history.push('/checkout-shipping')
                       }}
                    >Go to
                        Checkout</a>
                    <a href="#" className="btn btn-link btn-block">Check Out with Multiple Addresses</a>
                </div>
            </div>

        )
    }
}

export default CartSummary