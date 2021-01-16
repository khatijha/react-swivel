import React from 'react';
import { connect } from 'react-redux';

import ApiConfig from '../../../config/ApiConfig';
import {addToCart, fetchHomeProduct, removeFromCart, updateSearchValue_tc, allCategory} from "../../../redux/product/action";
import {withRouter, Link} from "react-router-dom";
import * as api from "../../../Api/UserApi";
import * as setting from "../../../redux/settings/action";
import {logout} from "../../../redux/auth/action";
import { Menu, Dropdown, Icon, Button } from 'antd';
import { Input, Select} from 'antd';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import 'antd/dist/antd.css';
import "./style.scss";
import TextInput from 'react-autocomplete-input';
import 'react-autocomplete-input/dist/bundle.css';
import InputBase from '@material-ui/core/InputBase';
import { generateShowHourMinuteSecond } from 'antd/lib/time-picker';
import { withStyles, withTheme } from '@material-ui/core/styles';
import { AutoComplete } from 'antd';
// import searchComplete from './searchComplete';

const { SubMenu } = Menu;
/*--------------------------------------------------------------------------------*/
/* Import images which are need for the HEADER                                    */
/*--------------------------------------------------------------------------------*/
const styles = theme => ({

	container: {
	  display: 'flex',
	  flexWrap: 'wrap',
	},

	textField: {
	  marginLeft: theme.spacing.unit,
	  marginRight: theme.spacing.unit,
	  width: 200,
	},
  
	cssLabel: {
	  color : 'green'
	},
  
	cssOutlinedInput: {
	  '&$cssFocused $notchedOutline': {
		borderColor: `transparent !important`,
	  }
	},
  
	cssFocused: {
	  backgroundColor: 'rgba(255, 0, 0, 0.18)'
	},
  
	notchedOutline: {
	  borderWidth: '0px',
	  borderColor: 'transparent !important'
	},
  
  });

class Header extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isOpen: false,
			inputSearchVal: '',
			isLocal: process.env.NODE_ENV !== 'production',
			theposition:0,
			inputValue: '',
			selectedCategory: 0,
			first_categories: [],
			second_categories: [],
			third_categories: [],	
			searchInputOption: [],
			dataSourceOrigin: ['apple','camera','watch','sony','hd','phone','toy'],
			dataSource: [],
			
		};
	}
	onSelect=(value) => {
		 this.setState({inputValue: value})
	  }
	handleSearch = (value) => {
		let tmp_dataSource = []
		var dataSource = this.state.dataSourceOrigin
		for(var i=0;i<dataSource.length;i++){
			if(dataSource[i].includes(value))
			tmp_dataSource.push(dataSource[i])
		}
		this.setState({
			dataSource:tmp_dataSource,
		})
		this.setState({inputValue: value})
		// this.setState({
		//   dataSource: !value ? [] : [
		// 	value,
		// 	value + value,
		// 	value + value + value,
		//   ],
		// });
	  }
	category_divide(category){
		let all_category = category

		let total_number= all_category.length
		let first_number = Math.ceil(total_number/3)
		let second_number = first_number
		let third_number = total_number-first_number-second_number
		let first_categories = []
		let second_categories = []
		let third_categories = []
		for (var i=0; i<first_number; i++)
		{
			first_categories.push(all_category[i])
			second_categories.push(all_category[i+first_number])
			if (i<third_number){
				third_categories.push(all_category[i+first_number+second_number])
			}
		}

	}
	componentDidMount() {
		window.addEventListener('scroll', this.listenToScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.listenToScroll)
	}

	listenToScroll = () => {
		const winScroll =
			document.body.scrollTop || document.documentElement.scrollTop
		const height =
			document.documentElement.scrollHeight -
			document.documentElement.clientHeight
		const scrolled = winScroll / height
		this.setState({
			theposition: winScroll,
		})
	}
	SearchingText = (evt) => {
		this.setState({
			inputValue: evt.target.value
		});
	}
	Searching (){
		let e = document.getElementById("cat");
		let value = e.options[e.selectedIndex].value;

		if (value.length==0)
			value=0;
		this.setState({
			selectedCategory: value
		});

		let searchValue={"text":this.state.inputValue,"category":value}
		this.props.updateSearchValue_tc(searchValue);
		//this.setState({inputValue:''})
		this.props.history.push('/category')
	}
	Searching_nav (item){

		let value=item.id
		if (value.length==0)
			value=0;
		this.setState({
			selectedCategory: value
		});

		let searchValue={"text":this.state.inputValue,"category":value}
		this.props.updateSearchValue_tc(searchValue);
		this.props.history.push('/category')
	}
	

	render() {
		const { classes } = this.props;
		const { dataSource } = this.state;

		const menu = (
			<span>
				{
					this.props.is_authenticated
					?
						<Menu>
							<SubMenu title="Profile">
								<Menu.Item><Link to="/profile">Edit Profile</Link></Menu.Item>
								<Menu.Item><Link to="/address">Address(es)</Link></Menu.Item>
							</SubMenu>
							<Menu.Item key="1">
								<Link to="/order">My Orders</Link>
							</Menu.Item>
							<SubMenu title="My Lists">
								<Menu.Item><Link to="/addlist">Add List</Link></Menu.Item>
								<Menu.Item><Link to="/addlistscreated">Lists</Link></Menu.Item>
							</SubMenu>
							<SubMenu title="Memberships/Subscriptions">
								<Menu.Item><Link to="/payment">Payment Options</Link></Menu.Item>
								<Menu.Item><Link to="/subscriptions">Subscriptions</Link></Menu.Item>
							</SubMenu>
							<SubMenu title="Security">
								<Menu.Item><Link to="/updatelogin">Update Login Details</Link></Menu.Item>
								<Menu.Item><Link to="/updatesecurity">Update Security Questions</Link></Menu.Item>
							</SubMenu>
							<SubMenu title="Devices">
								<Menu.Item><Link to="/device">Device Management</Link></Menu.Item>
							</SubMenu>
							<Menu.Divider />
							<Menu.Item key="3">
								<a href="#" onClick={()=>{this.props.signout()}}>Sign Out</a>
							</Menu.Item>
						</Menu>
						:
						<Menu>
							<Menu.Item key="0">
								<Link to="account">Sign In</Link>
							</Menu.Item>
							<Menu.Item key="1">
								<Link to="account">Sign Up</Link>
							</Menu.Item>
						</Menu>
				}
			</span>
		);
		const { isLocal } = this.state;
		let {cart} = this.props;
		let calcTotal = ()=>{
			let total = 0;
			for(let i = 0; i<cart.length; i++){
				total += cart[i].quantity*cart[i]["product"]["sales_price"]
			}
			return total.toFixed(2)
		}
		let cartItem = (item) =>{
			return (
				<div className="product">
					<div className="product-details">
						<h4 className="product-title">
							<a href="/product">{item.product['short_name']}</a>
						</h4>
						<span className="cart-product-info">
							<span className="cart-product-qty">{item.quantity}</span>
							x ₦{item.product['sales_price']}
						</span>
					</div>
					<figure className="product-image-container">
						<a className="product-image">
							<img src={item.product.image_urls[0]} style={{width:"100%"}}></img>
						</a>
						<a href="" className="btn-remove" title="Remove Product"
							onClick={(e)=>{
								this.props.removeFromCart(item.id)
								e.stopPropagation();
								e.preventDefault();
							}}
						>
							<i className="icon-retweet"></i>
						</a>
					</figure>
				</div>
			)
		}
		let optionItem = (item,index) =>{

			if (item.parent==0)
				return <option value={item.id} style={{fontWeight: "bold"}}>{item.title}</option>
			return <option value={item.id}>{item.title}</option>
		}	
		let ListItem = (item,index) => {

			return (
			<div>
				<li style={{fontWeight: "bold"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>
				<ul className="cat-list">
					{
						this.props.all_category.map((itembb,key) =>{

							if(itembb.parent == item.id)
						return (<li style={{paddingLeft:"15px"}}><a onClick = {(e)=>this.Searching_nav(itembb)}>{itembb.title}</a></li>)
						})
					}
				</ul>
			</div>
			)
		}	
		
		return (
			(this.state.theposition<210)?
				<header className="header">
				<div className="header-top">
					<div className="container">
						<div className="header-left header-dropdowns">
							<div className="header-dropdown">
								<a href="#">USD</a>
								<div className="header-menu">
									<ul>
										<li><a href="#">NGN</a></li>
										<li><a href="#">USD</a></li>
									</ul>
								</div>
							</div>
							<div className="header-dropdown">
								<a href="#">ENGLISH</a>
								<div className="header-menu">
									<ul>
										<li><a href="#">ENGLISH</a></li>
										<li><a href="#">FRENCH</a></li>
									</ul>
								</div>
							</div>
						</div>
						<div className="header-right">
							<a className="welcome-msg"
							   onClick={()=>{
							   	window.location.replace('https://vendor.swivel.com.ng/')
							   }}
							>Vendor </a>

							<div className="header-dropdown dropdown-expanded">
								<a href="#">Links</a>
								<div className="header-menu">
									<ul>
										<li><a href="" onClick={(e)=>{
											this.props.history.push('/myaccount')
											e.preventDefault()
											e.stopPropagation()
										}}>Account </a></li>
										<li><a href="#">DAILY DEAL</a></li>
										<li><a href="#">MY WISHLIST </a></li>
										<li><a href="blog.html">BLOG</a></li>
										<li><a href="contact.html">Contact</a></li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-middle">
					<div className="container">
						<div className="header-left">
							<button className="mobile-menu-toggler" type="button">
								<i className="icon-menu"></i>
							</button>
							<a href="index.html" className="logo">
								<img src={"/resources/images/Logo_PNG.png"} style={{height: '50px'}} alt="Swivel"/>
							</a>
						</div>

						<div className="header-center">
							<div className="header-search">
									<div className="header-search-wrapper show">
									
										<AutoComplete
											className="form-control certain-category-search"
											dropdownClassName="certain-category-search-dropdown"											
											dataSource={dataSource}
											style={{ width: 300,inlineSize:300,paddingTop:10}}
											onSelect={this.onSelect}
											onSearch={this.handleSearch}
											placeholder="I'm searching for..."
										/>																										
										{/* <input type="search" className="form-control" name="q" id="q" placeholder="I'm searching for..."
													 required/> */}
										<div className="select-custom">
											<select id="cat" name="cat">
											<option value="0" style={{fontWeight: "bold"}}>All Categories</option>
												{this.props.all_category.map((item,index) => {
													return optionItem(item,index) 
												})}
											</select>
										</div>
									</div>
							</div>
							<Button type='primary' className="searchicon-button" onClick={()=>{this.Searching()}}><i className="icon-magnifier"></i></Button>
						</div>
						<div className="header-right">
							<div className="dropdown cart-dropdown">
								<a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
									 aria-expanded="false" data-display="static">
									<i className="fa fa-shopping-cart" style={{color:'white', fontSize:'22px'}}></i>
									<span className="cart-count">{cart.length}</span>
								</a>
								<div className="dropdown-menu">
									<div className="dropdownmenu-wrapper">
										<div className="dropdown-cart-header">
											<span>{cart.length} Items</span>

											<a onClick={(e)=>{
												this.props.history.push('/cart')
												e.stopPropagation()
												e.preventDefault();

											}} style={{cursor:"pointer", display:"flex"}}>View Cart</a>
										</div>
										<div className="dropdown-cart-products">
											{
												cart.map(item=>{
													return cartItem(item)
												})
											}
										</div>
										<div className="dropdown-cart-total">
											<span>Total</span>

											<span className="cart-total-price">₦{calcTotal()}</span>
										</div>
										<div className="dropdown-cart-action">
											<a href="" className="btn btn-block"
											   onClick={(e)=>{
												e.preventDefault();
												e.stopPropagation();
												this.props.history.push('/checkout-shipping')
												}}
											>Checkout</a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="header-bottom sticky-header">
					<div className="container">
						<nav className="main-nav">
							<ul className="menu sf-arrows">
								<li className="active">
									<a href=""
									   onClick={(e)=>{
										this.props.history.push('/')
										e.stopPropagation()
										e.preventDefault()
									   }}
									>Home</a>
								</li>
								<li>
									<a onClick={(e)=>this.props.history.push('/category')} className="sf-with-ul">Categories</a>
									<div className="megamenu megamenu-fixed-width">
										<div className="row">
											<div className="col-11">
												<div className="row">
													<div className="col-lg-4">														
														{this.props.first_categories.map((item,index) => {
															if (item.parent == 0)
																return (<li style={{fontWeight: "bold", color:"#2962ff"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>) 
															else{
																return (<li style={{paddingLeft:"15px"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>)
															}
														})}
													</div>
													<div className="col-lg-4">
														{this.props.second_categories.map((item,index) => {
															if (item.parent == 0)
																return (<li style={{fontWeight: "bold", color:"#2962ff"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>) 
															else{
																return (<li style={{paddingLeft:"15px"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>)
															}
														})}
													</div>
													<div className="col-lg-4">
														{this.props.third_categories.map((item,index) => {
															if (item.parent == 0)
																return (<li style={{fontWeight: "bold", color:"#2962ff"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>) 
															else{
																return (<li style={{paddingLeft:"15px"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>)
															}
														})}														
													</div>
												</div>
											</div>											
										</div>
									</div>
								</li>
								<li className="">
									<a href="" className="">Deals</a>
								</li>

								<li className="float-right">
									<Dropdown overlay={menu} overlayStyle={{width: '250px'}} trigger={['click']}>
										<a className="ant-dropdown-link nav-myaccount" href="#">
											Account
										</a>
									</Dropdown>									
								</li>
								<li className="float-right"><a href="#" onClick={()=>{this.props.history.push('/order')}}>Orders</a></li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
			:
				<header className="header-second">
					<div className="header-bottom sticky-header">
						<div className="container">
							<nav className="main-nav">
								<ul className="menu sf-arrows">
									<li className="active">
											<img src={"/resources/images/Logo_PNG_black.png"} style={{height: '30px'}} alt="Swivel"/>
									</li>
									<li className="active">
										<a href="/"
										   onClick={(e)=>{
											   this.props.history.push('/')
											   e.stopPropagation()
											   e.preventDefault()
										   }}
										>Home</a>
									</li>
									<li>
										<a onClick = {(e)=>this.props.history.push('/category')} className="sf-with-ul">Categories</a>
										<div className="megamenu megamenu-fixed-width">
											<div className="row">
												<div className="col-11">
													<div className="row">
														<div className="col-lg-4">															
															{this.props.first_categories.map((item,index) => {
																if (item.parent == 0)
																	return (<li style={{fontWeight: "bold", color:"#2962ff"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>) 
																else{
																	return (<li style={{paddingLeft:"15px"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>)
																}
															})}															
														</div>
														<div className="col-lg-4">															
															{this.props.second_categories.map((item,index) => {
																if (item.parent == 0)
																	return (<li style={{fontWeight: "bold", color:"#2962ff"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>) 
																else{
																	return (<li style={{paddingLeft:"15px"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>)
																}
															})}															
														</div>
														<div className="col-lg-4">															
															{this.props.third_categories.map((item,index) => {
																if (item.parent == 0)
																	return (<li style={{fontWeight: "bold", color:"#2962ff"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>) 
																else{
																	return (<li style={{paddingLeft:"15px"}}><a onClick = {(e)=>this.Searching_nav(item)}>{item.title}</a></li>)
																}
															})}															
														</div>
													</div>
												</div>
											</div>
										</div>
									</li>
									<li className="">
										<a href="" className="">Deals</a>
										</li>

									<li className=""><a href="#" onClick={()=>{this.props.history.push('/order')}}>Orders</a></li>
									<li className="">
										<Dropdown overlay={menu} overlayStyle={{width: '250px'}} trigger={['click']}>
											<a className="ant-dropdown-link nav-myaccount" href="#">
												My Account
											</a>
									</Dropdown>
									</li>
									<li className="float-right">
										<div className="dropdown cart-dropdown d-block">
											<a href="#" className="dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true"
											   aria-expanded="false" data-display="static">
												<i className="fa fa-shopping-cart" style={{color:'black', fontSize:'22px'}}></i>
												<span className="cart-count">{cart.length}</span>
											</a>
											<div className="dropdown-menu">
												<div className="dropdownmenu-wrapper">
													<div className="dropdown-cart-header">
														<span>{cart.length} Items</span>
														<a onClick={(e)=>{
															this.props.history.push('/cart')
															e.stopPropagation()
															e.preventDefault();
														}} style={{cursor:"pointer", display:"flex"}}>View Cart</a>
													</div>
													<div className="dropdown-cart-products">
														{
															cart.map(item=>{
																return cartItem(item)
															})
														}
													</div>
													<div className="dropdown-cart-total">
														<span>Total</span>
														<span className="cart-total-price">₦{calcTotal()}</span>
													</div>
													<div className="dropdown-cart-action">
														<a href="" className="btn btn-block"
														   onClick={(e)=>{
															   e.preventDefault();
															   e.stopPropagation();
															   this.props.history.push('/checkout-shipping')
														   }}
														>Checkout</a>
													</div>
												</div>
											</div>
										</div>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
		);
	}
}
const mapStateToProps = ({product, auth})=>{
	return{
		cart : product.cart,
		is_authenticated: auth.isAuthenticated,
		searchValue: product.searchValue,
		all_category: product.all_category,
		first_categories: product.first_categories,
		second_categories: product.second_categories,
		third_categories: product.third_categories
	}
}
const mapDispatchToProps = (dispatch) => ({
	getCategory: (values) => api.getCategory(values),
	removeFromCart: (id) => dispatch(removeFromCart(id)),
	signout: ()=>dispatch(logout()),
	updateSearchValue_tc:(value) => dispatch(updateSearchValue_tc(value)),
});

export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(withRouter(Header)))
