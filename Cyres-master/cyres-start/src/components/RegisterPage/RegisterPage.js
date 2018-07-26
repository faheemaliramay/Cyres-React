import React,{Component} from 'react';
import classes from './RegisterPage.css';
import Logo from '../Logo/Logo';
import {BrowserRouter as Router , Link, Redirect} from 'react-router-dom';
import Main from '../Main';
import axios from 'axios';

class RegisterPage extends Component {
		state={
		name:'',
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
      return <Redirect to='/' />
    }
  };

	postDataHandler=(e) =>{
	e.preventDefault();
	    const data={
		name:this.state.name,
		email:this.state.email,
		password:this.state.password
	};
	// console.log(data);	
	axios.post('/signup',data).then(response =>{
		console.log("this is "+ response.data.signup.satus);
		 if (response.data.signup.satus == 1) {
            console.log(response.data.signup.message);
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
			<h2>Register</h2>
			<form>
								<div className={classes.inputsW3ls}>
									  <i className="fa fa-user"></i>  
									<input type="text" name="fullname" value={this.state.name} onChange={(event)=> 
									this.setState({
									name:event.target.value})} placeholder="Full Name"/>
								</div>
								<div className={classes.inputsW3ls}>
									  <i className="fa fa-user"></i>  
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
								<div className={classes.inputsW3ls}>
									 <i className="fa fa-key"></i> 
									<input
									type="password" name="ConfirmPassword" placeholder="Confirm Password"/>
								</div>
								<div>
									{this.renderRedirect()}
									<Link onClick={this.postDataHandler} to="/"><input type="submit" value="Register" /></Link>
									<div className={classes.wthreeText}> 
										 </div>
											 <h6>Already Register?  
												 <Link style={{color:"#b5cd60"}} 
											 to="/">Log in</Link></h6>
										
									</div>  
								</form>
		</div>
	</div>
    </body>
        );
    }
}


export default RegisterPage;