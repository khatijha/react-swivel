import React, { Component } from "react";
import { Menu, Icon, Button } from 'antd';
import { connect } from "react-redux";
import { withRouter, Link } from "react-router-dom";
import { logout } from "../../../redux/auth/action";

const { SubMenu } = Menu;

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      user: this.props.userInfo,
      mode: 'inline',
      theme: 'light',
    }
  }
  componentDidMount() {
    if (this.props.userInfo && this.props.userInfo.status !== 3) {
      this.props.history.push('complete-profile')
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.state.user !== this.props.userInfo) {
      this.setState({
        user: this.props.userInfo
      });
      if (this.props.userInfo && this.props.userInfo.status !== 3) {
        this.props.history.push('complete-profile')
      }
    }
  }
  render() {
    return (
      <div>
        <Menu
          style={{ width: 256, border: 0 }}
          mode={this.state.mode}
          theme={this.state.theme}
        >
          <SubMenu
            key="profile"
            title={
              <span>
                <Icon type="profile" />
                <span>Profile</span>
              </span>}>
            <Menu.Item key="edit_profile"><Link to={'profile'}>Edit Profile</Link></Menu.Item>
            <Menu.Item key="address"><Link to={'address'}>Addresses(s)</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="order">
            <Link to={'order'}>
              <Icon type="up-square" />
              My Orders
            </Link>
          </Menu.Item>
          <SubMenu
            key="list"
            title={
              <span>
                <Icon type="setting" />
                <span>My Lists</span>
              </span>}>
            <Menu.Item key="add_list"><Link to={'addlist'}>Add List</Link></Menu.Item>
            <Menu.Item key="add_list_create"><Link to={'addlistscreated'}>Lists</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="membership"
            title={
              <span>
                <Icon type="appstore" />
                <span>Memberships/Subscriptions</span>
              </span>
            }>
            {/* <Menu.Item key="payment"><Link to={'payment'}>Payment Options</Link></Menu.Item> */}
            <Menu.Item key="subscribe"><Link to={'subscriptions'}>Subscriptions</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="security"
            title={
              <span>
                <Icon type="safety-certificate" />
                <span>Security</span>
              </span>
            }>
            <Menu.Item key="update_login"><Link to={'updatelogin'}>Update Login Details</Link></Menu.Item>
            <Menu.Item key="update_security"><Link to={'updatesecurity'}>Update Security Questions</Link></Menu.Item>
          </SubMenu>
          <SubMenu
            key="devices"
            title={
              <span>
                <Icon type="tablet" />
                <span>Devices</span>
              </span>}
          >
            <Menu.Item key="device_manage"><Link to={'device'}>Device Management</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key="signout">
            <a href="#" onClick={() => { this.props.signout() }}>
              <Icon type="logout" />
              Sign Out
            </a>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userInfo: state.auth.userInfo
});
const mapDispatchToProps = (dispatch) => ({
  signout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(SideBar))

