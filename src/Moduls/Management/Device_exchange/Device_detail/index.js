import React, { Component } from "react";

class Device extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return(
      <div className='card accounting'>
        <div className='card-header'>
          Device Management
        </div>
        <div className='card-body'>
          <div className='row d-block'>
          <label className='personal-info__head col-12 '><h3>Logged in Devices : </h3></label>
          <div className='ml-5'>
            <label className='personal-info__head col-12 '><h4>Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36</h4></label>
            <label className='personal-info__head col-12 '><h4>United States</h4></label>
            <label className='personal-info__head col-12 '><h4>174.128.180.168</h4></label>
            <label className='personal-info__head col-12 '><h4>2020-02-08 03:32:39</h4></label>
          </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Device
