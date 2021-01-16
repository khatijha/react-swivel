import React, {Component} from "react";

class ForgotPassword extends Component{
    render() {
        return (
            <div className="container mt-4 mb-10">
                <div className="heading mb-4">
                    <h2 className="title">Reset Password</h2>
                    <p>Please enter your email address below to receive a password reset link.</p>
                </div>

                <form action="#">
                    <div className="form-group required-field">
                        <label htmlFor="reset-email">Email</label>
                        <input type="email" className="form-control" id="reset-email" name="reset-email" required/>
                    </div>

                    <div className="form-footer">
                        <button type="submit" className="btn btn-primary">Reset My Password</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default ForgotPassword