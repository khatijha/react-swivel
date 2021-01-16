import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as api from "../../../Api/ChildrenApi";
import * as setting from "../../../redux/settings/action";
import * as auth from "../../../redux/auth/action";
import * as product from "../../../redux/product/action";
import { Radio } from 'antd';
import { Divider } from 'antd';
import { Button, Form } from 'antd';
import { relativeTimeRounding } from "moment";
import { Input } from 'antd';
import './style.scss';


const FormItem = Form.Item;
class ConfirmShipping extends Component {
    static self;
    constructor(props) {
        super(props);
        ConfirmShipping.self = this;
        this.state = {
            userInfo: props.userInfo,
            edit: true,
            shipName: "Please insert name",
            address: "Insert shipping address",
            phone: "999-99999999",
        }
    }

    componentDidMount() {

        let userInfo = this.state.userInfo
        let ship_detail_first = {"shipName": userInfo.surname,"shipAddress":userInfo.address,"shipPhone":userInfo.phone,"shipPayment":"C","shipDeliveryOption":"Express"}
        this.props.shipDetail(ship_detail_first)  
     
        this.setState({shipName: userInfo.surname+' '+userInfo.name, address: userInfo.address, phone: userInfo.phone}) 
    }
   
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.state.userInfo !== this.props.userInfo) {
            this.setState({
                userInfo: this.props.userInfo
            });

            this.setFormValue(this.props.userInfo)
        }
    }

    // setFormValue = (userInfo) => {
    //     this.props.form.setFieldsValue({ 'surname': userInfo.surname+' '+userInfo.name});
    //     this.props.form.setFieldsValue({ 'phone': userInfo.phone });
    //     this.props.form.setFieldsValue({ 'address': userInfo.address });
    // };

    onChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }
    onEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    confirmAddress = () =>{

        
        this.props.onNext()
    }
    render() {
        const { form } = this.props;
        let { edit } = this.state
        return (
            <div className='mt-5'>
                <div>
                    <h2>
                        Shipping Address Confirmation
                    </h2>

                </div>

                <Divider></Divider>

                <div className='pl-3 container'>
                    <div className='row'>
                        <div className='col-5'>
                            <h2>
                                Address Details
                            </h2>
                        </div>

                    </div>
                    <div className='w-50'>
                        {/* <FormItem className='form-item'>
                            {form.getFieldDecorator('surname', {
                                rules: [{ required: true, message: 'Please input your name' }],
                            })(<Input  addonBefore="Name&nbsp;&nbsp;&nbsp;&nbsp;" value = {this.state.name} type='text' readOnly={edit} />)}
                        </FormItem> */}
                        {/* <FormItem className='form-item'>
                            {form.getFieldDecorator('address', {
                                rules: [{ required: true, message: 'Please input your name' }],
                            })(<Input addonBefore="Address" value = {this.state.address} type='text' readOnly={edit} />)}
                        </FormItem> */}

                        {/* <FormItem className='form-item'>
                            {form.getFieldDecorator('phone', {
                                rules: [{ required: true, message: 'Please input your name' }],
                            })(<Input addonBefore="Phone&nbsp;&nbsp;&nbsp;" type='text' readOnly={edit}/>)}
                        </FormItem> */}
                        <div className="space_height"></div>
                        <Input addonBefore="Name&nbsp;&nbsp;&nbsp;&nbsp;" value = {this.state.shipName} type='text' readOnly={edit} />
                        <div className="space_height"></div>
                        <Input addonBefore="Address" value = {this.state.address} type='text' readOnly={edit} />
                        <div className="space_height"></div>
                        <Input addonBefore="Phone&nbsp;&nbsp;&nbsp;" value={this.state.phone} type='text' readOnly={edit}/>                       

                    </div>
                    <Divider></Divider>
                    <div className='d-flex'>
                        <div className='mr-2'>
                            <Button type={edit ? 'primary' : 'secondary'} onClick={this.onEdit}>{edit ? "Edit Shipping Address" : "Update Shipping Address"}</Button>
                        </div>
                        <div>
                            <Button type="primary"
                                onClick={() => this.confirmAddress()}                               
                            >Confirm Address</Button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
const PersonalInfo = Form.create()(ConfirmShipping);
const mapStateToProps = (state) => ({
    userInfo: state.auth.userInfo,
    ship_detail: state.product.ship_detail
});

const mapDispatchToProps = (dispatch) => ({
    registerUser: (values) => api.register(values),
    setLoading: (val) => dispatch(setting.setLoading(val)),
    emailConfirmAction: (state) => dispatch(auth.emailConfirmAction(state)),
    signin: (data) => api.signin(data),
    saveToken: (token) => dispatch(auth.saveToken(token)),
    shipDetail: (value1) => product.shipDetail(value1),
                                         
});
export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)