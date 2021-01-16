import React, {Component} from 'react'

class SpecialOffers extends Component {
    render() {
        let img_prefix = 'https://portotheme.com/html/porto_ecommerce/demo_22/assets/'
        return (
            <section className="home-products-intro bg-grey" id="specialOffer" style={{padding: '4.5rem 0 2rem'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4">
                            <div className="section-title">
                                <h2>Deals</h2>
                            </div>
                            <div className="banner-product mt-3"
                                 style={{backgroundImage: `url('${img_prefix}images/products/product-special.jpg')`}}>
                                <div className="banner-content">
                                    <h2>Elec Deals</h2>
                                    <h4><span className="old-price">₦59.00</span><span className="price">₦49.00</span>
                                    </h4>
                                    <button className="btn btn-primary">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-8">
                            <div className="home-product-tabs">
                                <ul className="nav nav-tabs mb-3" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link active" id="best-sellers-tab" data-toggle="tab"
                                           href="#best-sellers" role="tab" aria-controls="best-sellers"
                                           aria-selected="true">Best Sellers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="audio-speakers-tab" data-toggle="tab"
                                           href="#audio-speakers" role="tab" aria-controls="audio-speakers"
                                           aria-selected="false">Audio Speakers</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="cameras-tab" data-toggle="tab" href="#cameras"
                                           role="tab" aria-controls="cameras" aria-selected="false">Cameras</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="lamps-tab" data-toggle="tab" href="#lamps"
                                           role="tab" aria-controls="lamps" aria-selected="false">Lamps</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="computer-tab" data-toggle="tab" href="#computer"
                                           role="tab" aria-controls="computer" aria-selected="false">Computer</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="mobile-phones-tab" data-toggle="tab"
                                           href="#mobile-phones" role="tab" aria-controls="mobile-phones"
                                           aria-selected="false">Mobile Phones</a>
                                    </li>
                                </ul>
                                <div className="tab-content">
                                    <div className="tab-pane fade show active" id="best-sellers" role="tabpanel"
                                         aria-labelledby="best-sellers-tab">
                                        <div className="row row-sm">
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-1.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-4.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-7.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-10.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="audio-speakers" role="tabpanel"
                                         aria-labelledby="laudio-speakers-tab">
                                        <div className="row row-sm">
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-2.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-5.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-8.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-11.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="cameras" role="tabpanel"
                                         aria-labelledby="cameras-tab">
                                        <div className="row row-sm">
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src="/resources/images/products/product-3.jpg"/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-6.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-9.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-12.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="lamps" role="tabpanel"
                                         aria-labelledby="lamps-tab">
                                        <div className="row row-sm">
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-1.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-2.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-3.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-4.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="computer" role="tabpanel"
                                         aria-labelledby="computer-tab">
                                        <div className="row row-sm">
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-5.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-6.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-7.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-8.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-pane fade" id="mobile-phones" role="tabpanel"
                                         aria-labelledby="mobile-phones-tab">
                                        <div className="row row-sm">
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-9.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-10.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-11.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-6 col-md-3">
                                                <div className="product-default inner-quickview inner-icon">
                                                    <figure>
                                                        <a href="product.html">
                                                            <img src={`${img_prefix}images/products/product-12.jpg`}/>
                                                        </a>
                                                    </figure>
                                                    <div className="product-details">
                                                        <div className="category-wrap">
                                                            <div className="category-list">
                                                                <a href="category.html"
                                                                   className="product-category">category</a>
                                                            </div>
                                                            <a href="#" className="btn-icon-wish"><i
                                                                className="icon-heart"></i></a>
                                                        </div>
                                                        <h2 className="product-title">
                                                            <a href="product.html">Product Short Name</a>
                                                        </h2>
                                                        <div className="price-box">
                                                            <span className="product-price">₦49.00</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default SpecialOffers;


