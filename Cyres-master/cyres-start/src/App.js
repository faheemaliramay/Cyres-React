import React, { Component } from 'react';
import classes from './App.css';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import ForgetPassword from './components/ForgetPassword/ForgetPassword';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Main from './components/Main';
import WMainPage from './components/WalletsPage/MainPage/WMainPage';
import Toolbar from './components/Navigation/Toolbar';
import Layout from './components/Layout/Layout';
import DepositPage from './components/WalletsPage/DepositPage/DepositPage';
import WithdrawlPage from './components/WalletsPage/WithdrawlPage/WithdrawlPage';

class App extends Component {
  render() {
    return (
      <Router>
      <div>
        {/* <Toolbar /> */}
             {/* <Layout>  */}
              {/* <WMainPage />   */}
              {/* <DepositPage />  */}
              {/* <WithdrawlPage />      */}
             <Route path="/WMainPage" exact component={WMainPage}></Route> 
             <Route path="/DepositPage" exact component={DepositPage}></Route> 
            <Route path="/WithdrawlPage" exact component={WithdrawlPage}></Route>   
         {/* </Layout>      */}
  
        <Route path="/" exact component={LoginPage}></Route> 
        <Route path="/RegisterPage" component={RegisterPage}></Route>
        <Route path="/ForgetPassword" component={ForgetPassword}></Route>            
              
        {/* <WMainPage /> */}
         {/* <ForgetPassword />  */}
           {/* <RegisterPage />    */}
           {/* <LoginPage />    */}
        
      </div>
       </Router> 
    );
  }
}

export default App;
