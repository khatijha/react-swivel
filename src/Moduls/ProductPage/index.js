import React, { Component } from 'react';
import './style.scss';
import ProductGallery from "./ProductGallery";
import ProductDetail from "./ProductDetail";
import ProductTabs from "./ProductTabs";
import SideBarProduct from "./SideBarProduct";
import ProductList from "./FeaturedProducts";
import * as api from "../../Api/UserApi";
import * as setting from "../../redux/settings/action";
import {fetchHomeProduct, selectProduct} from "../../redux/product/action";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

class ProductPage extends Component {
    
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        console.log("this.props.match.params:",this.props.match.params)
        let prods = null;
        if (this.props.featured_products.length == 0) {
            console.log('======== starting getHomeProducts ======== ');
            this.props.selectProduct(null);
            this.props.getHomeProducts();
        } 
    }
 
    selectProduct() {
        const { pid } = this.props.match.params;
        console.log("pid:",pid)
        let hasprod = false; // this.props.selected_product ? true: false;
        if(!hasprod) {
        
            hasprod = this.props.featured_products.some(product=>{
                console.log("=====featured_products==== product.id === pid === " + product.id + " : " +pid)
                if(product.id == pid){
                    console.log("=====featured_products==== find! ");
                    this.props.selectProduct(product)
                    return true;
                }
            })
        }
        if(!hasprod) {
            hasprod = this.props.onsale_products.some(product=>{
                console.log("=====sales_products==== product.id === pid === " + product.id + " : " +pid)
                if(product.id == pid){
                    console.log("=====onsale_products==== find! ");
                    this.props.selectProduct(product)
                    return true;
                }
            })    
        }
        if(!hasprod) {
            hasprod = this.props.topsell_products.some(product=>{
                console.log("=====topsell_products==== product.id === pid === " + product.id + " : " +pid)
                if(product.id == pid){
                    console.log("=====topsell_products==== find! ");
                    this.props.selectProduct(product)
                    return true;
                }
            })
        }           
    }

    render() {
    
        if(this.props.featured_products.length > 0 && this.props.selected_product == null ) {
           this.selectProduct(); 
        }
        if(this.props.selected_product == null) return(<div></div>);
        return(
            <div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-9'>
                                <div className='row'>
                                    <div className='col-lg-5'>
                                        <ProductGallery product={this.props.selected_product}/>
                                    </div>
                                    <ProductDetail product={this.props.selected_product}/>
                                </div>
                            <ProductTabs/>
                        </div>
                        <div className="sidebar-overlay"></div>
                        <div className="sidebar-toggle"><i className="icon-sliders"></i></div>
                        <SideBarProduct/>
                    </div>
                </div>
                <ProductList title={'Featured Products'} products={this.props.featured_products} history={this.props.history}/>
                <ProductList title={'Similar Products'} products={this.props.onsale_products} history={this.props.history}/>
                <ProductList title={'Other Items from the seller'} products={this.props.featured_products} history={this.props.history}/>
                <ProductList title={'Recently Viewed Products'} products={this.props.topsell_products} history={this.props.history}/>
            </div>
        )
    }
}
const mapStateToProps = ({product})=>{
    return{
        featured_products : product.featured_products,
        topsell_products : product.topsell_products,
        onsale_products : product.onsale_products,
        selected_product : product.selected_product
    }
}

const mapDispatchToProps = (dispatch) => ({
    setLoading: (val) => dispatch(setting.setLoading(val)),
    selectProduct:(product)=> dispatch(selectProduct(product)),
    getHomeProducts:()=> dispatch(fetchHomeProduct())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductPage))
