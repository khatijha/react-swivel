import React, { Component } from "react";
import { Input, Button, Modal } from 'antd';
import {addToList} from "../../../../redux/product/action"
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import * as api from "../../../../Api/ChildrenApi";
import * as setting from "../../../../redux/settings/action";
import * as auth from "../../../../redux/auth/action";
import {addToOrderCart} from "../../../../redux/product/action";
import Select from 'react-select';
import './style.scss';
import {createStore, combineReducers} from 'redux'
import {reducer as toastrReducer} from 'react-redux-toastr'
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
import 'react-toastify/dist/ReactToastify.min.css';


const options = [
  { value: 'wish', label: 'Wish List' },
  { value: 'shopping', label: 'Shopping List' },
  { value: 'idea', label: 'Idea List' },
];
class Addlist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    };
  }
  state = {
    selectedOption: null,
  };  
  handleChange = selectedOption => {
    this.setState({ selectedOption: selectedOption });
  };
  updateInputValue(evt) {
    this.setState({
      inputValue: evt.target.value
    });
  }
  notifySuccess = () => { 
    toast.success("Success To Add List !", {
      containerId: 'A',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000
    });
  };
  notifyError = () => { 
    toast.info("Error To Add List !", {
      containerId: 'A',
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000
    });
  };
  eventAdd(listvalue){
    if(listvalue.selectValue===null || listvalue.inputValue=="")
    this.notifyError()
    else{
    this.props.addToList(listvalue);
    this.notifySuccess();}
  }
  render() {
    const { selectedOption } = this.state;
    const listallvalue={
      selectValue: selectedOption,
      inputValue: this.state.inputValue
    }
    return (
      <div className='card accounting'>
        <div className='card-header'>
          Add List
        </div>
        <div className='card-body'>
          <div className='select-header row'>
            <div className='select-type'>
              <label>Type: </label>
            </div> 
            <div className='select-body'><Select
              showSearch
              style={{ width: 300 }}
              placeholder="Select Type"
              optionFilterProp="children"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
            />      
            </div>    
                
          </div>
          <div className='phone-verification--item'>
            <label className='listname'>List Name: </label>
            <input className="list-input" placeholder="Name of List" value={this.state.inputValue} onChange={evt => this.updateInputValue(evt)}/>
          </div>
          <div className='phone-verification--bottom'>
            <Button type='primary' className='btn_add' onClick={()=>{this.eventAdd(listallvalue)}}>ADD</Button>
            <Button type='danger' onClick={this.checkPhoneCode}>CANCEL</Button>
          </div>
        </div>
        <div>
          <ToastContainer enableMultiContainer containerId={'A'} />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({  
  addToList: (selectedOption) => dispatch(addToList(selectedOption)),
});
export default connect(null, mapDispatchToProps)(withRouter(Addlist))
