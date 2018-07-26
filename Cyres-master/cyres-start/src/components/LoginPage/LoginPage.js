import React,{Component} from 'react';
import classes from './LoginPage.css';
import Logo from '../Logo/Logo';
import {BrowserRouter as Router , Link, Redirect} from 'react-router-dom';
import Main from '../Main';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';
import axios from 'axios';


class LoginPage extends Component {
	state={
		email: '',
		password:'',
		redirect: false
	}
 setRedirect = () => {
    this.setState({
      redirect: true
    })
  };
renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/WMainPage' />
    }
  };

	postDataHandler=(e) =>{
	e.preventDefault();
	    const data={
		email:this.state.email,
		password:this.state.password
	};	
	axios.post('/login',data)
	.then(response =>{
		console.log("this is "+ response.data.signin.status);
		 if (response.data.signin.status == 1) {
            console.log(response.data.signin.message);
            this.setRedirect();
          } else {
			console.log(response.data);
			
          }
        }).catch(function (e) {

        }
        );
      
  }
    render(){
        return(
            <body>
	<Logo />
	<div className={classes.mainAgile}>
		<div className={classes.contentWthree}>
			<h2>Login</h2>
			<form>
								<div className={classes.inputsW3ls}>
									  <i className="fa fa-pencil"></i>  
									<input type="text" name="email" value={this.state.email} onChange={(event)=> 
									this.setState({
									email:event.target.value})} placeholder="Email Address"/>
								</div>
								<div className={classes.inputsW3ls}>
									 <i className="fa fa-key"></i> 
									<input
									type="password" name="Password" value={this.state.password} onChange={(event)=> 
									this.setState({
									password:event.target.value})} placeholder="Password"/>
								</div>
								<div>
									{this.renderRedirect()}
									<Link onClick={this.postDataHandler} to="/WMainPage"><input type="submit" value="LOGIN" /></Link>
									</div>
									<div className="col-md-12" className={classes.wthreeText}> 
										<div className="row">
                                         <div className="col-md-6">
											 <h6>
												 <Link style={{color:"#b5cd60"}}
											 to="/ForgetPassword">Forgot password?</Link>
											 </h6>
											</div>
                                            <div className="col-md-6">
											  <h6>
												  <Link style={{color:"#b5cd60"}}
											  to="/RegisterPage">CYRES Registeration</Link>
											  </h6>
										    </div>
                                            </div>
									</div>  
								</form>
		</div>
	</div>
    </body>
        );
    }
}


export default LoginPage;