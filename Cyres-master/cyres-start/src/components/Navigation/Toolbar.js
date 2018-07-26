import React from 'react';
import {Link } from 'react-router-dom';
import classes from './Toolbar.css';
import LogoMain from '../../components/Logo/LogoMain/LogoMain';
import NavigationItems from './NavigationItems/NavigationItems';
import NavigationItemsmid from './NavigationItems/NavigationItemsmid';

const toolbar = (props) => (

    <header className={classes.Toolbar}>
        <LogoMain />
        <NavigationItemsmid />
        <nav>
            <NavigationItems />
        </nav>
        
    </header>
);

export default toolbar;