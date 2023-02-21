import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="a" href = '/' sx={{ flexGrow: 1 }}>
            Home
          </Typography>
          <Typography variant="h6" component="a" href = 'about' sx={{ flexGrow: 1 }}>
            About
          </Typography>
          <Typography variant="h6" component="a" href = 'student' sx={{ flexGrow: 1 }}>
            Students
          </Typography>
          <Typography variant="h6" component="a" href = 'login' sx={{ flexGrow: 1 }}>
            Login
          </Typography>
          <Button color="inherit" variant='outlined'>Test Button</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}





// import {NavLink} from 'react-router-dom'

// function NavBar() {
//     return (
//         <div className="NavBar">
//             <ul className="menu">
//                 <li><NavLink to="/">Home</NavLink></li>
//                 <li><NavLink to="/about">About</NavLink></li>
//                 <li><NavLink to="/students">Students</NavLink></li>
//                 <li><NavLink to="/login">Login</NavLink></li>
//             </ul>
//         </div>
//     )
// }

// export default NavBar