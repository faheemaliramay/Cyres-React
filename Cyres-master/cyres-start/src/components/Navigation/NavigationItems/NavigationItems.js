import React from 'react';
import classes from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';
import {link} from 'react-router-dom';


const navigationItems = () => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/WMainPage" active>Balances</NavigationItem>
        <NavigationItem link="/">Orders</NavigationItem>
        <NavigationItem link="/">Join Us</NavigationItem>
        <NavigationItem link="/">Support</NavigationItem>
        <NavigationItem link="/">News</NavigationItem>
        <NavigationItem link="/">Profile</NavigationItem>                
    </ul>
);


export default navigationItems;