import React, {Component} from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import ReactSlick from 'react-slick';
import ReactImageMagnify from "react-image-magnify";

class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0
        }
    }
    render() {
        let {product} = this.props
        let dataSource = [
            '/resources/images/slider/slide1(1).jpg',
            '/resources/images/slider/slide2(1).jpg',
            '/resources/images/slider/slide3(1).jpg'
        ]
        let titles = [
            'Drones', 'Phones','Accessories'
        ]
        let {selected} = this.state;
        // return (
        //     <div className="home-top-container">
        //         <div className="home-slider owl-carousel owl-theme owl-carousel-lazy">
        //             <div className="home-slide" style={{backgroundImage:`url('${product['image_urls'][0]}')`}}>
        //                 <img className="owl-lazy" src={"/resources/images/lazy.png"} alt="slider image"/>
        //                 <div className="home-slide-content container">
        //                     <div>
        //                         <h2 className="home-slide-subtitle">start the revolution</h2>
        //                         <h1 className="home-slide-title">
        //                             {product['title']}
        //                         </h1>
        //                         <h2 className="home-slide-foot">from <span>${product['sales_price']}</span></h2>
        //                         <button className="btn btn-dark btn-buy">BUY NOW</button>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //             <div className="home-slide" style={{backgroundImage: `url('/resources/images/slider/slide2.jpg')`}}>
        //                 <img className="owl-lazy" src="/resources/images/lazy.png" alt="slider image"/>
        //                 <div className="home-slide-content container">
        //                     <div>
        //                         <h2 className="home-slide-subtitle">amazing deals</h2>
        //                         <h1 className="home-slide-title">
        //                             smartphone
        //                         </h1>
        //                         <h2 className="home-slide-foot">from <span>$199</span></h2>
        //                         <button className="btn btn-dark btn-buy">BUY NOW</button>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //             <div className="home-slide" style={{backgroundImage: `url('/resources/images/slider/slide3.jpg')`}}>
        //                 <img className="owl-lazy" src="/resources/images/lazy.png" alt="slider image"/>
        //                 <div className="home-slide-content container">
        //                     <div>
        //                         <h2 className="home-slide-subtitle">best price of the year</h2>
        //                         <h1 className="home-slide-title">
        //                             top accessories
        //                         </h1>
        //                         <h2 className="home-slide-foot">from <span>$19</span></h2>
        //                         <button className="btn btn-dark btn-buy">BUY NOW</button>
        //                     </div>
        //                 </div>
        //             </div>
        //
        //         </div>
        //         <div className="home-slider-sidebar">
        //             <ul>
        //                 <li className="active">Drones</li>
        //                 <li>Phones</li>
        //                 <li>Accessories</li>
        //             </ul>
        //         </div>
        //     </div>
        // )
        return(
            <div className='position-relative front-slider'>
                <ReactSlick
                    {...{
                        dots: true,
                        infinite: true,
                        speed: 500,
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        autoplay:true,
                        fade:true,
                        autoplaySpeed:5000,
                        dotsClass: "slick-dots home-slider-legend-container slick-thumb",
                        appendDots: dots => (
                            <div>
                                <ul style={{ margin: "0px" }}> {dots} </ul>
                            </div>
                        ),
                        customPaging: i => (
                            <div className='custom-dot w-100 d-flex align-items-center'>
                                <a style={{textAlign:"right",fontSize:"large", fontWeight:"600", color:"black", display:"inline", width:"70%"}}>{titles[i]} </a>
                                <div className='home-slider-bar-legend'></div>
                            </div>
                        ),

                    }}
                >
                    {dataSource.map((src, index) => (
                        <div key={index} className='position-relative'>
                            <img src={src} style={{width:"100%", zIndex:"10"}}></img>
                            <div className="home-slide-content container position-absolute "
                                 style={{zIndex:"100", top:"25%", left:"10%"}}

                            >
                                <div>
                                    <h2 className="home-slide-subtitle">best price of the year</h2>
                                    <h1 className="home-slide-title">
                                        top accessories
                                    </h1>
                                    <h2 className="home-slide-foot">from <span>₦19</span></h2>
                                    <button className="btn btn-dark btn-buy"
                                    >BUY NOW</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </ReactSlick>
            </div>
        )
    }
}

export default Slider;


