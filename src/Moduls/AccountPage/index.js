import React, { Component } from "react";
import * as setting from "../../redux/settings/action";
import * as auth from "../../redux/auth/action";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import * as api from '../../Api/ChildrenApi';
// import { message } from 'antd';
import { Modal, Button } from 'react-bootstrap';
class AccountPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            modalContent: ''
        }
    }
    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    message(props, text) {
        this.setState({
            modalShow: true,
            modalContent: props
        })
    }
    hideModal = () => {
        this.setState({
            modalShow: false
        })
    }

    doLogin = (event) => {
        let req = {}
        req.email = this.state.l_email || 'kumiyeoo@outlook.com'
        req.password = this.state.l_password || 'abc.1234'
        req.is_customer = true

        this.props.signin(req).then((resp) => {
            this.props.saveToken({ token: resp.data.token });
            this.props.getMeSuccess(resp.data.user);

            if (resp.data.user.status === 3) {
                this.props.history.push('/myaccount');
            } else {
                setTimeout(
                    function () {
                        this.props.history.push('/complete-profile');
                    }.bind(this),
                    1000
                );
            }
        }).catch(e => {
            this.message('invalid login')
        })
        event.stopPropagation();
        event.preventDefault();
    }

    doRegister = (event) => {
        if (this.state.middle_name = "undefined"){
            this.state.middle_name = "";
        }
        const { con_password, email, password, first_name, middle_name, surname } = this.state;
        let request = {
            surname,
            email,
            password
        };
        request['name'] = first_name + ' ' + middle_name;
        if (con_password !== password) {
            this.message("Password mismatch")
            return;
        }
        this.props.setLoading(true);
        this.props.registerUser(request).then(resp => {
            this.props.setLoading(false);
            this.props.emailConfirmAction(true);
            this.message('Successfully Registered. Activation link will be sent to your email.', 3);
        }).catch(e => {
            this.props.setLoading(false);
            if (e.response.status === 400) {
                let messages = e.response.data;
                for (let property in messages) {
                    if (property === 'email') {
                        this.message('That e-mail address is already registered. Try logging in or use a different e-mail address.', 3);
                    } else if (property === 'username') {
                        this.message('That username is already taken, please pick a new one.', 3)
                    } else {
                        this.message(messages[property][0], 3);
                    }
                }
            } else if (e.response.status === 404) {
                this.message('Same store name is already exist, Please try again', 3);
            }
        });
        event.preventDefault();
    };

    render() {
        let { isAuthenticated } = this.props;
        if (isAuthenticated) {
            this.props.history.push('/profile');
        }
        let { modalShow } = this.state
        return (
            <div>
                <div className="page-header">
                    <div className="container">
                        <h1>Login and Create Account</h1>
                    </div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="heading">
                                <h2 className="title">Login</h2>
                                <p>If you have an account with us, please log in.</p>
                            </div>

                            <form action="#">
                                <input type="email" className="form-control" placeholder="Email Address"
                                    onChange={(e) => {
                                        this.setState({ 'l_email': e.target.value })
                                    }}
                                    required />
                                <input type="password" className="form-control" placeholder="Password" required
                                    onChange={(e) => {
                                        this.setState({ 'l_password': e.target.value })
                                    }}
                                />

                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary"
                                        onClick={e => this.doLogin(e)}
                                    >LOGIN</button>
                                    <a href="#" className="forget-pass"> Forgot your password?</a>
                                </div>
                            </form>
                        </div>

                        <div className="col-md-6">
                            <div className="heading">
                                <h2 className="title">Create An Account</h2>
                                <p>By creating an account with our store, you will be able to move through the checkout
                                    process faster, store multiple shipping addresses, view and track your orders in
                                    your account and more.</p>
                            </div>

                            <form action="#">
                                <input type="text" className="form-control" id={'first_name'}
                                    onChange={e => this.handleChange(e)}
                                    placeholder="First Name" required />
                                <input type="text" className="form-control" id={'middle_name'}
                                    onChange={e => this.handleChange(e)}
                                    placeholder="Middle Name" required />
                                <input type="text" className="form-control" id={'surname'}
                                    onChange={e => this.handleChange(e)}
                                    placeholder="Last Name" required />

                                <h2 className="title mb-2">Login information</h2>
                                <input type="email" className="form-control" placeholder="Email Address"
                                    onChange={e => this.handleChange(e)}
                                    id={'email'}
                                    required />
                                <input type="password" className="form-control" placeholder="Password"
                                    onChange={e => this.handleChange(e)}
                                    id={'password'}
                                    required />
                                <input type="password" className="form-control"
                                    id={'con_password'}
                                    onChange={(e) => this.handleChange(e)}
                                    placeholder="Confirm Password" required />

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                        id="newsletter-signup" />
                                    <label className="custom-control-label"
                                        htmlFor="newsletter-signup">Sign up our
                                        Newsletter</label>
                                </div>

                                <div className="form-footer">
                                    <button type="submit" className="btn btn-primary"
                                        onClick={(e) => {
                                            this.doRegister(e)
                                        }}
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {
                    modalShow && <Modal
                        show={true}
                        size="lg"
                        aria-labelledby="contained-modal-title-vcenter"
                        centered
                        onHide={() => this.hideModal()}
                    >
                        <Modal.Header closeButton>
                            <Modal.Title id="contained-modal-title-vcenter">
                                Swivel Authentication
                            </Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <h4>
                                {this.state.modalContent}
                            </h4>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={() => this.hideModal()}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ auth }) => {
    return {
        isAuthenticated: auth.isAuthenticated
    }
}

const mapDispatchToProps = (dispatch) => ({
    registerUser: (values) => api.register(values),
    setLoading: (val) => dispatch(setting.setLoading(val)),
    emailConfirmAction: (state) => dispatch(auth.emailConfirmAction(state)),
    signin: (data) => api.signin(data),
    saveToken: (token) => dispatch(auth.saveToken(token)),
    getMeSuccess: (token) => dispatch(auth.getMeSuccess(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(AccountPage))

