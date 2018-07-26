import React,{Component} from 'react';
import classes from './DepositPage.css';
import Layout from '../../Layout/Layout';

class depositPage extends Component {
    render(){
        return(
            <Layout>
            <body className={classes.body}>
                <div className={classes.main}>
                <h5 className={classes.top}>Deposit</h5>
            <div className="row">
                <div className="col-md-6">
                        <div className={classes.jumbo1}>
                            <div className={classes.internal}>
                            <div className="row">
                                <div className="col-md-3">
                                    <p>Total Balance <br/>
                                    In Order <br/>
                                    Available Balance</p>
                                    
                                </div>
                                <div className="col-md-3">
                                    <p>0.00000000 ETH <br/>
                                    0.00000000 ETH <br/>
                                    0.00000000 ETH</p>                                    
                                </div>
                                
                            </div>
                            <div className="jumbotron">
                                <h5 className={classes.marg}>Important</h5>
                                <ul>
                                    <li>Send only ETH to this deposit address.
                                        Sending any other coin or token to this address may result in the loss of your deposit.</li>
                                </ul>
                                <p>ETH Deposit Address</p>
                                <p className={classes.address}><b>DdzFFzCqrhspBGt1eFtEYjhgFZSvXoDqT2y5
                                   fGCcfkUFZL2bHxZhMz<br />Y1dj6cpao4CRzJ1Z8kk
                                   dmzp2NaAQiZ39CTqNhLGZ3Nn1Kbxqwa</b></p>
                                   <button className={classes.button1}>Copy Address</button>
                            </div>
                            <ul className={classes.list}><b>Please Note :</b>
                                 <li>Coins will be deposited immediatly after 15 network confirmation.</li>
                                 <li>After making a deposit, you can track its progress on the history page.</li>
                            </ul>
                            <hr />
                            <p><b>Go to Trade</b></p>
                            <a href="#">ETH/BTC>  </a>
                            <a href="#">ETH/LIT>  </a>
                            <a href="#">ETH/RIP></a>
                            
                            </div>
                        </div>
                    
                </div>
                <div className="col-md-6">
                    <div className={classes.jumbo2}>
                            <div className={classes.head}>
                            <div className="row">
                                <div className="col-md-3">
                                    <p className={classes.para}>History</p>
                                </div>
                                <div className="col-md-9">
                                   <div className={classes.viewall}>
                                    <a href="">Deposit didn`t arrive ? </a>
                                    |View All
                                    </div>
                                    <h4 className={classes.awain}>You have no deposit history</h4>
                                </div>
                                </div>
                            </div>
                            
                    </div>          
                </div>                
            </div>
            </div>
            </body>
            </Layout>
        );        
    }
}


export default depositPage;