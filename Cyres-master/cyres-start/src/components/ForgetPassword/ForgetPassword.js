import React,{Component} from 'react';
import classes from './ForgetPassword.css';
import Logo from '../Logo/Logo';

class ForgetPassword extends Component {
    render(){
        return(
            <body>
	<Logo />
	<div className={classes.mainAgile}>
		<div className={classes.contentWthree}>
			<h2>Reset Password</h2>
			<form>
								<div className={classes.inputsW3ls}>
									  <i className="fa fa-user"></i>  
									<input type="text" name="email" placeholder="Your Email Address"/>
								</div>
									<input type="submit" value="SUBMIT" />  
								</form>
		</div>
	</div>
    </body>
        );
    }
}


export default ForgetPassword;