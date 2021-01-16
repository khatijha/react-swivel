import React, { Component } from "react";
import { Form, Input, Button, Icon, notification, Select, DatePicker } from 'antd'
import { connect } from "react-redux";
import { Modal } from 'react-bootstrap';

// import * as api from "../../../../Api/ChildrenApi";

// import * as action from '../../../../redux/auth/action';
// import * as setting from "../../../../redux/settings/action";
import './style.scss';
const FormItem = Form.Item;

class Updatelogin extends Component {
  static self;
  constructor(props) {
    super(props);
    Updatelogin.self = this;
    this.state = {
      showModal: false,
      modalContent: ''
    }
  }
  onSubmit = event => {
    event.preventDefault();
    const { form } = this.props;
    this.compareToFirstPassword();
    this.validateToNextPassword();
  };

  compareToFirstPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && value !== form.getFieldValue('new password')) {
      callback('Two passwords that you enter is inconsistent!');
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const { form } = this.props;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm password'], { force: true });
    }
    callback();
  };



  render() {
    const { form } = this.props;
    let { modalShow } = this.state
    return (
      <div className='card accounting'>
        <div className='card-header'>
          Update Login Details
        </div>
        <div className='card-body'>
          <Form layout="vertical" className='form-group row' hideRequiredMark onSubmit={this.onSubmit}>
            <label className='personal-info__head col-12 reset'><h4>RESET PASSWORD</h4></label>
            <FormItem className='col-12 form-item' label="OLD PASSWORD">
              {form.getFieldDecorator('old password', {
                rules: [{ required: true, message: 'Please input old password' },
                { validator: this.validateToNextPassword, }],
              })(<Input type='password' style={{ width: '40%' }} size="default" />)}
            </FormItem>
            <FormItem className='col-12 form-item' label="NEW PASSWORD">
              {form.getFieldDecorator('new password', {
                rules: [{ required: true, message: 'Please input new password' },
                { validator: this.compareToFirstPassword }],
              })(<Input type='password' id={'password'} style={{ width: '40%' }} size="default" />)}
            </FormItem>
            <FormItem className='col-12 form-item' label="CONFIRM PASSWORD">
              {form.getFieldDecorator('confirm password', {
                rules: [{ required: true, message: 'Please input confirm password' }],
              })(<Input type='password' id={'con_password'} style={{ width: '40%' }} size="default" />)}
            </FormItem>
            <div className="form-actions col-12 form-item personal-info__button">
              <Button
                type="primary"
                htmlType="submit"
              >
                UPDATE
            </Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
const UpdateloginSetting = Form.create()(Updatelogin);
const mapStateToProps = (state) => ({
});
const mapDispatchToProps = (dispatch) => ({

});
export default connect(mapStateToProps, mapDispatchToProps)(UpdateloginSetting)
