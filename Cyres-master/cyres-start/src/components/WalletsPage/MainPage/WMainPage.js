import React,{Component} from 'react';
import classes from './WMainPage.css';
import Logo from '../../Logo/Logo';
import {input} from 'react-mdl';
import {BrowserRouter as Router , Link,Button} from 'react-router-dom';
import Layout from '../../Layout/Layout';



class WMainPage extends Component {
    render(){
        return(
          <Layout>
			<body className={classes.body}>
        <div className={classes.main}>
           <h4>Balances</h4>
		   <div className="row">
			    <div className="col-md-6">
					<form>
					<input type="checkbox" value="Hide"></input>
					</form>
					</div> 
			    <div className="col-md-6">
					<div className={classes.value}>
						<p>Estimated value :<b> 0.0000000 BTC / $0.00</b></p>
						<small>24h Withdrawl limit:2BTC  In use:0BTC</small>
						</div>
					
					</div> 
				
		   </div>
		   <div>
<table>
  <tr>
    <th>Coin</th>
    <th>Name</th> 
    <th>Total Balance</th>
    <th>Available Balance</th>
    <th>In Order</th>
    <th>BTC Value</th>		
    <th></th>
    <th></th>
    <th></th>		
  </tr>
  <tr>
    <td>ETH</td>
    <td>Etherium</td> 
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>	
    <td> <Link to="/DepositPage"><button className={classes.button4} >Deposit</button></Link></td>
    <td><Link to="/WithdrawlPage"><button className={classes.button4}>Withdrawl</button></Link></td>
    <td><button className={classes.button4}>Trade</button></td>
	
  </tr>
    <tr>
    <td>BTC</td>
    <td>Bitcoin</td> 
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>	
<td> <Link to="/DepositPage"><button className={classes.button4} >Deposit</button></Link></td>
    <td><Link to="/WithdrawlPage"><button className={classes.button4}>Withdrawl</button></Link></td>
    <td><button className={classes.button4}>Trade</button></td>
	
  </tr>
    <tr>
    <td>LIT</td>
    <td>Lite Coin</td> 
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>	
<td> <Link to="/DepositPage"><button className={classes.button4} >Deposit</button></Link></td>
    <td><Link to="/WithdrawlPage"><button className={classes.button4}>Withdrawl</button></Link></td>
    <td><button className={classes.button4}>Trade</button></td>
	
  </tr>
    <tr>
    <td>RIP</td>
    <td>Ripple</td> 
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>
    <td>0.00000000</td>	
<td> <Link to="/DepositPage"><button className={classes.button4} >Deposit</button></Link></td>
    <td><Link to="/WithdrawlPage"><button className={classes.button4}>Withdrawl</button></Link></td>
    <td><button className={classes.button4}>Trade</button></td>
	
  </tr>
</table>
		   </div>
       </div>
        </body>
        </Layout>
		);
    }
}



export default WMainPage;