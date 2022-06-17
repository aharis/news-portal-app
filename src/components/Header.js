import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link, BrowserRouter as Router } from 'react-router-dom';


const Header = () => {

  return (
    <Box sx={{ flexGrow: 1, paddingTop: 5 }}>
      <AppBar position="static">
        <Toolbar>
          <Router>
            <Link to='/'>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                News
              </Typography>
            </Link>
          </Router>
          <Typography></Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
