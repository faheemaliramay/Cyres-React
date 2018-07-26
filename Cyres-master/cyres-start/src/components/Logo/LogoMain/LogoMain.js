import React from 'react';
import cyreslogo from '../../../assets/images/36969985_1477709135668176_5364760378607665152_n.png';
import classes from './LogoMain.css';

const logoMain = (props) => (
    <div className={classes.Logo}>
        <img  src={cyreslogo} alt="cyres logo" />
    </div>
);

export default logoMain;