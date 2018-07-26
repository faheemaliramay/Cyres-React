import React from 'react';
import classes from './NavigationItemsmid.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {link} from 'react-router-dom';


const navigationItemsmid = () => (
    <ul className={classes.NavigationItemsmid}>
        <NavigationItem link="/WMainPage" active>Local Trade</NavigationItem>
        <NavigationItem link="/">Exchange</NavigationItem>             
    </ul>
);


export default navigationItemsmid;