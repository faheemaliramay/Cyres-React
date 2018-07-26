import React,{Component} from 'react';
import classes from './WithdrawlPage.css';
import Layout from '../../Layout/Layout';

class withdrawlPage extends Component {
    render(){
        return(
            <Layout>
            <body className={classes.body}>
            <div className={classes.main}>
                {/* <br /> */}
                <h5 className={classes.top}>Withdrawls</h5>
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
                                <ul className={classes.list}>
                                    <li>Minimum withdrawal : 4ETH </li>
                                    <li>Do not withdraw directly to a crowdfund or ICO address.</li>
                                </ul>
                                <p><b>ETH Withdrawl Address</b></p>
                                <input className={classes.inputtext} type="text"></input>
                                <p><b>Amount</b><br/>
                                24h Withdrawl limit:0/2 BTC</p>
                                <input className={classes.inputtext} type="text" placeholder="Available 0.00000000"></input>
                                <button className={classes.button2} disabled>ETH</button>
                            
                                    <p>Transection fee : <b>0.00000000</b></p>
                                    <p className={classes.rightp}>Transection fee : <b>0.00000000</b></p>
                                

                                   <button className={classes.button1}>Copy Address</button>
                            </div>
                            <ul><b>Please Note :</b>
                                 <li>Once you have submit your withdrawal request,we will send a confirmation email.
                                     please then click on the confirmation link in your email.
                                 </li>
                                 <li>After making a withdrawal , you can track its progress on the history page.</li>
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
                                    <a href="">Didn`t receive an email ? </a>
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


export default withdrawlPage;