import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as api from "../../../Api/ChildrenApi";
import * as setting from "../../../redux/settings/action";
import * as auth from "../../../redux/auth/action";
import {Divider, Button} from "antd";

class Step4 extends Component {
    render() {
        return(
            <div className='mt-5'>
                <h2>
                    Place Order
                </h2>
                <Divider></Divider>
                <Button type='primary'>Place Order Now</Button>
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
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Step4))