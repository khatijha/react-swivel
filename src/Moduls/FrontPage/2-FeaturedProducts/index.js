import React, {Component} from 'react'
import FeaturedProduct from "../../../components/FeaturedProduct";
import {withRouter} from "react-router-dom";
import {connect} from "react-redux";

class FeaturedProducts extends Component {
    render() {
        let {products, history} = this.props
        return (
            <div className="product-panel mt-5">
                <div className="container">
                    <div className="section-title">
                        <h2>Featured Products</h2>
                    </div>
                    <div className="product-intro divide-line mt-2 mb-8">
                        {/* {Array(6).fill(0).map(item => <FeaturedProduct product = {item}/>)} */}
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

export default connect(null, mapDispatchToProps)(withRouter(FeaturedProducts))


