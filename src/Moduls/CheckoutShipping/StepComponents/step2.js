import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as api from "../../../Api/ChildrenApi";
import * as setting from "../../../redux/settings/action";
import * as auth from "../../../redux/auth/action";
import {Input, Radio} from 'antd';
import { Divider } from 'antd';
import { Button,  } from 'antd';
import {relativeTimeRounding} from "moment";
// const { Input } = antd;
class PaymentMethod extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value : 1,
            edit : true
        }
    }
    onChange = (e)=>{
        this.setState({
            value:e.target.value,
            edit:true
        })
    }
    onEditable = ()=>{
        this.setState({
            edit:!this.state.edit
        })
    }
    render() {
        let {value, edit} = this.state
        let paymentDetail = ()=>{
            switch (value) {
                case 1:
                    return(
                        <div className='mt-2 w-50'>
                            <Input readOnly={edit} type='text' addonBefore='PayPal Email' defaultValue='guixiao@paypal.com'/>
                        </div>
                    )
                case 2:
                    return(
                        <div className='mt-2 w-50'>
                            {
                                edit?<h3>Debit Card ending with 4242</h3>
                                :<Input readOnly={edit} type='text' addonBefore='Debit Card' defaultValue='4242 4242 4242 4242'/>
                            }

                        </div>
                    )
                default:
                    break;
            }
        }
        return(
            <div className='mt-5'>
                <div>
                    <h2>
                        Payment Method
                    </h2>

                </div>

                <Divider></Divider>

                <div className='pl-3'>
                    <div >
                        <h2>
                            How would like to pay
                        </h2>
                    </div>
                    <div className='container'>
                        <div>
                            <Radio.Group size='large' onChange={(e)=>this.onChange(e)} value={this.state.value}>
                                <div className='mt-1'>
                                    <Radio value={1}>Pay on Delivery</Radio>
                                </div>
                                <div className='mt-1'>
                                    <Radio value={2}>Pay With Card</Radio>
                                    {/* <Button size='small' type={edit?'primary':'secondary'} onClick={this.onEditable}>{edit?"Edit":"Update"}</Button> */}
                                </div>
                                {/* <div className='mt-1 d-flex'>
                                    <Input placeholder="" />
                                    <Button size='small' className="ml-4" style={{marginTop:'5px'}} type='primary' onClick={this.onEditable}>Add Gift Card</Button>
                                </div> */}
                            </Radio.Group>
                        </div>
                        {/* <div>
                            {
                                paymentDetail()
                            }
                        </div> */}
                    </div>
                    <Divider></Divider>
                    <div className='mt-5'>
                        <Button type="primary"
                            onClick={()=>this.props.onNext()}
                        >Proceed</Button>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = ({auth})=>{
    return{
        isAuthenticated:auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerUser: (values) => api.register(values),
    setLoading: (val) => dispatch(setting.setLoading(val)),
    emailConfirmAction: (state) => dispatch(auth.emailConfirmAction(state)),
    signin: (data) => api.signin(data),
    saveToken: (token) => dispatch(auth.saveToken(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(PaymentMethod))