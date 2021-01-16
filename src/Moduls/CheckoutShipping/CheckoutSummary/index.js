import React, {Component} from "react";

class CheckoutSummary extends Component {
    render() {
        return (
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
        )
    }
}

export default CheckoutSummary