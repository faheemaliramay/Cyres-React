import React from 'react';
import {Switch , Route} from 'react-router-dom';
import RegisterPage from './RegisterPage/RegisterPage';
import ForgetPassword from './ForgetPassword/ForgetPassword';
import WMainPage from './WalletsPage/MainPage/WMainPage';
import DepositPage from './WalletsPage/DepositPage/DepositPage';
import WithdrawlPage from './WalletsPage/WithdrawlPage/WithdrawlPage';

const Main = () => 
(

    <Switch>
        <Route path="/RegisterPage" component={RegisterPage} />
        <Route path="/ForgetPassword" component={ForgetPassword} />
        <Route path="/WMainPage" component={WMainPage} />
        <Route path="/DepositPage" component={DepositPage} />
        <Route path="/WithdrawlPage" component={WithdrawlPage} />
                
        
    </Switch>
)


export default Main; 