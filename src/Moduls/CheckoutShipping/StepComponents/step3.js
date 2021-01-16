import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as api from "../../../Api/ChildrenApi";
import * as setting from "../../../redux/settings/action";
import * as auth from "../../../redux/auth/action";
import {addToOrderCart} from "../../../redux/product/action"
import {Button, Divider, Input, Radio} from "antd";

class ItemReview extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : {}
        }
    }
    componentDidMount() {
        let tmp = {};
        this.props.cart.forEach((item)=>{
            tmp[item['id']] = 1
        })
        this.setState({value:tmp})
    }

    onChange = (e, id)=>{
        alert(id)
        let old = this.state.value
        old[id] = e.target.value

        this.setState({
            value:old
        },()=>{
            console.log('=====', this.state.value)
        })
    }
    render() {
        let itemView = (item)=>{
            function total(){
                let price = parseFloat(item.product.sales_price)
                let total = price * item.quantity
                return total.toFixed(2)
            }
            return(
                <div className='row mt-2'>
                    <div className='col-3 h-25'>
                        <img src={item.product.image_urls[0]} width='100px'/>
                    </div>
                    <div className='col-4'>
                        <h3>{`Product Name: ${item.product.short_name}`}</h3>
                        <h3>{`Cost: ₦ ${item.product.sales_price}`}</h3>
                        <h3>{`QTY: ${item.quantity}`}</h3>
                    </div>
                    <div className='col-4'>
                        <h3>Delivery Option</h3>
                        <Radio.Group size='large' onChange={(e)=>this.onChange(e, item['id'])} value={this.state.value[item['id']]}>
                            <div className='mt-1'>
                                <Radio value={1}>Express Delivery</Radio>
                            </div>
                            <div className='mt-1'>
                                <Radio value={2}>Other Service</Radio>
                            </div>
                        </Radio.Group>
                    </div>
                </div>  
                )
            }

        return(
            <div className='mt-5'>
                <div>
                    <h2>
                        Review your items and confirm shipping
                    </h2>
                </div>

                <Divider></Divider>

                <div className='pl-3 container'>

                    <div className='w-100'>
                        {
                            this.props.cart.map((item, key)=>{
                                return itemView(item)
                            })
                        }
                    </div>
                    <Divider></Divider>
                    <div className='mt-5'>                   
                        <Button type="primary"  onClick={(e)=>{   
                          this.props.addToOrderCart(this.props.userInfo)
                          this.props.history.push('/thanks')
                      }}>Place Order</Button>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = ({auth, product})=>{
    return{
        cart: product.cart,
        userInfo: auth.userInfo
    }
}
const mapDispatchToProps = (dispatch) => ({
    addToOrderCart: (userInfo) => dispatch(addToOrderCart(userInfo)),
    registerUser: (values) => api.register(values),
    setLoading: (val) => dispatch(setting.setLoading(val)),
    emailConfirmAction: (state) => dispatch(auth.emailConfirmAction(state)),
    signin: (data) => api.signin(data),
    saveToken: (token) => dispatch(auth.saveToken(token)),

});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ItemReview))