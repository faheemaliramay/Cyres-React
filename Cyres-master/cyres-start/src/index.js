import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import axios from 'axios';

axios.defaults.baseURL= "https://morning-headland-25777.herokuapp.com";
axios.defaults.headers.common['Authorization']= 'AUTH TOKEN';
axios.defaults.headers.post['Content-Type']= 'application/json';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
