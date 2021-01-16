import React, {Component} from "react";
import {withRouter} from "react-router-dom";
import * as api from "../../Api/UserApi";
import * as setting from "../../redux/settings/action";
import {addToCart, selectProduct, fetchHomeProduct, selectListName, addToListProduct} from "../../redux/product/action";
import {connect} from "react-redux";
import AddCartModal from "../../components/AddCartModal";
import { NonceProvider } from "react-select";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import {InputNumber} from "antd";
import './style.scss';
class FeaturedProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_modal: false,
            countries: [],
            selectedValue: '',
            selectAmount:0,
            value:0
        }        
    }
    componentDidMount() {
        this.setState({
            countries: this.props.order_category_list,
        })
    }
    unlist_addtocart(product){
        this.props.selectProduct(product)
        let status={"listStatus":"none", "quantity":1}
        this.props.addToCart(status)
    }
    showDialog = (flag) => {
        this.setState({
            show_modal:flag
        })
    }
    
    handleChange(e) {
        this.setState({selectedValue: e.target.value});
        let listproduct={}
        listproduct={"listStatus": e.target.value,
                "product":this.props.product,
                "orderstatus":0,
                "quantity":1,
            }
        this.props.addToListProduct(listproduct);
        this.props.selectListName(e.target.value)
        this.props.history.push('/addlistscreated')    
    }
    notifyList = () => { 
        toast.info("There is no created List. Create list in Add List", {          
          position: toast.POSITION.TOP_CENTER,
          autoClose: 4000
        });
      }; 
    onChange = (value) => {
    }
    
    render() {
        let status={"listStatus":"none","quantity":1}
        let {product} = this.props
        let {categorylist} = this.props
        const {countries} = this.state
        let {show_modal} = this.state
        let countriesList = countries.length>0 && countries.map((item,i)=>{
            if(i==0){
                return(
                <option value="" selected disabled hidden>{item.inputValue}</option>
                )
            }
            return(
            <option key={i} value={item.inputValue}>{item.inputValue}</option>
            )
        },this);
        if(!product || !product.image_urls || !product.title)
            return (<></>)
        return (
            <div className="row category_style">
                {
                    show_modal&&<AddCartModal visible={show_modal} product={product} continue={()=>{
                        this.showDialog(false)
                    }
                    }
                    view = {()=> this.props.history.push('/checkout-shipping')

                    }
                    ></AddCartModal>
                }
                <div className="col-4">
                    <div className={'product-div-image'} style={{
                        backgroundImage:`url('${product.image_urls[0]}')`
                        }}>
                    </div> 
                </div>                
                <div className="col-8">
                    <div className="list_search_category">
                        {categorylist[parseInt(product.categories[0])].title}
                    </div>
                    <div className="list_search_title">
                        {product.title}
                    </div>
                    <div><p>{product.description}</p></div>
                    <div className="product-details">
                        <div className="ratings-container">
                            <div className="product-ratings">
                                <span className="ratings" style={{width: '85%'}}></span>
                                {/* <span className="tooltiptext tooltip-top">0</span> */}
                            </div>
                        </div>
                    </div>
                    
                    <div className="row list_search_price">
                        <div className="list_search_price_cost">₦{product.cost_price}</div>&nbsp;&nbsp;
                        <div className="list_search_price_sale">₦{product.sales_price}</div>
                    </div>
                    <div className="row list_search_price">
                        <span>Stock:</span>&nbsp;
                        <span>{product.stock}</span>
                    </div>
                    <div className="row">
                        <div className="product-single-qty button-padding">
                            <InputNumber min={1} max={product.stock} defaultValue={1} onChange={this.onChange} defaultValue={1} />
                        </div>
                        <div className="button-padding">
                            <a className="paction add-cart" title="Add to Cart" onClick={
                                (e)=>{
                                    e.preventDefault();
                                    e.stopPropagation();
                                    this.unlist_addtocart(product,status)
                                    this.showDialog(true)                                                           
                                }
                            }> <span>Add to Cart</span></a>
                        </div>                        
                        {countries.length==1?
                        <div className="addtolist button-padding"><a className="add-list-creat" title="Create to List" onClick={(e)=>{this.notifyList()}}><span>ADD TO LIST</span></a></div>:
                        <div><select className="pagedetail-selectlist_b" id="selectList" onChange={this.handleChange.bind(this)}>{countriesList}</select></div>
                        }                     
                    </div>
                </div> 
                <ToastContainer/>                           
            </div>
        )
    }
}

const mapStateToProps = ({product}) => {
    return {
        order_category_list: product.order_category_list,
        all_category: product.all_category
    }
}

const mapDispatchToProps = (dispatch) => ({
    selectProduct:(product)=> dispatch(selectProduct(product)),
    addToCart:(quantity)=>{dispatch(addToCart(quantity))},
    addToListProduct: (listproduct)=>{dispatch(addToListProduct(listproduct))},
    selectListName: (selectlist)=>{dispatch(selectListName(selectlist))}
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(FeaturedProductList))