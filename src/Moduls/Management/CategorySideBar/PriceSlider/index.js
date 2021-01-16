import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import Nouislider from "nouislider-react";
import "nouislider/distribute/nouislider.css";
import "./style.scss";
import {UpdatePrice} from "../../../../redux/product/action";

class PriceSlider extends Component {
  constructor(props) {
    super(props);
    this.state = {      
      minPrice: this.props.search_values["min_price"],
      maxPrice: this.props.search_values["max_price"],
      percent: 10,
      priceValue:[this.props.search_values["min_price"],this.props.search_values["max_price"]],
    }
  }  
  onSlide = (render, handle, value, un, percent) => {
    this.setState({
      minPrice: value[0].toFixed(0),
      maxPrice: value[1].toFixed(0),
      percent: percent[0].toFixed(2),
      priceValue: [value[0].toFixed(0),value[1].toFixed(0)]
    });
  };
  render() {
    const { minPrice, maxPrice,priceValue } = this.state;
    return (
      <div className="side_price_bar">
        <Nouislider
          connect
          start={[0, 3000]}
          behaviour="tap"
          range={{
            min: [0],
            "10%": [200, 200],
            "80%": [1500, 1500],
            max: [3000]
          }}
          onSlide={this.onSlide}
        />
        <div className="row button_price">
          <div className="filterbutton">
            <button onClick={()=>{this.props.UpdatePrice(priceValue)}}>Filter</button>
          </div> 
          <div className="displayspace-price">
            Price: ₦{minPrice}  --  ₦{maxPrice}
          </div>          
        </div>
          
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  search_values: state.product.search_values,
});
const mapDispatchToProps = (dispatch) => ({
  UpdatePrice:(values)=> dispatch(UpdatePrice(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PriceSlider))