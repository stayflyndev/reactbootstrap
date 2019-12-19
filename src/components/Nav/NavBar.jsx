// output the navbar

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';



const NavBar = () => {
    return (
        <div>
        <AppBar position="static">
        <Toolbar>
            <Typography varient="title" color="inherit">
                Order Some Food
            </Typography>
            <Button href="#" color="secondary" variant="contained">
                    Login
          </Button>
        </Toolbar>

            </AppBar>
            
        </div>
    );
}

export default NavBar;
