import React, { Component } from 'react';
import {connect} from "react-redux";
import {Form, Input, Button, notification, Select, DatePicker} from 'antd';
import './style.scss';
import * as api from "../../../Api/ChildrenApi";
import * as action from '../../../redux/auth/action';
import * as setting from "../../../redux/settings/action";
import ApiConfig from '../../../config/ApiConfig';
import csc from 'country-state-city';
import moment from 'moment';
const FormItem = Form.Item;
const { Option } = Select;

class AccountingForm extends Component{
  static self;
  constructor(props) {
    super(props);
    AccountingForm.self = this;
    this.state = {
      uploadModal: false,
      userInfo: props.userInfo,
      countries: [],
      states: [],
      birthday: null,
      avatar:  props.userInfo.avatar ? props.userInfo.avatar : ApiConfig.serverProURL+'/resources/images/avatar.jpg',
    };
  }

  componentDidMount() {
    if(this.state.userInfo) {
      this.setFormValue(this.state.userInfo);
    }
    this.getAllCountries();
  }

  getAllCountries() {
    let countries = csc.getAllCountries();
    this.setState({
      countries: countries,
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.userInfo !== this.props.userInfo) {
      this.setState({
        userInfo: this.props.userInfo
      });
      this.setFormValue(this.props.userInfo)
    }
  }

  setFormValue = (userInfo) => {
    let states = csc.getStatesOfCountry(userInfo.country);
    this.setState({
      states: states,
    });
    this.props.form.setFieldsValue({ 'surname': userInfo.surname });
    this.props.form.setFieldsValue({ 'name': userInfo.name });
    this.props.form.setFieldsValue({ 'email': userInfo.email });
    this.props.form.setFieldsValue({ 'phone': userInfo.phone });
    this.props.form.setFieldsValue({ 'gender': userInfo.gender });
    this.props.form.setFieldsValue({ 'country': userInfo.country });
    this.props.form.setFieldsValue({ 'state': userInfo.state });
    this.props.form.setFieldsValue({ 'city': userInfo.city });
    this.props.form.setFieldsValue({ 'address': userInfo.address });
    this.props.form.setFieldsValue({ 'postal_code': userInfo.postal_code });
  };


  updateAvatar() {
    this.setState({
      avatar: this.state.preview,
      avatar_updated: true,
      uploadModal: false
    })
  };

  cancelUploadModal = () => {
    this.setState({
      uploadModal: false
    })
  };

  updatePreview = preview => {
    this.setState({
      preview: preview
    })
  };

  onSubmit = event => {
    event.preventDefault();
    const { form } = this.props;
    form.validateFields((error, values) => {
      values = {
        ...values,
        'birthday': values['birthday'].format('YYYY-MM-DD'),
        'status': 2
      }
      if (!error) {
        this.props.setLoading(true);
        AccountingForm.self.props.updateUser(values).then(resp => {
          AccountingForm.self.props.setLoading(false);
          AccountingForm.self.props.getMeSuccess(resp.data);
          notification.success({
            message: 'Updated Succeed',
            description: 'You updated  your account setting successfully',
          });
        });
      }
    })
  };

  onChangeCountry = (value) => {
    let states = csc.getStatesOfCountry(value);
    this.setState({
      states: states,
    })
    // this.props.form.setFieldsValue({ 'country': userInfo.country });
  }

  render() {
    const { form } = this.props;
    return (
      <div className='personal-info'>
        <Form layout="vertical" className='form-group row' hideRequiredMark onSubmit={this.onSubmit}>
          <label className='personal-info__head col-12'>Personal Information</label>
          <FormItem className='col-2 form-item' label="Your SurName">
            {form.getFieldDecorator('surname', {
              rules: [{ required: true, message: 'Please input your name' }],
            })(<Input size="default" />)}
          </FormItem>
          <FormItem className='col-2 mr-5 form-item' label="Your Name">
            {form.getFieldDecorator('name', {
              rules: [{ required: true, message: 'Please input your name' }],
            })(<Input size="default" />)}
          </FormItem>
          <FormItem className='col-3 form-item' label="Your Phone Number">
            {form.getFieldDecorator('phone', {
              rules: [{ required: true, message: 'Please input your phone number' }],
            })(<Input disabled={true} size="default" />)}
          </FormItem>
          <FormItem className='col-3 form-item' label="Your Email Address">
            {form.getFieldDecorator('email', {
              rules: [{ required: true, message: 'Please input your email address' }],
            })(<Input disabled={true} size="default" />)}
          </FormItem>
          <FormItem className='col-3 mr-lg-5 form-item' label="Gender">
            {form.getFieldDecorator('gender', {
              rules: [{ required: true, message: 'Please input your email address' }],
            })(
              <Select defaultValue={0} size="default" >
                <Option value={1}>Male</Option>
                <Option value={0}>Female</Option>
              </Select>
            )}
          </FormItem>
          <FormItem className='col-8 form-item' label="BirthDay">
            {form.getFieldDecorator('birthday', {
              rules: [{ required: true, message: 'Please input your birthday' }],
            })(
              <DatePicker/>
            )}
          </FormItem>

          <label className='personal-info__head col-12'>Home Address</label>
          <FormItem className='col-12 form-item' label="Address">
            {form.getFieldDecorator('address', {
              rules: [{ required: true, message: 'Please input address' }],
            })(<Input style={{width: '40%'}} size="default" />)}
          </FormItem>
          <FormItem className='col-3 mr-3 form-item' label="Country">
            {form.getFieldDecorator('country', {
              rules: [{ required: true, message: 'Please input country' }],
            })(
              <Select
                showSearch
                placeholder="Select a country"
                optionFilterProp="children"
                onChange={this.onChangeCountry}
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {this.state.countries.map((country, index) => {
                  return <Option key={index} value={country.id}>{country.name}</Option>
                })}
              </Select>
              )}
          </FormItem>
          <FormItem className='col-3 form-item mr-2' label="State">
            {form.getFieldDecorator('state', {
              rules: [{ required: true, message: 'Please input country' }],
            })(
              <Select
                showSearch
                placeholder="Select a state"
                optionFilterProp="children"
                filterOption={(input, option) =>
                  option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                }
              >
                {this.state.states.map((state, index) => {
                  return <Option key={index} value={state.id}>{state.name}</Option>
                })}
              </Select>
              )}
          </FormItem>
          <FormItem className='col-3 form-item' label="City">
            {form.getFieldDecorator('city', {
              rules: [{ required: true, message: 'Please input your city' }],
            })(<Input size="default" />)}
          </FormItem>
          <FormItem className='col-12 form-item' label="Postal Code">
            {form.getFieldDecorator('postal_code', {
              rules: [{ required: true, message: 'Please input postal code' }],
            })(<Input style={{width: '40%'}} size="default" />)}
          </FormItem>
          <div className="form-actions col-12 form-item personal-info__button">
            <Button
              type="primary"
              htmlType="submit"
            >
              Save And Next
            </Button>
          </div>
        </Form>
    </div>
    )
  }
}

const PersonalInfo = Form.create()(AccountingForm);

const mapStateToProps = (state) => ({
  userInfo: state.auth.userInfo,
});

const mapDispatchToProps = (dispatch) => ({
  updateUser: (obj) => api.updateUser(obj),
  getMeSuccess: (me) => dispatch(action.getMeSuccess(me)),
  setLoading: (val) => dispatch(setting.setLoading(val))
});
export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo)