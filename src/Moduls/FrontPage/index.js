import React, { Component } from 'react';
import './style.scss';
import {withRouter} from "react-router-dom";
import Slider from "./1-Slider";
import FeaturedProducts from "./2-FeaturedProducts";
import Categories from "./3-Catagories";
import IntroProducts from "./4-IntroProducts";
import NewArrivals from "./5-NewArrivals";
import SpecialOffers from "./6-SpecialOffers";
import QuickProducts from "./7-QuickProducts";
import Services from "./8-Services";
import TopProducts from "./10-TopProducts";
import TopBrands from "./9-TopBrands";
import * as api from "../../Api/UserApi"
import * as setting from "../../redux/settings/action";
import {fetchHomeProduct} from "../../redux/product/action"
import {connect} from "react-redux";
import {FETCH_HOME_PRODUCT} from "../../redux/constants";
class FrontPage extends Component {
    getFeatured = () =>{
        console.log("===gettting featured products=====00======", this.props)
        this.props.setLoading(true)
        this.props.getFeaturedProducts()
            .then(resp=>{
                console.log("=============response=====11`======", resp)
                this.setState({featured_products:resp.data})
                this.props.setLoading(false)
            })
            .catch(e=>{
                this.setState({featured_products:[]})
                this.props.setLoading(false)
            })
    }
    constructor(props) {
        super(props);
        this.state = {
            featured_products:[],
            topsell_products:[],
            onsale_products:[],
            sub_domain: process.env.NODE_ENV === 'production' ? window.location.hostname.split('.')[0] : 'swivel',
        }
    }
    componentDidMount() {
        if (this.state.sub_domain !== 'swivel') {
            window.location.replace('http://swivel.com.ng');
        }
        // this.getFeatured()
        this.props.getHomeProducts();
        // this.getTopSell()
        // this.getOnSale()
    }

    render() {
        return(
          <main className="main home">

              {this.props.featured_products[0]&&<Slider product={this.props.featured_products[0]}/>}

              <FeaturedProducts products={this.props.featured_products} history={this.props.history}/>

              <Categories/>

              <IntroProducts/>

              <NewArrivals products={this.props.featured_products} history={this.props.history}/>

              <SpecialOffers/>

              <QuickProducts/>

              <Services/>

              <TopProducts history={this.props.history}
                           featured_products={this.props.featured_products}
                           topsell_products={this.props.topsell_products}
                           onsale_products={this.props.onsale_products}
              />

              <TopBrands/>

          </main>

    )
    }
}

const mapStateToProps = ({product})=>{
    return{
        featured_products : product.featured_products,
        topsell_products : product.topsell_products,
        onsale_products : product.onsale_products
    }
}

const mapDispatchToProps = (dispatch) => ({
    getFeaturedProducts: () => api.getFeatured(),
    setLoading: (val) => dispatch(setting.setLoading(val)),
    getHomeProducts:()=> dispatch(fetchHomeProduct()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FrontPage))
