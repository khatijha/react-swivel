import React, {Component} from 'react'

class TopBrands extends Component {
    render() {
        return (
            <section className="container mt-3 mb-7" id="topBrands">
                <div className="section-title mb-5">
                    <h4>Top Brands</h4>
                </div>
                <div className="partners-carousel owl-carousel owl-theme text-center" data-toggle="owl"
                     data-owl-options="{
                    'loop' : true,
                    'nav': false,
                    'dots': true,
                    'autoHeight': true,
                    'autoplay': true,
                    'autoplayTimeout': 5000,
                    'responsive': {
                      '0': {
                        'items': 2,
                        'margin': 0
                      },
                      '480': {
                        'items': 3
                      },
                      '768': {
                        'items': 4
                      },
                      '992': {
                        'items': 5
                      }
                    }
                }">
                    <img src="/resources/images/logos/1.png" alt="logo"/>
                    <img src="/resources/images/logos/2.png" alt="logo"/>
                    <img src="/resources/images/logos/3.png" alt="logo"/>
                    <img src="/resources/images/logos/4.png" alt="logo"/>
                    <img src="/resources/images/logos/5.png" alt="logo"/>
                </div>
            </section>
        )
    }
}

export default TopBrands;


