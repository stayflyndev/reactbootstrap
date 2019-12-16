// output the navbar

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';



const NavBar = () => {
    return (
        <div>
        <AppBar position="static">
        <Toolbar>
            <Typography varient="title" color="inherit">
                Order Some Food
            </Typography>
        </Toolbar>

            </AppBar>
            
        </div>
    );
}

export default NavBar;
