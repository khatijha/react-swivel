import React, {Component} from "react";
import {selectProduct} from "../../../../redux/product/action";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
class ProductDetails extends Component {

    render() {
        let {product} = this.props
        return (
            <div className="product-default left-details row row-sm mb-0" onClick={()=>{
                this.props.selectProduct(product)
                this.props.history.push('/product/'+product.id)
            }}>
                <figure className="col-4">
                    <a href="">
                        <div className={'product-div-image-small'}
                             style={{ backgroundImage:`url('${product.image_urls[0]}')`}}
                        ></div>
                    </a>
                </figure>
                <div className="product-details col-8">
                    <div className="ratings-container">
                        <div className="product-ratings">
                            <span className="ratings" style={{width: '100%'}}></span>
                            <span className="tooltiptext tooltip-top"></span>
                        </div>
                    </div>
                    <h2 className="product-title">
                        <a href="product.html">{product['short_name']}</a>
                    </h2>
                    <div className="price-box">
                        <span className="product-price">₦{product['sales_price']}</span>
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
    selectProduct:(product)=> dispatch(selectProduct(product))
});

export default connect(null, mapDispatchToProps)(withRouter(ProductDetails))
