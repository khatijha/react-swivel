import React, {Component} from 'react'
import ProductDetails from "./ProductDetails";
class TopProducts extends Component {

    goToProductPage = () => {
        this.props.history.push("product");
    };

    render() {
        let {topsell_products, featured_products, onsale_products} = this.props
        let img_prefix = 'https://portotheme.com/html/porto_ecommerce/demo_22/assets/'
        return (
            <section className="home-products-intro" id="topProducts" style={{padding: '7rem 0 1rem'}}>
                <div className="container">
                    <div className='row' >
                        <div className='col-lg-3 col-sm-6'>
                            <div className="section-title mb-4">
                                <h4>Featured Products</h4>
                            </div>
                            {/*{Array(3).fill(0).map(item => <ProductDetails/>)}*/}
                            {
                                featured_products[0]&&featured_products.map((product,key)=>{
                                    return ((key<3)?(<ProductDetails product={product}></ProductDetails>):null)
                                })
                            }
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="section-title mb-4">
                                <h4>Top Selling Products</h4>
                            </div>
                            {/*{Array(3).fill(0).map(item => <ProductDetails/>)}*/}
                            {
                                topsell_products[0]&&topsell_products.map((product,key)=>{
                                    return ((key<3)?(<ProductDetails product={product}></ProductDetails>):null)
                                })
                            }

                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="section-title mb-4">
                                <h4>On Sale Products</h4>
                            </div>
                            {/*{Array(3).fill(0).map(item => <ProductDetails/>)}*/}
                            {
                                onsale_products[0]&&onsale_products.map((product,key)=>{
                                    return ((key<3)?(<ProductDetails product={product}></ProductDetails>):null)
                                })
                            }
                        </div>
                        <div className='col-lg-3 col-sm-6'>
                            <div className="product-default inner-quickview inner-icon center-details count-down">
                                <h2 className="product-name">Flash Deals</h2>
                                <figure>
                                    <a href="product">
                                        <img src={`${img_prefix}images/products/product-deal.jpg`}/>
                                    </a>
                                    <div className="label-group">
                                        <span className="product-label label-primary">SALE</span>
                                        <span className="product-label label-dark">- 90%</span>
                                    </div>
                                </figure>
                                <div className="product-details">
                                    <h2 className="product-title">
                                        <a href="/product">1080p Wifi IP Camera</a>
                                    </h2>
                                    <div className="ratings-container">
                                        <div className="product-ratings">
                                            <span className="ratings" style={{width: '100%'}}></span>
                                            <span className="tooltiptext tooltip-top"></span>
                                        </div>
                                    </div>
                                    <div className="price-box">
                                        <span className="old-price">₦59.00</span>
                                        <span className="product-price">₦49.00</span>
                                    </div>
                                </div>
                                <div className="count-down-panel">
                                    <h4>OFFER ENDS IN:
                                        <span className="countdown" data-plugin-countdown
                                              data-plugin-options="{'date': '2020/06/10 12:00:00', 'numberClass': 'font-weight-extra-bold'}"></span>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>)
    }
}

export default TopProducts;


