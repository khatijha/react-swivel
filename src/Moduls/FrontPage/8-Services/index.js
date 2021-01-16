import React, {Component} from 'react'

class Services extends Component {
    render() {
        return (
            <section className="bg-grey">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4">
                              <div className="info-box">
                                  <i className="icon-shipping"></i>

                                  <div className="info-box-content">
                                      <h4 className="info-title">FREE SHIPPING & RETURNS</h4>
                                      <h4 className="info-subtitle">All Orders Over $99</h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                          magna, et dapibus.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="info-box">
                                  <i className="icon-money"></i>

                                  <div className="info-box-content">
                                      <h4 className="info-title">MONEY BACK GUARANTEE</h4>
                                      <h4 className="info-subtitle">Safe & Fast</h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                          magna, et dapibus.</p>
                                  </div>
                              </div>
                          </div>
                          <div className="col-md-4">
                              <div className="info-box">
                                  <i className="icon-support"></i>

                                  <div className="info-box-content">
                                      <h4 className="info-title">ONLINE SUPPORT</h4>
                                      <h4 className="info-subtitle">Need Assistence?</h4>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec vestibulum
                                          magna, et dapibus.</p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>
        )
    }
}

export default Services;


