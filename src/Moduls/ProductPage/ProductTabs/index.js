import React, {Component} from "react";
import styled from 'styled-components';

const DataWrapper = styled.div`
        display: flex;
        flex-direction: row;

        border: 1px solid gray;
        box-shadow: 5px 5px #ccc;
        padding: 10px;

        @media (max-width: 1200px) {  
            margin-top:20px;       
        }
        @media (min-width: 1200px) {
                margin-top:100px;       
            } 
        `;

class ProductTabs extends Component {    

    render() {
        return (
            <DataWrapper>
                <div className="product-single-tabs">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="product-tab-desc" data-toggle="tab"
                            href="#product-desc-content" role="tab" aria-controls="product-desc-content"
                            aria-selected="true">Description</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="product-tab-tags" data-toggle="tab"
                            href="#product-tags-content" role="tab" aria-controls="product-tags-content"
                            aria-selected="false">Question and Answer</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="product-tab-reviews" data-toggle="tab"
                            href="#product-reviews-content" role="tab"
                            aria-controls="product-reviews-content" aria-selected="false">Reviews</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="product-desc-content" role="tabpanel"
                            aria-labelledby="product-tab-desc">
                            <div className="product-desc-content">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                                    occaecat.</p>
                                <ul>
                                    <li><i className="icon-ok"></i>Any Product types that You want - Simple,
                                        Configurable
                                    </li>
                                    <li><i className="icon-ok"></i>Downloadable/Digital Products, Virtual
                                        Products
                                    </li>
                                    <li><i className="icon-ok"></i>Inventory Management with Backordered
                                        items
                                    </li>
                                </ul>
                                <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                    enim ad minim veniam, <br/>quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat.</p>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="product-tags-content" role="tabpanel"
                            aria-labelledby="product-tab-tags">
                            <div className="product-tags-content">
                                <form action="#">
                                    <h3>Submit your question and answer:</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control form-control-sm"
                                            required/>
                                        <input type="submit" className="btn btn-primary"
                                            value="Submit"/>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className="tab-pane fade" id="product-reviews-content" role="tabpanel"
                            aria-labelledby="product-tab-reviews">
                            <div className="product-reviews-content">
                                <div className="collateral-box">
                                    <ul>
                                        <li>Be the first to review this product</li>
                                    </ul>
                                </div>

                                <div className="add-product-review">
                                    <h3 className="text-uppercase heading-text-color font-weight-semibold">WRITE
                                        YOUR OWN REVIEW</h3>
                                    <p>How do you rate this product? *</p>

                                    <form action="#">
                                        <table className="ratings-table">
                                            <thead>
                                            <tr>
                                                <th>&nbsp;</th>
                                                <th>1 star</th>
                                                <th>2 stars</th>
                                                <th>3 stars</th>
                                                <th>4 stars</th>
                                                <th>5 stars</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td>Quality</td>
                                                <td>
                                                    <input type="radio" name="ratings[1]" id="Quality_1"
                                                        value="1" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="ratings[1]" id="Quality_2"
                                                        value="2" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="ratings[1]" id="Quality_3"
                                                        value="3" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="ratings[1]" id="Quality_4"
                                                        value="4" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="ratings[1]" id="Quality_5"
                                                        value="5" className="radio"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Value</td>
                                                <td>
                                                    <input type="radio" name="value[1]" id="Value_1"
                                                        value="1" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="value[1]" id="Value_2"
                                                        value="2" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="value[1]" id="Value_3"
                                                        value="3" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="value[1]" id="Value_4"
                                                        value="4" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="value[1]" id="Value_5"
                                                        value="5" className="radio"/>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Price</td>
                                                <td>
                                                    <input type="radio" name="price[1]" id="Price_1"
                                                        value="1" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="price[1]" id="Price_2"
                                                        value="2" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="price[1]" id="Price_3"
                                                        value="3" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="price[1]" id="Price_4"
                                                        value="4" className="radio"/>
                                                </td>
                                                <td>
                                                    <input type="radio" name="price[1]" id="Price_5"
                                                        value="5" className="radio"/>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>

                                        <div className="form-group">
                                            <label>Nickname <span className="required">*</span></label>
                                            <input type="text" className="form-control form-control-sm"
                                                required/>
                                        </div>
                                        <div className="form-group">
                                            <label>Summary of Your Review <span
                                                className="required">*</span></label>
                                            <input type="text" className="form-control form-control-sm"
                                                required/>
                                        </div>
                                        <div className="form-group mb-2">
                                            <label>Review <span className="required">*</span></label>
                                            <textarea cols="5" rows="6"
                                                    className="form-control form-control-sm"></textarea>
                                        </div>

                                        <input type="submit" className="btn btn-primary"
                                            value="Submit Review"/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DataWrapper>
            
        );
    }
}

export default ProductTabs