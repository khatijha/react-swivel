import React, {Component} from "react";

class CheckoutReviewPage extends Component{
    render() {
        return (
            <div className="container">
                <ul className="checkout-progress-bar">
                    <li>
                        <span>Shipping</span>
                    </li>
                    <li className="active">
                        <span>Review &amp; Payments</span>
                    </li>
                </ul>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="order-summary">
                            <h3>Summary</h3>

                            <h4>
                                <a data-toggle="collapse" href="#order-cart-section" className="collapsed" role="button"
                                   aria-expanded="false" aria-controls="order-cart-section">2 products in Cart</a>
                            </h4>

                            <div className="collapse" id="order-cart-section">
                                <table className="table table-mini-cart">
                                    <tbody>
                                    <tr>
                                        <td className="product-col">
                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="resources/images/products/product-1.jpg" alt="product"/>
                                                </a>
                                            </figure>
                                            <div>
                                                <h2 className="product-title">
                                                    <a href="product.html">Baseball Cap</a>
                                                </h2>

                                                <span className="product-qty">Qty: 4</span>
                                            </div>
                                        </td>
                                        <td className="price-col">$17.90</td>
                                    </tr>

                                    <tr>
                                        <td className="product-col">
                                            <figure className="product-image-container">
                                                <a href="product.html" className="product-image">
                                                    <img src="resources/images/products/product-2.jpg" alt="product"/>
                                                </a>
                                            </figure>
                                            <div>
                                                <h2 className="product-title">
                                                    <a href="product.html">Dress Shoes</a>
                                                </h2>

                                                <span className="product-qty">Qty: 4</span>
                                            </div>
                                        </td>
                                        <td className="price-col">$7.90</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="checkout-info-box">
                            <h3 className="step-title">Ship To:
                                <a href="#" title="Edit" className="step-title-edit"><span
                                    className="sr-only">Edit</span><i className="icon-pencil"></i></a>
                            </h3>

                            <address>
                                Desmond Mason <br/>
                                123 Street Name, City, USA <br/>
                                Los Angeles, California 03100 <br/>
                                United States <br/>
                                (123) 456-7890
                            </address>
                        </div>

                        <div className="checkout-info-box">
                            <h3 className="step-title">Shipping Method:
                                <a href="#" title="Edit" className="step-title-edit"><span
                                    className="sr-only">Edit</span><i className="icon-pencil"></i></a>
                            </h3>

                            <p>Flat Rate - Fixed</p>
                        </div>
                    </div>

                    <div className="col-lg-8 order-lg-first">
                        <div className="checkout-payment">
                            <h2 className="step-title">Payment Method:</h2>

                            <h4>Check / Money order</h4>

                            <div className="form-group-custom-control">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input" id="change-bill-address"
                                           value="1"/>
                                        <label className="custom-control-label" htmlFor="change-bill-address">My billing
                                            and shipping address are the same</label>
                                </div>
                            </div>

                            <div id="checkout-shipping-address">
                                <address>
                                    Desmond Mason <br/>
                                    123 Street Name, City, USA <br/>
                                    Los Angeles, California 03100 <br/>
                                    United States <br/>
                                    (123) 456-7890
                                </address>
                            </div>

                            <div id="new-checkout-address" className="show">
                                <form action="#">
                                    <div className="form-group required-field">
                                        <label>First Name </label>
                                        <input type="text" className="form-control" required/>
                                    </div>

                                    <div className="form-group required-field">
                                        <label>Last Name </label>
                                        <input type="text" className="form-control" required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Company </label>
                                        <input type="text" className="form-control"/>
                                    </div>

                                    <div className="form-group required-field">
                                        <label>Street Address </label>
                                        <input type="text" className="form-control" required/>
                                            <input type="text" className="form-control" required/>
                                    </div>

                                    <div className="form-group required-field">
                                        <label>City </label>
                                        <input type="text" className="form-control" required/>
                                    </div>

                                    <div className="form-group">
                                        <label>State/Province</label>
                                        <div className="select-custom">
                                            <select className="form-control">
                                                <option value="CA">California</option>
                                                <option value="TX">Texas</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group required-field">
                                        <label>Zip/Postal Code </label>
                                        <input type="text" className="form-control" required/>
                                    </div>

                                    <div className="form-group">
                                        <label>Country</label>
                                        <div className="select-custom">
                                            <select className="form-control">
                                                <option value="USA">United States</option>
                                                <option value="Turkey">Turkey</option>
                                                <option value="China">China</option>
                                                <option value="Germany">Germany</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="form-group required-field">
                                        <label>Phone Number </label>
                                        <div className="form-control-tooltip">
                                            <input type="tel" className="form-control" required/>
                                                <span className="input-tooltip" data-toggle="tooltip"
                                                      title="For delivery questions." data-placement="right"><i
                                                    className="icon-question-circle"></i></span>
                                        </div>
                                    </div>

                                    <div className="form-group-custom-control">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="address-save"/>
                                                <label className="custom-control-label" htmlFor="address-save">Save in
                                                    Address book</label>
                                        </div>
                                    </div>
                                </form>
                            </div>

                            <div className="clearfix">
                                <a href="#" className="btn btn-primary float-right">Place Order</a>
                            </div>
                        </div>

                        <div className="checkout-discount">
                            <h4>
                                <a data-toggle="collapse" href="#checkout-discount-section" className="collapsed"
                                   role="button" aria-expanded="false" aria-controls="checkout-discount-section">Apply
                                    Discount Code</a>
                            </h4>

                            <div className="collapse" id="checkout-discount-section">
                                <form action="#">
                                    <input type="text" className="form-control form-control-sm"
                                           placeholder="Enter discount code" required/>
                                        <button className="btn btn-sm btn-outline-secondary" type="submit">Apply
                                            Discount
                                        </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CheckoutReviewPage