import React, {Component} from 'react'
import FeaturedProduct from "../../../components/FeaturedProduct";

class NewArrivals extends Component {
    render() {
        let {products, history} = this.props
        return (
            <div className="product-panel">
                  <div className="container">
                      <div className="section-title">
                          <h2>New Arrivals</h2>
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

export default NewArrivals;


