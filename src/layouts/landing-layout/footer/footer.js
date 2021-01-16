import React from 'react';


class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <a href="#" className="widget-newsletter-title">Sign Up to Newsletter</a>
              </div>
              <div className="col-lg-4">
                <p className="widget-newsletter-content">Get all the latest information on Events, Sales and Offers.<br/>
                  <span className="widget-newsletter-content">Receive ₦10 coupon for first shopping.</span>
                </p>
              </div>
              <div className="col-lg-5">
                <form action="#">
                  <div className="footer-submit-wrapper">
                    <input type="email" className="form-control" placeholder="Enter your Email address" required/>
                      <button type="submit" className="btn">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-middle   ">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <a href="index.html">
                  <img src="https://swivel.com.ng/resources/images/Logo_PNG_black.png" width='200px' alt="Porto Logo" className="mt-2"/>
                </a>
                <div className="row">
                  <div className="col-sm-6 col-xl-4">
                    <div className="contact-widget phone">
                      <div style={{display: 'inline-block'}}>
                        <h4 className="widget-title">call us now</h4>
                        <a href="#">+234 70111111</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-xl-4">
                    <div className="contact-widget email">
                      <h4 className="widget-title" style={{marginBottom : '.5rem'}}>e-mail address</h4>
                      <a href="">support@swivel.com.ng</a>
                    </div>
                  </div>
                  <div className="col-xl-3">
                    <div className="contact-widget follow">
                      <h4 className="widget-title">follow us</h4>
                      <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="#" className="social-icon" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="#" className="social-icon" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-6 col-md-6">
                <div className="row">
                  <div className="col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">Categories</h4>
                      <ul className="links">
                        <li><a href="#">Fashion</a></li>
                        <li><a href="#">Electronics</a></li>
                        <li><a href="#">Gaming</a></li>
                        <li><a href="#">Beauty</a></li>
                        <li><a href="#">Music</a></li>
                        <li><a href="#">Kids</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">About</h4>
                      <ul className="links">
                        <li><a href="about.html">About Us</a></li>
                        <li><a href="contact.html">Contact Us</a></li>
                        <li><a href="#">All Collections</a></li>
                        <li><a href="#">Privacy policy</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4">
                    <div className="widget">
                      <h4 className="widget-title">Customer Care</h4>
                      <ul className="links">
                        <li><a href="my-account.html">My Account</a></li>
                        <li><a href="">Wishlist</a></li>
                        <li><a href="">Shopping Cart</a></li>
                        <li><a href="#">Terms & Conditions</a></li>
                        <li><a href="#">FAQs</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">Swivel eCommerce. &copy;  2019 - 2020. All Rights Reserved</p>
            <img src="resources/images/payments_long.png" width="180px" style={{maxHeight: '24px'}}/>
          </div>
        </div>
      </footer>
    );
  }
}
export default Footer;
