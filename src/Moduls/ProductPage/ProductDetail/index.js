import React, {Component} from "react";
import {addToCart, fetchHomeProduct, addToListProduct} from "../../../redux/product/action";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import AddCartModal from "../../../components/AddCartModal";
import {InputNumber} from "antd";
import Select, { NonceProvider } from 'react-select';
import {selectListName} from "../../../redux/product/action"
import './style.scss';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
class ProductDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show_modal:false,
            countries:[],
            selectedValue:'',
            orderAmount:0
        }
    }
    componentDidMount() {
        this.setState({
            countries: this.props.order_category_list
        })
    }
    showDialog = (flag)=>{
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

    inputAmount = (value) =>{
        this.setState({
            orderAmount:value
        })
    }
    render() {
        let {product} = this.props
        let {show_modal,orderAmount}=this.state
        const {countries} = this.state
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
        let status={"listStatus":"none","quantity":orderAmount}
        return (
            <div className="col-lg-5 col-md-6">
                {
                    show_modal&&<AddCartModal visible={show_modal} product={product} continue={()=>{
                        this.showDialog(false)
                    }
                    }
                    view = {()=> this.props.history.push('/checkout-shipping')

                    }
                    ></AddCartModal>
                }
                <div className="product-single-details">
                    <p></p>
                    <h1 className="product-title">{product['title']}</h1>

                    <div className="ratings-container">
                        <div className="product-ratings">
                            <span className="ratings" style={{width:'60%'}}></span>
                        </div>

                        <a href="#" className="rating-link">( 6 Reviews )</a>

                    </div>
                    <div product-single-share>
                        <p> <label>By</label>  <a className='vendor-link'>the Amazons</a></p>
                    </div>
                    <div className="price-box">
                        <span className="old-price">₦{product['cost_price']}</span>
                        <span className="product-price">₦{product['sales_price']}</span>
                    </div>
                    <div className="product-desc">
                        <p>{product['description']}</p>
                    </div>

                    <div className="product-filters-container">
                        <div className="product-single-filter">
                            <label>Colors:</label>
                            <ul className="config-swatch-list">
                                <li className="active">
                                    <a href="#" style={{backgroundColor: '#6085a5'}}></a>
                                </li>
                                <li>
                                    <a href="#" style={{backgroundColor: '#ab6e6e'}}></a>
                                </li>
                                <li>
                                    <a href="#" style={{backgroundColor: '#b19970'}}></a>
                                </li>
                                <li>
                                    <a href="#" style={{backgroundColor: '#11426b'}}></a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="product-single-share">
                        {
                            (parseInt(product.stock)>10)?<label style={{color:'blue'}}>In Stock: &nbsp;{product.stock}</label>
                                :<label style={{color:'red'}}>In Stock: &nbsp;{product.stock}</label>
                        }
                    </div>

                    <div className="product-action product-all-icons">
                        <div className="product-single-qty">
                            <InputNumber size={'large'} min={1} max={product.stock} defaultValue={1} onChange={this.inputAmount} />
                        </div>
                        <a className="paction add-cart" title="Add to Cart" onClick={
                            (e)=>{
                                e.preventDefault();
                                e.stopPropagation();
                                this.props.addToCart(status)
                                this.showDialog(true)
                                this.setState({orderAmount:1})                                                           
                            }
                        }>
                            <span>Add to Cart</span>
                        </a>
                        {/* <a href="#" className="paction add-wishlist" title="Add to Wishlist">
                            <span>Add to Wishlist</span>
                        </a>
                        <a href="#" className="paction add-compare" title="Add to Compare">
                            <span>Add to Compare</span>
                        </a> */}
                        {
                            countries.length==1? <a className="add-list-creat" title="Create to List" onClick={
                                (e)=>{
                                    this.notifyList()                                                           
                                }
                            }>
                                <span>ADD TO LIST</span>
                            </a>:<select className="pagedetail-selectlist" id="selectList" onChange={this.handleChange.bind(this)}>{countriesList}</select>
                        }                        
                    </div>
                    <div className="product-single-share">
                        <label>Share:</label>
                        <div className="addthis_inline_share_toolbox"></div>
                    </div>                                      
                </div>
                <ToastContainer />
            </div>
        );
    }
}
const mapStateToProps = ({product})=>{
    return{
        selected_product : product.selected_product,
        order_category_list: product.order_category_list,
    }
}

const mapDispatchToProps = (dispatch) => ({
    addToCart:(quantity)=>{dispatch(addToCart(quantity))},
    addToListProduct: (listproduct)=>{dispatch(addToListProduct(listproduct))},
    selectListName: (selectlist)=>{dispatch(selectListName(selectlist))}}
);

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProductDetail))
