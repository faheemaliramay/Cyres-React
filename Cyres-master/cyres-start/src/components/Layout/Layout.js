import React from 'react';
import Aux from '../../hoc/Aux';
import Toolbar from '../../components/Navigation/Toolbar';
import classes from './Layout.css';

const Layout = (props) => (
    <Aux>
    <Toolbar />
    <main className={classes.Content}>
        {props.children}
    </main>

    </Aux>
);


export default Layout;