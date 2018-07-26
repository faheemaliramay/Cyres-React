import React from 'react';
import classes from './Lite.css';
import Litecoin from './../../assets/images/Litecoin.jpg';

const lite =(props) =>(
    <div className={classes.Lite}>
        <img src={Litecoin} alt="Litecoin" />
        </div>
);

export default lite;