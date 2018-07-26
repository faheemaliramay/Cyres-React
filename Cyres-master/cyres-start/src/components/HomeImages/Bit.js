import React from 'react';
import Bitcoin from './../../assets/images/Bitcoin.jpg';
import classes from './Bit.css';

const bit = (props) =>(
    <div className={classes.Bit} >
        
        <img src={Bitcoin} alt="Bitcoin" />
</div>
);

export default bit;