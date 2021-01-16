import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Button } from 'antd';
import './style.scss';

class MyAccount extends Component{
  constructor(props) {
    super(props)

  }
  render() {
    return(
      <div className='my-account'>
        <div className='col-2'></div>
        <div className='col-8 row'>
          <div className='col-4'>
            <Link to='/profile'>
              <div className='card my-account__item'>
                <label>Profile Information</label>
                <p>Profile, Address(es)</p>
              </div>
            </Link>
          </div>
          <div className='col-4'>
            <Link to='/order'>
              <div className='card my-account__item'>
                <label>Orders</label>
                <p>Check an orders</p>
              </div>
            </Link>
          </div>
          <div className='col-4'>
            <Link to='/addlist'>
              <div className='card my-account__item'>
                <label>Lists</label>
                <p>Create, Edit Lists</p>
              </div>
            </Link>
          </div>
          <div className='col-4'>
            <Link to='/payment'>
              <div className='card my-account__item'>
                <label>Membership/Subscription</label>
                <p>Payment, Cards</p>
              </div>
            </Link>
          </div>
          <div className='col-4'>
            <Link to='/updatelogin'>
              <div className='card my-account__item'>
                <label>Security</label>
                <p>Login Details, Password</p>
              </div>
            </Link>
          </div>
          <div className='col-4'>
            <Link to='/device'>
              <div className='card my-account__item'>
                <label>Devices</label>
                <p>Device Management</p>
              </div>
            </Link>
          </div>
        </div>
        <div className='col-2'></div>
      </div>
    )
  }
}

export default MyAccount
