import React, {Component} from 'react'

class Categories extends Component {
    render() {
        return (
            <div className="categories-container">
                  <div className="container categories-carousel owl-carousel owl-theme" data-toggle="owl"
                       data-owl-options="{
                    'loop' : false,
                    'margin': 30,
                    'nav': false,
                    'dots': true,
                    'autoHeight': true,
                    'responsive': {
                      '0': {
                        'items': 2,
                        'margin': 0
                      },
                      '576': {
                        'items': 3
                      },
                      '768': {
                        'items': 4
                      },
                      '992': {
                        'items': 5
                      },
                      '1200': {
                        'items': 6
                      }
                    }
                }">
                      <div className="category">
                          <i className="icon-category-fashion"></i>
                          <span>Fashion</span>
                      </div>
                      <div className="category">

                          <i className="icon-category-electronics"></i>
                          <span>Electronics</span>
                      </div>
                      <div className="category">
                          <i className="icon-cat-toys"></i>
                          <span>Gaming
                          </span>
                      </div>
                      <div className="category">
                          <i className="far fa-eye custom-font-icon-category"></i>
                          <span>Beauty</span>
                      </div>
                      <div className="category">
                          <i className="icon-home"></i>
                          <span>Home</span>
                      </div>
                      <div className="category">
                          <i className="fa fa-child custom-font-icon-category"></i>
                          <span>Kids</span>
                      </div>
                  </div>
              </div>
        )
    }
}

export default Categories;


