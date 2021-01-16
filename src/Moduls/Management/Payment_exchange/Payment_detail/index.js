import React, { Component } from "react";
import { Input, Button, Select, DatePicker, Modal } from 'antd';
import './style.scss';
import * as moment from 'moment';
// const { DatePicker } = antd;

const { MonthPicker } = DatePicker;
class Payment extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  disabledDate(current) {
    // Can not select days before today and today
    return current && current < moment().endOf('day');
  }
  render() {
    return (
      <div className='card accounting'>
        <div className='card-header'>
          Payment Options
        </div>
        <div className='card-body'>
          <div className='row d-block'>
            <label className='personal-info__head col-12 '><h4>ADD A PAYMENT METHOD</h4></label>
            <label className='personal-info__head col-12 '><h4>Credit or Debit Card</h4></label>
            <label className='personal-info__head col-12 '><h4>Enter Your Card Information : </h4></label>
            <div className="d-flex ml-2">
              <div className='phone-verification--item'>
                <div>
                  <Input
                    style={{ width: 180 }}
                    onChange={this.onChangePhoneCode}
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label className="cardname">Name</label>
                </div>
              </div>
              <div className='phone-verification--item ml-2'>
                <div>
                  <Input
                    style={{ width: 180 }}
                    onChange={this.onChangePhoneCode}
                    placeholder="Card Number"
                  />
                </div>
                <div>
                  <label className="cardnum">Card Number</label>
                </div>
              </div>
              <div className="pt-2 ml-2">
                <MonthPicker disabledDate={this.disabledDate} placeholder="Select month" />
                <div>
                  <label>Expiration Date</label>
                </div>
              </div>
              <div className="pt-2 ml-2">
                <Button
                  type="primary"
                  htmlType="submit"
                >
                  ADD
                </Button>
              </div>
            </div>
            <div className="custom-control custom-checkbox mt-0 mb-0 ml-2">
                <input type="checkbox" className="custom-control-input"
                  id="newsletter-signup" />
                <label className="custom-control-label"
                  htmlFor="newsletter-signup">Set as default payment option</label>
              </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Payment
