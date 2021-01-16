import React, {Component} from 'react'
class IntroProducts extends Component {
    render() {
        let img_prefix = 'https://portotheme.com/html/porto_ecommerce/demo_22/assets/'
        return (
                <div className={'product-row, container'} >
                    <div className='row' >
                        <div className='col-lg-6 col-sm-12'>
                            <div className="banner-product bg-grey"
                                 style={{
                                     backgroundImage: `url('${img_prefix}images/products/product-banner1.jpg')`,
                                     backgroundPosition: '48% 10%'
                                 }}
                            >
                                <h2>ACTION <br/>CAMERAS</h2>
                                <div className="mr-5">
                                    <h4>Starting From<span className="price">₦399</span></h4>
                                    <button className="btn btn-primary">SHOP NOW</button>
                                </div>
                            </div>
                        </div>
                        <div className='col-lg-6 col-sm-12'>
                            <div className="banner-product bg-grey"
                                 style={{
                                     backgroundImage: `url('${img_prefix}images/products/product-banner2.jpg')`,
                                     backgroundPosition: '48% 10%'
                                 }}>
                                <div className="ml-5" style={{textAlign: 'right'}}>
                                    <h4>Starting From<span className="price">₦199</span></h4>
                                    <button className="btn btn-primary">SHOP NOW</button>
                                </div>
                                <h2>FOR ALL <br/>STYLES</h2>
                            </div>
                        </div>
                    </div>
                </div>

        )
    }
}

export default IntroProducts;


