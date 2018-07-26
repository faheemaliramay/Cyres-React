import React from 'react';
import classes from './Ripple.css';
import Ripple from './../../assets/images/Ripple.jpg';

const ripple =(props) =>(
    <div className={classes.Ripple}>
        <img src={Ripple}  alt="Ripple" />
        </div>

);

export default ripple;