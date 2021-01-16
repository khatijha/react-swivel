import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/bootstrap.min.css';
import './assets/css/style.css'
import './assets/vendor/fontawesome-free/css/all.min.css';
import './index.scss';
import "antd/dist/antd.css";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import 'react-toastify/dist/ReactToastify.css';
// import $ from 'jquery';
import 'jquery';
// import './assets/js/jquery.min.js';
// import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/plugins.min.js';
// import './assets/js/bootstrap.bundle.min.js';
// import './assets/js/jquery.countdown/jquery.countdown.min.js';
// import './assets/js/main_init.min.js';

import App from './app'

ReactDOM.render(
	<App /> , document.getElementById('root')
);