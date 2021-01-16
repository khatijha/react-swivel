import React, {Component} from "react";
import { Steps } from 'antd';
import * as api from "../../Api/ChildrenApi";
import * as setting from "../../redux/settings/action";
import * as auth from "../../redux/auth/action";
import {connect} from "react-redux";
import Step1 from "./StepComponents/step1"
import Step2 from "./StepComponents/step2"
import Step3 from "./StepComponents/step3"
import { Link } from "react-router-dom";

import { message, Button } from 'antd';

import {withRouter} from "react-router-dom";

const { Step } = Steps;

class CheckoutShipping extends Component {
    constructor(props) {
        super(props);
        this.state={
            current:0
        }
    }
    onNext = ()=>{
        let next = this.state.current + 1
        this.setState({current:next})
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
        })
    }
    handleChangeRadio = (current)=>{
        this.setState({current})
    }
    doLogin = (event)=>{
        let req = {}
        req.email = this.state.l_email || 'kumiyeoo@outlook.com'
        req.password = this.state.l_password || 'abc.1234'
        req.is_customer = true

        this.props.signin(req).then((resp)=>{
            this.props.saveToken({token: resp.data.token});
            message.success('Login Success');
        }).catch(e=>{
            message.error('Invalid Login Credentials');
        })
        event.stopPropagation();
        event.preventDefault();
    }

    render() {
        let {current} = this.state
        const {isAuthenticated} = this.props
        let showStep = (step)=>{
            switch (step) {
                case 0:
                    return <Step1 onNext={this.onNext}></Step1>
                case 1:
                    return <Step2 onNext={this.onNext}></Step2>
                case 2:
                    return <Step3 onNext={this.onNext}></Step3>
                default:
                    return <Step1 onNext={this.onNext}></Step1>
            }
        }
        let step = ()=>{
            return (
                <div className="container mb-6 mt-5">
                    <Steps current={current} onChange={(current)=>this.handleChangeRadio(current)}>
                        <Step title="Confirm Shipping" />
                        <Step title="Payment Method" />
                        <Step title="Items Review / Shipping" />
                    </Steps>
                    <div className='container'>
                        {
                            showStep(current)
                        }
                    </div>
                </div>
            )
        }
        let LoginForm = ()=>{
            return (
                <div className='mt-5'>
                    <div className="heading">
                        <h2 className="title">Login</h2>
                        <p>If you have an account with us, please log in.</p>
                    </div>
                    <form action="#">
                        <input type="email" className="form-control" placeholder="Email Address"
                               onChange={(e)=>{
                                   this.setState({'l_email':e.target.value})
                               }}
                               required/>
                        <input type="password" className="form-control" placeholder="Password" required
                               onChange={(e)=>{
                                   this.setState({'l_password':e.target.value})
                               }}
                        />
                        <div className="form-footer">
                            <button type="submit" className="btn btn-primary"
                                    onClick={e=>this.doLogin(e)}
                            >LOGIN</button>
                            <div className="d-flex">
                                <p className="mb-0">Not Signed Up? </p>&nbsp;<Link to='/account' className="text-uppercase text-info"> Create Account</Link>
                            </div>
                        </div>
                    </form>
                </div>
            )
        }
        return (
            <div className='container mb-6'>
            {
                isAuthenticated ?
                     step()
                    :
                     LoginForm()
            }
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

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(CheckoutShipping))
