import React, {Component} from "react";
import ProductSlider from '../ProductSlider'
class ProductGallery extends Component {
    componentDidMount() {
        console.log('-------------ProductGallery page did mount---------------')

    }

    render() {
        let product = this.props.product
        let result = (
            <div className='fluid react-slick'>
                <div className='fluid__image-container'>
                    <ProductSlider rimProps = {{
                        isHintEnabled: true,
                        shouldHideHintAfterFirstActivation: false,
                        enlargedImagePosition: 'over'
                    }}
                     product = {product}
                    />
                </div>

            </div>
        )
        return result
        return (
            <div className="col-lg-7 col-md-6 product-single-gallery">
                <div className="product-slider-container product-item">
                    <div className="product-single-carousel owl-carousel owl-theme">
                        <div className="product-item">
                            <img className="product-single-image"
                                 src={'resources/images/products/zoom/product-1.jpg'}
                                 data-zoom-image={'resources/images/products/zoom/product-1-big.jpg'}/>
                        </div>
                        <div className="product-item">
                            <img className="product-single-image"
                                 src={"resources/images/products/zoom/product-2.jpg"}
                                 data-zoom-image={"resources/images/products/zoom/product-2-big.jpg"}/>
                        </div>
                        <div className="product-item">
                            <img className="product-single-image"
                                 src={"resources/images/products/zoom/product-3.jpg"}
                                 data-zoom-image="resources/images/products/zoom/product-3-big.jpg"/>
                        </div>
                        <div className="product-item">
                            <img className="product-single-image"
                                 src={"resources/images/products/zoom/product-4.jpg"}
                                 data-zoom-image="resources/images/products/zoom/product-4-big.jpg"/>
                        </div>
                    </div>
                    <span className="prod-full-screen">
                                            <i className="icon-plus"></i>
                                        </span>
                </div>
                <div className="prod-thumbnail row owl-dots" id='carousel-custom-dots'>
                    <div className="col-3 owl-dot">
                        <img src="resources/images/products/zoom/product-1.jpg"/>
                    </div>
                    <div className="col-3 owl-dot">
                        <img src="resources/images/products/zoom/product-2.jpg"/>
                    </div>
                    <div className="col-3 owl-dot">
                        <img src="resources/images/products/zoom/product-3.jpg"/>
                    </div>
                    <div className="col-3 owl-dot">
                        <img src="resources/images/products/zoom/product-4.jpg"/>
                    </div>
                </div>
            </div>
        );

    }
}

export default ProductGallery