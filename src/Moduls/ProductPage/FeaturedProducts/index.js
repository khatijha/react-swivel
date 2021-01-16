import React, {Component} from 'react'
import FeaturedProduct from "../../../components/FeaturedProduct";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class ProductList extends Component {
    render() {
        let {products, history} = this.props
        return (
            <div className="product-panel mt-5">
                <div className="container">
                    <div className="section-title">
                        <h2>{this.props.title}</h2>
                    </div>
                  
                    <div className="product-intro divide-line mt-2 mb-8">
                        {
                            products && products.map((prop, key)=>{
                                return(
                                    <FeaturedProduct product ={prop}/>                                    
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => ({
});

export default connect(null, mapDispatchToProps)(withRouter(ProductList))


